import { ReactNode } from "react";
import { UiHeader } from "../UiHeader";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <UiHeader />
      <main className="grow">{children}</main>
    </div>
  );
}
