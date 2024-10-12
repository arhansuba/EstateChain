// app/page.tsx

import React from 'react';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/Propertycard';
import { fetchProperties  } from '@/services/propertyService';
import { Property } from '@/types/index';
export default async function Home() {
  const featuredProperties = await fetchProperties();

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property: Property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/properties" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              View All Properties
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">1. Browse Properties</h3>
              <p>Explore our curated list of tokenized real estate investments.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">2. Invest</h3>
              <p>Purchase tokens representing fractional ownership in properties.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">3. Earn Returns</h3>
              <p>Receive rental income and potential appreciation as the property value grows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}