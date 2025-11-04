import React from "react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={`rounded-lg shadow-md bg-white p-4 `}>{children}</div>;
};
