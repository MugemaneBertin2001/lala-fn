import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { PropertyDetails } from "./property-details";

export const PropertyCard = ({ property }:any) => (
  <Card>
    <CardHeader>
      <CardTitle>Current Property</CardTitle>
      <CardDescription>
        {property.name} - {property.address}
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span>{property.address}</span>
        </div>
        <PropertyDetails property={property} />
      </div>
      <div className="border-t pt-4">
        <Button className="w-full">Report an Issue</Button>
      </div>
    </CardContent>
  </Card>
);
