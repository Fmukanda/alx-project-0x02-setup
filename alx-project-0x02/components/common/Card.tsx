import React, { FC } from 'react';
import { CardProps } from '../../interfaces'; // Adjust path based on your project structure

/**
 * A reusable card component to display dynamic title and content.
 * It uses a simple white background with a shadow and Tailwind CSS for styling.
 */
const Card: FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default Card;
