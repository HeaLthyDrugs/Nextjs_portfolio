"use client";

import React, { useState, useEffect } from 'react';
import Loading from './Loading'; // Adjust the import path

export const LoadingContext = React.createContext(false);

export const LoadingProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <LoadingContext.Provider value={isLoading}>
      {isLoading ? <Loading /> : children}
    </LoadingContext.Provider>
  );
};
