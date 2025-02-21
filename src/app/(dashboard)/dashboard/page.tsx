// src/app/(dashboard)/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user?.role === "RENTER") {
      router.push("/renter/dashboard");
    } else if (user?.role === "HOST") {
      router.push("/host/dashboard");
    }
  }, [user, router]);

  return null;
}
