"use client"
import { Button } from "@/components/ui/button";
import { Home, Check } from "lucide-react";
import { properties } from "../properties.d";
import { StatsCard } from "../stats-card";
import { PropertyList } from "../property-list";

export const HostProperties = () => {
  const totalRent = properties.reduce((sum, prop) => sum + prop.monthlyRent, 0);
  const occupiedCount = properties.filter(
    (p) => p.status === "occupied"
  ).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-gray-500">Manage your rental properties</p>
        </div>
        <Button>
          <Home className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Properties"
          value={properties.length}
          icon={Home}
          description="Properties in portfolio"
        />
        <StatsCard
          title="Occupied Properties"
          value={occupiedCount}
          icon={Check}
          description="Currently rented"
        />
        <StatsCard
          title="Monthly Revenue"
          value={`$${totalRent}`}
          icon={Home}
          description="Total rental income"
        />
        <StatsCard
          title="Occupancy Rate"
          value={`${Math.round((occupiedCount / properties.length) * 100)}%`}
          icon={Home}
          description="Properties rented"
        />
      </div>

      <PropertyList properties={properties} />
    </div>
  );
};
