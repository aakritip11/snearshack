import React, { useState } from 'react';

const ShoeSizeDropdown = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const shoeSizes = [
    'Select Size',
    'US 5',
    'US 6',
    'US 7',
    'US 8',
    'US 9',
    'US 10',
    'US 11',
    'US 12',
  ];

  return (
    <div className="shoe-size-dropdown">
      <label htmlFor="shoe-size">Select Size:</label>
      <select id="shoe-size" value={selectedSize} onChange={handleSizeChange}>
        {shoeSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      {selectedSize !== 'Select Size' && <p>You selected: {selectedSize}</p>}
    </div>
  );
};

export default ShoeSizeDropdown;
