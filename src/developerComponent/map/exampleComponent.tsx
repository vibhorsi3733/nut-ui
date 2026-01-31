// Example: Using Map component in your application

import { Map } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const mapCSS = {
    container: "w-full h-full rounded-lg overflow-hidden",
    map: "w-full h-full min-h-[200px]"
  };

  // Define data object with latitude and longitude
  const mapData = {
    latitude: 28.6139,
    longitude: 77.2090,
    zoom: 13,
    markerTitle: "New Delhi, India",
    markerDescription: "Capital city of India"
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <div className="w-full h-[400px]">
        <Map css={mapCSS} data={mapData} />
      </div>
    </div>
  );
}

export default MyPage;
