import React, { FC } from 'react';
import { PostProps } from '@/interfaces';

/**
 * A dedicated component to display fetched post data.
 */
const PostCard: FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h2>
      <p className="text-sm text-teal-600 mb-4 font-mono">
        Post ID: {id} | User ID: {userId}
      </p>
      <p className="text-gray-600 leading-relaxed text-base">
        {body.charAt(0).toUpperCase() + body.slice(1)}
      </p>
    </div>
  );
};

export default PostCard;

