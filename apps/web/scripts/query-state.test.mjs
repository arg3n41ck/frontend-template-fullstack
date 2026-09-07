import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadSearchParams, serializeSearchParams } from '../src/lib/search-params.ts';
test('missing and malformed values have bounded defaults', () => {
 for (const value of ['', '0', '-1', '1.5', '2abc', 'Infinity', '1000001']) {
  assert.equal(loadSearchParams(new URLSearchParams({ page: value })).page, 1);
 }
 const state=loadSearchParams(new URLSearchParams('limit=999&order=evil&q='+ 'x'.repeat(201)));
 assert.deepEqual(state, {q:'',page:1,limit:20,order:'asc'});
});
test('valid Unicode search and numeric values round-trip', () => {
 const value={q:'Бишкек & test',page:3,limit:50,order:'desc'};
 assert.deepEqual(loadSearchParams(new URLSearchParams(serializeSearchParams(value))),value);
});
test('serialization preserves unrelated keys and fragment, removes defaults', () => {
 const url=serializeSearchParams('/?campaign=demo&page=9#results',{q:'hello',page:1});
 assert.ok(url.includes('campaign=demo')); assert.ok(url.endsWith('#results'));
 assert.ok(!url.includes('page=')); assert.ok(url.includes('q=hello'));
});
test('duplicate scalar keys use the first value consistently', () => {
 assert.equal(loadSearchParams(new URLSearchParams('page=2&page=3')).page,2);
});
