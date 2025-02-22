import { useAuth } from "@/contexts/auth-context";
import { useState, useEffect, useCallback, useMemo } from "react";

interface Host {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isNewUser: boolean;
  googleId: string;
  pictureUrl: string;
}

interface Property {
  id: number;
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  available: boolean;
  status: string;
  monthlyRent: number;
  host: Host;
}

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const validateToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not authenticated");
      window.location.href = "/login";
      return null;
    }
    return token;
  };

  const fetchProperties = useCallback(async () => {
    try {
      const token = validateToken();
      if (!token || !user) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/host/${user.id}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          return;
        }
        throw new Error(`Failed to fetch properties: ${response.statusText}`);
      }

      const data = await response.json();
      setProperties(data);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError(
        err instanceof Error ? err.message : "Failed to load properties"
      );
    } finally {
      setLoading(false);
    }
  }, [user]);

  const addProperty = async (newProperty: Omit<Property, "id" | "host">) => {
    setLoading(true);
    try {
      const token = validateToken();

      if (!token) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties?hostId=${user?.id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProperty),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create property");
      }

      const createdProperty = await response.json();
      setProperties((prev) => [...prev, createdProperty]);
      return createdProperty;
    } catch (err) {
      console.error("Error adding property:", err);
      setError(err instanceof Error ? err.message : "Failed to add property");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const stats = useMemo(() => {
    const totalRent = properties.reduce(
      (sum, prop) => sum + (prop.monthlyRent || 0),
      0
    );
    const occupiedCount = properties.filter(
      (p) => p.status === "occupied"
    ).length;
    const occupancyRate = properties.length
      ? Math.round((occupiedCount / properties.length) * 100)
      : 0;

    return {
      totalProperties: properties.length,
      occupiedProperties: occupiedCount,
      monthlyRevenue: totalRent,
      occupancyRate,
    };
  }, [properties]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return {
    properties,
    loading,
    error,
    addProperty,
    refreshProperties: fetchProperties,
    stats,
  };
};
