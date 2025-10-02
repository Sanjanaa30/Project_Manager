import { Link, type MetaFunction } from "react-router";
import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to TaskHub - Your Project Management Solution!" },
  ];
};

const Homepage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center gap-4">
            <Link to="/sign-in">
                <Button className="bg-blue-500 text-white">Login</Button>
            </Link>
            <Link to="/sign-up">
                <Button className="bg-blue-500 text-white">Get Started</Button>
            </Link>
        </div>
    );
};

export default Homepage;