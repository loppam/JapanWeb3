import React from 'react';
import { useImageFallback } from '../hooks/useImageFallback';
import { IMAGE_STATES } from '../constants/images';

interface TeamImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function TeamImage({ src, alt, className = '' }: TeamImageProps) {
  const { imageSrc, imageState } = useImageFallback(src);

  return (
    <div className={`relative ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageState === IMAGE_STATES.LOADING ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {imageState === IMAGE_STATES.LOADING && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}