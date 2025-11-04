import React from "react";
import type { ReactNode } from "react";
import { Header } from "@/components/Header/Header";

interface PageProps {
  children: ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className={`min-h-screen w-full bg-blue-100`}>
      <Header />
      {children}
    </div>
  );
};
