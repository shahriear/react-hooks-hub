import React, { memo } from 'react';

const Components1 = ({ onClick, value }) => {
  console.log('Child Component Render');

  return (
    <div className="demo-child">
      <span className="demo-label">Child Component</span>

      <h3>useCallback Function</h3>

      <h2 className="demo-count">{value}</h2>

      <button onClick={onClick} className="demo-button">
        + Increase Child
      </button>
    </div>
  );
};

export default memo(Components1);
