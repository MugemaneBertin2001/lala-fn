export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const isValidRole = (role: string) => {
  return ["HOST", "RENTER"].includes(role);
};
