import React from 'react';
import PointsTable from './PointsTable';

export default function Points() {
  return (
    <div className="p-[4vw] flex flex-col gap-10 points">
      <h1 className="heading">Points Distribution</h1>
      <PointsTable/>
    </div>
  );
}
