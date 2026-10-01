"use client";

import { useState } from "react";

export default function ImageSlot({
  src,
  alt,
  className = "",
  label = "Add image",
  fallbackLetter = "A",
  variant = "card",
  loading = "lazy",
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`image-slot image-slot--${variant} ${className}`.trim()}
        role="img"
        aria-label={alt}
      >
        <div className="image-slot__glow" />
        <div className="image-slot__orb image-slot__orb--one" />
        <div className="image-slot__orb image-slot__orb--two" />
        <div className="image-slot__device">
          <span>{fallbackLetter}</span>
        </div>
        <span className="image-slot__label">{label}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}
