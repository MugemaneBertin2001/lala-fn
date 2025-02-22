import { Bath, BedDouble } from "lucide-react";

export const PropertyDetails = ({ property }:any) => (
  <div className="grid gap-2">
    <div className="flex justify-between">
      <span className="text-gray-500">Property Type</span>
      <span className="font-medium">Apartment</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Bedrooms</span>
      <div className="flex items-center gap-1">
        <BedDouble className="h-4 w-4" />
        <span className="font-medium">{property.bedrooms}</span>
      </div>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Bathrooms</span>
      <div className="flex items-center gap-1">
        <Bath className="h-4 w-4" />
        <span className="font-medium">{property.bathrooms}</span>
      </div>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-500">Monthly Rent</span>
      <span className="font-medium">${property.monthlyRent}</span>
    </div>
  </div>
);
