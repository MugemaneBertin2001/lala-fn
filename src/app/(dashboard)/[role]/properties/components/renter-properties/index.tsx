"use client"
import { properties } from "../properties.d";
import { PropertyCard } from "../property-card";

export const RenterProperties = () => {
  const currentProperty = properties[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Property</h1>
        <p className="text-gray-500">
          View your current rental property details
        </p>
      </div>
      <PropertyCard property={currentProperty} />
    </div>
  );
};
