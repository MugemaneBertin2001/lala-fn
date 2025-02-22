import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { PropertyDetails } from "./property-details";
import { useRouter } from "next/router"; // Assuming you're using Next.js for routing

interface Property {
  id: string;
  name: string;
  address: string;
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  host: {
    firstName: string;
    lastName: string;
  };
  available: boolean;
}

interface PropertyCardProps {
  property: Property;
  onDelete: (id: string) => void; // Function to handle delete
  onUpdate: (id: string) => void; // Function to handle update
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onDelete,
  onUpdate,
}) => {
 

  const handleDelete = async () => {
    try {
      // Call your backend using NEXT_PUBLIC_API_URL
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/properties/${property.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add any authentication headers if needed (e.g., Authorization: Bearer <token>)
          },
        }
      );

      if (response.ok) {
        console.log("Property deleted successfully");
        onDelete(property.id); // Notify parent component
      } else {
        console.error("Failed to delete property");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleUpdate = () => {
    // Navigate to the update page or open a modal
  };

  return (
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
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>{property.address}</span>
          </div>
          <PropertyDetails
            property={property}
            onDelete={handleDelete}
            onEdit={handleUpdate} // Pass the update handler
          />
        </div>
        <div className="pt-4 border-t">
          <Button className="w-full">Report an Issue</Button>
        </div>
      </CardContent>
    </Card>
  );
};
