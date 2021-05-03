import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductSolutionsServicesComponent() {
  const { type } = useParams();

  return (
    <>
      <h2>At this location the component which shows all the products / models will be implemented</h2>
      {type === 'products' && <div>This is where all the products of the selected category could be shown.</div>}
      {type === 'solutions' && <div>This is where all the solutions of the selected category could be shown.</div>}
      {type === 'services' && <div>This is where all the services of the selected category could be shown.</div>}
    </>
  );
}