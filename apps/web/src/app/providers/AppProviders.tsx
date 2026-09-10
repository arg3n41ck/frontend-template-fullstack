"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

import { Toaster } from "@/shared/ui/shadcn/sonner";
import { TooltipProvider } from "@/shared/ui/shadcn/tooltip";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <NuqsAdapter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </NuqsAdapter>
  );
}
