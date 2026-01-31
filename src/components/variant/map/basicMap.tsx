import React, { useEffect, useRef } from 'react';

// Basic Map Variant Configuration
export const basicMapCSS = {
  container: "w-full h-full rounded-lg overflow-hidden",
  map: "w-full h-full min-h-[200px]"
};

export const basicMapData = {
  latitude: 28.6139,
  longitude: 77.2090,
  zoom: 13,
  markerTitle: "New Delhi",
  markerDescription: "Capital of India"
};

interface BasicMapProps {
  css: typeof basicMapCSS;
  data: typeof basicMapData;
}

export const BasicMapComponent: React.FC<BasicMapProps> = ({ css, data }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Calculate bounding box for better map view
    const latOffset = 0.01;
    const lonOffset = 0.01;
    const bbox = `${data.longitude - lonOffset},${data.latitude - latOffset},${data.longitude + lonOffset},${data.latitude + latOffset}`;
    
    // Use OpenStreetMap with marker
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${data.latitude},${data.longitude}`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.style.border = '0';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('aria-label', `Map showing location at ${data.latitude}, ${data.longitude}`);
    iframe.title = data.markerTitle || 'Map location';

    mapRef.current.innerHTML = '';
    mapRef.current.appendChild(iframe);

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [data.latitude, data.longitude, data.markerTitle]);

  return (
    <div className={css.container}>
      <div ref={mapRef} className={css.map} />
    </div>
  );
};
