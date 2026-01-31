import React, { useEffect, useRef } from 'react';

// Google Map Variant Configuration
export const googleMapCSS = {
  container: "w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-lg overflow-hidden shadow-lg",
  map: "w-full h-full"
};

export const googleMapData = {
  latitude: 28.6139,
  longitude: 77.2090,
  zoom: 13,
  markerTitle: "New Delhi",
  markerDescription: "Capital of India",
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY" // User needs to replace with their API key
};

interface GoogleMapProps {
  css: typeof googleMapCSS;
  data: typeof googleMapData;
}

export const GoogleMapComponent: React.FC<GoogleMapProps> = ({ css, data }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Use Google Maps embed URL
    // Format: https://www.google.com/maps/embed/v1/place?key=API_KEY&q=latitude,longitude
    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${data.apiKey}&q=${data.latitude},${data.longitude}&zoom=${data.zoom || 13}`;
    
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.style.border = '0';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.setAttribute('aria-label', `Map showing location at ${data.latitude}, ${data.longitude}`);
    iframe.title = data.markerTitle || 'Map location';

    mapRef.current.innerHTML = '';
    mapRef.current.appendChild(iframe);

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [data.latitude, data.longitude, data.zoom, data.apiKey, data.markerTitle]);

  return (
    <div className={css.container}>
      <div ref={mapRef} className={css.map} />
    </div>
  );
};
