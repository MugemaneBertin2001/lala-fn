"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Building, Calendar, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";

interface SidebarProps {
  className?: string;
  title?: string;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
        isActive && "bg-blue-50 text-blue-700"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
};

export function Sidebar({ className, title = "Rental Portal" }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user } = useAuth();

  // Base path depends on user role
  const basePath = user?.role === "HOST" ? "/host" : "/renter";

  const sidebarContent = (
    <div className="flex min-h-screen flex-col gap-4">
      <div className="flex h-[60px] items-center px-6">
        <Link
          href={`${basePath}/dashboard`}
          className="flex items-center gap-2"
        >
          <Building className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-semibold">{title}</span>
        </Link>
      </div>
      <div className="flex-1 px-3 py-2 space-y-1">
        <SidebarLink
          href={`${basePath}/dashboard`}
          icon={Home}
          label="Dashboard"
        />
        <SidebarLink
          href={`${basePath}/properties`}
          icon={Building}
          label="Properties"
        />
        <SidebarLink
          href={`${basePath}/bookings`}
          icon={Calendar}
          label="Bookings"
        />
        <SidebarLink
          href={`${basePath}/settings`}
          icon={Settings}
          label="Settings"
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={cn(
          "fixed z-40 md:hidden bg-white p-2 rounded-lg shadow-md",
          isMobileOpen
            ? "top-4 right-4" // Move to right when sidebar is open
            : "top-4 left-4" // Stay on left when sidebar is closed
        )}
      >
        {isMobileOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-white transform transition-transform duration-200 ease-in-out md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex h-screen w-64 flex-col fixed left-0 top-0 border-r bg-white",
          className
        )}
      >
        {sidebarContent}
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
