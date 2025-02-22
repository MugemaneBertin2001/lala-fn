import React from "react";

interface Property {
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

interface PropertyDetailsProps {
  property: Property;
  onDelete: () => void;
  onEdit: () => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  property,
  onDelete,
  onEdit,
}) => (
  <div className="grid gap-2">
    {/* Display the title */}
    <div className="flex justify-between">
      <span className="text-gray-500">Name</span>
      <span className="font-medium">{property.title}</span>
    </div>

    {/* Display the description */}
    <div className="flex justify-between">
      <span className="text-gray-500">Description</span>
      <span className="font-medium">{property.description}</span>
    </div>

    {/* Display the price per night */}
    <div className="flex justify-between">
      <span className="text-gray-500">Price Per Night</span>
      <span className="font-medium">${property.pricePerNight}</span>
    </div>

    {/* Display the location */}
    <div className="flex justify-between">
      <span className="text-gray-500">Location</span>
      <span className="font-medium">{property.location}</span>
    </div>

    {/* Display the host's name */}
    <div className="flex justify-between">
      <span className="text-gray-500">Host</span>
      <span className="font-medium">
        {property?.host?.firstName} {property?.host?.lastName}
      </span>
    </div>

    {/* Display availability */}
    <div className="flex justify-between">
      <span className="text-gray-500">Availability</span>
      <span className="font-medium">
        {property.available ? "Available" : "Not Available"}
      </span>
    </div>

    {/* Delete and Edit buttons */}
    <div className="flex justify-end gap-2 mt-4">
      <button
        onClick={onDelete}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Delete
      </button>
      <button
        onClick={onEdit}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Edit
      </button>
    </div>
  </div>
);
