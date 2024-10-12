import { useState, useEffect } from 'react';
import { getPropertyContract } from '../lib/contracts/property/propertyClient';

export const useProperty = (propertyId: string) => {
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const contract = getPropertyContract();
        const result = await contract.getProperty({ id: propertyId });
        setProperty(result);
      } catch (error) {
        console.error('Failed to fetch property:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  return { property, isLoading };
};