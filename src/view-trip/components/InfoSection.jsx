import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";

const PHOTO_REF_URL = (photoReference) =>
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photo_reference=${photoReference}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;
const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userChoice?.location?.label,
    };
    const result = await GetPlaceDetails(data);
    const photoReference = result.data.places[0].photos[0].name.split('/').pop(); 
    const photoUrl = PHOTO_REF_URL(photoReference);
    setPhotoUrl(photoUrl);
  };
  return (
    <div className="flex justify-between items-center mt-12 md:mx-16 lg:mx-48 p-6 rounded-lg shadow-lg">
      <img
        className="h-40 w-40 rounded-full object-cover"
        src={photoUrl}
        alt="Trip Image"
      />
      <div className="flex flex-col ml-6 items-end">
        <div className="text-4xl font-bold mb-2 flex items-center">
          🗺️ {trip?.userChoice?.location?.label}
        </div>
        <div className="text-xl mb-1 flex items-center">
          📅 <span className="font-semibold ml-2">Duration:</span>
          {trip?.userChoice?.noOfDays} days
        </div>
        <div className="text-xl mb-1 flex items-center">
          💰 <span className="font-semibold ml-2">Budget:</span>
          {trip?.userChoice?.budget}
        </div>
        <div className="text-xl flex items-center">
          👥 <span className="font-semibold ml-2">Traveling with:</span>
          {trip?.userChoice?.noOfPeople}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
