
import React from 'react';

export default function Button({ children, className, variant, onClick }) {
  const buttonClasses = `rounded-md border border-transparent shadow-sm px-4 py-2 inline-flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${variant === 'outline' ? 'text-white bg-transparent hover:bg-white hover:text-black border-white' : 'text-white bg-gray-600 hover:bg-gray-700 border-gray-600'}`;

  return (
    <button className={`${buttonClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
