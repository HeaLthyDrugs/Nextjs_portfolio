import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center cursor-pointer hover:scale-110 text-gray-500 transition-transform">
      {children}
    </h2>
  );
}
