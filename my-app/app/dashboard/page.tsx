// components/Dashboard.tsx

import PropertyCard from '@/components/property-card';
import React from 'react';


interface DashboardProps {
  properties: any[]; // Replace 'any' with your actual property type
  investments: any[]; // Replace 'any' with your actual investment type
  totalValue: number;
}

const Dashboard: React.FC<DashboardProps> = ({ properties, investments, totalValue }) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Total Portfolio Value</h2>
        <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Investments</h2>
        {/* Implement investment list or cards here */}
      </div>
    </div>
  );
};

export default Dashboard;