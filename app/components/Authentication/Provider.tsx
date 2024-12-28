import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context
const AuthContext = createContext<{
  id: string | undefined;
  setId: (id: string | undefined) => void;
}>({
  id: undefined,
  setId: () => {},
});

// Provide context in your app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<string | undefined>(() => {
    return localStorage.getItem("id") || undefined;
  });

  useEffect(() => {
    if (id) {
      localStorage.setItem("id", id);
    } else {
      localStorage.removeItem("id");
    }
  }, [id]);

  return (
    <AuthContext.Provider value={{ id, setId }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth state
export const useAuth = () => {
  return useContext(AuthContext);
};
