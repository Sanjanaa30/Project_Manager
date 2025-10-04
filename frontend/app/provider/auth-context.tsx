import React, { createContext, useState } from "react";
import type { User } from "@/types";


interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const login = async (email: string, password: string) => {
        console.log("email, password");
    };

    const logout = async () => {
        console.log("logout");
    };

    const values = {
        user,
        isAuthenticated,
        isLoading,
        login,
        logout
    };

    return <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
        {children}
    </AuthContext.Provider>;
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


