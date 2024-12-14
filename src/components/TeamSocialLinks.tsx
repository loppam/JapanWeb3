import React from 'react';
import { FaExternalLinkAlt, FaTwitter } from 'react-icons/fa';

interface TeamSocialLinksProps {
  website?: string;
  twitter?: string;
}

export function TeamSocialLinks({ website, twitter }: TeamSocialLinksProps) {
  return (
    <div className="flex gap-2">
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <FaExternalLinkAlt size={20} />
        </a>
      )}
      {twitter && (
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-400"
        >
          <FaTwitter size={20} />
        </a>
      )}
    </div>
  );
}