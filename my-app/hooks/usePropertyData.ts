import { useState, useEffect } from 'react';
import { fetchProperties } from '../services/propertyService';
import { Property } from '@/types';


export function usePropertyData() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const fetchedProperties = await fetchProperties();
        setProperties(fetchedProperties);
        setError(null);
      } catch (err) {
        setError('Failed to fetch properties');
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  const refreshProperties = async () => {
    setLoading(true);
    try {
      const fetchedProperties = await fetchProperties();
      setProperties(fetchedProperties);
      setError(null);
    } catch (err) {
      setError('Failed to refresh properties');
      console.error('Error refreshing properties:', err);
    } finally {
      setLoading(false);
    }
  };

  return { properties, loading, error, refreshProperties };
}