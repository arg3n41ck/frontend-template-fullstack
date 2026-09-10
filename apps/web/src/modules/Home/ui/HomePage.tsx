import type { HealthResponse } from "@template/contracts";
import { ArrowRight, Boxes, Database, Server } from "lucide-react";

import { Badge } from "@/shared/ui/shadcn/badge";
import { Button } from "@/shared/ui/shadcn/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/shared/ui/shadcn/card";
import { Separator } from "@/shared/ui/shadcn/separator";

const expectedHealth: HealthResponse = { status: "ok", service: "api" };

export function HomePage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 p-4 sm:p-8">
      <Card className="w-full max-w-3xl shadow-sm">
        <CardHeader className="gap-4">
          <div className="flex items-center justify-between gap-4">
            <Badge variant="secondary" className="gap-1.5"><Boxes aria-hidden="true" /> pnpm workspace</Badge>
            <span className="text-xs text-muted-foreground">health: {expectedHealth.status}</span>
          </div>
          <div className="space-y-2">
            <h1 className="font-heading text-3xl font-medium tracking-tight">Fullstack project template</h1>
            <CardDescription className="text-base">Next.js web, NestJS API, PostgreSQL and shared TypeScript contracts without a prebuilt product.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <Separator />
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border p-4">
              <Boxes className="mb-3 size-5 text-muted-foreground" aria-hidden="true" />
              <p className="font-medium">Web</p>
              <p className="text-sm text-muted-foreground">Next.js App Router</p>
            </div>
            <div className="rounded-lg border p-4">
              <Server className="mb-3 size-5 text-muted-foreground" aria-hidden="true" />
              <p className="font-medium">API</p>
              <p className="text-sm text-muted-foreground">NestJS</p>
            </div>
            <div className="rounded-lg border p-4">
              <Database className="mb-3 size-5 text-muted-foreground" aria-hidden="true" />
              <p className="font-medium">Data</p>
              <p className="text-sm text-muted-foreground">PostgreSQL + TypeORM</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild><a href="/api-contract">Read the contract guide <ArrowRight aria-hidden="true" /></a></Button>
        </CardFooter>
      </Card>
    </main>
  );
}
