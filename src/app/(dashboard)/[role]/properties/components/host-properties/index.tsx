"use client";
import { Home, Check } from "lucide-react";
import { StatsCard } from "../stats-card";
import { PropertyList } from "../property-list";
import { AddPropertyModal } from "./add-property-modal";
import { useProperties } from "../../../../../../hooks/user-properties";
import { useAuth } from "@/contexts/auth-context";

export const HostProperties = () => {
  const { properties, loading, error, addProperty, stats, refreshProperties } =
    useProperties();
  const { user } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading properties...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-500">Error: {error}</div>
      </div>
    );
  }


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-gray-500">Manage your rental properties</p>
        </div>
        {/* Pass hostId and onSubmit to AddPropertyModal */}
        <AddPropertyModal hostId={user?.id}  />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Properties"
          value={stats.totalProperties}
          icon={Home}
          description="Properties in portfolio"
        />
        <StatsCard
          title="Occupied Properties"
          value={stats.occupiedProperties}
          icon={Check}
          description="Currently rented"
        />
        <StatsCard
          title="Monthly Revenue"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          icon={Home}
          description="Total rental income"
        />
        <StatsCard
          title="Occupancy Rate"
          value={`${stats.occupancyRate}%`}
          icon={Home}
          description="Properties rented"
        />
      </div>

      <PropertyList properties={properties} />
    </div>
  );
};
