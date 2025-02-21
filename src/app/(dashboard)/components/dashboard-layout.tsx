"use client";
import { Sidebar } from "./Sidebar";
import { DashboardNavbar } from "./navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function DashboardLayout({ children,title }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar title={title} />
      <main className="md:pl-64">
        <DashboardNavbar title={title} />
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
