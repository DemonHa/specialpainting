"use client";

import { ToastProvider } from "@/components/toast";
import { DarkModeProvider } from "@/features/darkmode";

export function Providers({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <DarkModeProvider>
      <ToastProvider>{children}</ToastProvider>
    </DarkModeProvider>
  );
}
