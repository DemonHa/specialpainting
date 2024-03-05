"use client";

import { DarkModeProvider } from "@/features/darkmode";

export function Providers({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
