import React, { FC } from 'react';
import { ButtonProps, ButtonSize, ButtonShape } from '../../interfaces'; // Assuming relative path for interfaces

// Helper function to map size prop to Tailwind classes
const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case 'small':
      return 'px-3 py-1 text-sm'; // Smaller padding, smaller text
    case 'medium':
      return 'px-4 py-2 text-base'; // Default padding and text
    case 'large':
      return 'px-6 py-3 text-lg font-semibold'; // Larger padding, bolder text
    default:
      return 'px-4 py-2 text-base';
  }
};

// Helper function to map shape prop to Tailwind classes
const getShapeClasses = (shape: ButtonShape): string => {
  switch (shape) {
    case 'rounded-sm':
      return 'rounded-sm'; // Very slight rounding
    case 'rounded-md':
      return 'rounded-md'; // Standard rounding (default)
    case 'rounded-full':
      return 'rounded-full'; // Pill/circular shape
    default:
      return 'rounded-md';
  }
};


/**
 * A reusable Button component with configurable size and shape.
 */
const Button: FC<ButtonProps> = ({ 
    size = 'medium', 
    shape = 'rounded-md', 
    children, 
    className = '', 
    ...rest 
}) => {
  
  const sizeClasses = getSizeClasses(size);
  const shapeClasses = getShapeClasses(shape);
  
  const baseClasses = 
    'bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${shapeClasses} ${className}`;

  return (
    <button 
      className={combinedClasses} 
      {...rest} // Spread native button props (like onClick, type, disabled)
    >
      {children}
    </button>
  );
};

export default Button;
