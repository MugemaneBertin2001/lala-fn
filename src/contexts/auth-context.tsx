"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

// Types
interface AuthUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  googleId: string;
  pictureUrl: string;
  authorities: Array<{ authority: string }>;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (response: AuthResponse) => void;
  logout: () => void;
  checkAuth: () => boolean;
}

interface AuthResponse {
  token: string;
  message: string;
  user: AuthUser;
  newUser: boolean;
}

// Create context
const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isLoading: true,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  checkAuth: () => false,
});

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        // Clear potentially corrupted data
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Handle login
  const login = (response: AuthResponse) => {
    try {
      // Store in state
      setToken(response.token);
      setUser(response.user);

      // Store in localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      // Redirect based on role
      if (response.newUser) {
        router.push("/complete-profile");
      } else {
        switch (response.user.role) {
          case "RENTER":
            router.push("/renter/dashboard");
            break;
          case "HOST":
            router.push("/host/dashboard");
            break;
          default:
            router.push("/dashboard");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login error (e.g., show notification)
    }
  };

  // Handle logout
  const logout = () => {
    try {
      // Clear state
      setToken(null);
      setUser(null);

      // Clear storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirect to login
      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Check if user is authenticated
  const checkAuth = (): boolean => {
    const hasToken = Boolean(token);
    const hasUser = Boolean(user);
    return hasToken && hasUser;
  };

  // Context value
  const value = {
    user,
    token,
    isLoading,
    isAuthenticated: checkAuth(),
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Utility hook for protected routes
export const useProtectedRoute = (allowedRoles?: string[]) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login");
      } else if (allowedRoles && !allowedRoles.includes(user?.role || "")) {
        router.push("/unauthorized");
      }
    }
  }, [isAuthenticated, isLoading, router, allowedRoles, user?.role]);

  return { isLoading, isAuthenticated, user };
};
