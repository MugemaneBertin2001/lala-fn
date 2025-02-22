"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Home } from "lucide-react";

interface AddPropertyModalProps {
  hostId: any; // Ensure hostId is passed as a prop
}

export function AddPropertyModal({ hostId }: AddPropertyModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    pricePerNight: "",
    location: "",
    available: true,
  });
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    setError(null); // Reset error state

    try {
      // Call the endpoint directly
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties?hostId=${hostId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create property");
      }

      const data = await response.json();
      console.log("Property created:", data); // Log the created property

      // Reset the form and close the modal
      setOpen(false);
      setFormData({
        title: "",
        description: "",
        pricePerNight: "",
        location: "",
        available: true,
      });
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to create property"
      );
      console.error("Error creating property:", error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      available: checked,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Home className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogDescription>
            Enter the details of your rental property
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Property Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter property title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your property"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pricePerNight">Price Per Night</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5">$</span>
              <Input
                id="pricePerNight"
                name="pricePerNight"
                type="number"
                value={formData.pricePerNight}
                onChange={handleInputChange}
                className="pl-7"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter property location"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="available">Available for Rent</Label>
              <p className="text-sm text-gray-500">
                Make this property visible to potential tenants
              </p>
            </div>
            <Switch
              id="available"
              checked={formData.available}
              onCheckedChange={handleSwitchChange}
            />
          </div>

          {error && <div className="text-sm text-red-500">{error}</div>}

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Property"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
