// components/host-dashboard/index.tsx
"use client";
import { HostStats } from "./host-stats";
import { HostActions } from "./host-actions";
import { HostActivity } from "./host-activity";

export function HostDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Host Dashboard</h1>
          <p className="text-gray-600">Property and tenant management</p>
        </div>

        <HostStats />
        <HostActions />
        <HostActivity />
      </main>
    </div>
  );
}
