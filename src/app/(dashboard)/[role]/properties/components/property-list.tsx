import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { PropertyDetails } from "./property-details";
import { PropertyStatusBadge } from "./property-status-badge";

export const PropertyList = ({ properties }:any) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {properties.map((property:any) => (
      <Card key={property.id}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{property.name}</CardTitle>
            <PropertyStatusBadge status={property.status} />
          </div>
          <CardDescription className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {property.address}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <PropertyDetails property={property} />
            <div className="pt-4">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);
