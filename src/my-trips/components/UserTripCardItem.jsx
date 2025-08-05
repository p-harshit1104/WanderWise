import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserTripCardItem = ({ trip }) => {
  const [photoURL, setPhotoURL] = useState();

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userChoice?.location?.label,
    };
    try {
      const resp = await GetPlaceDetails(data);
      console.log(resp);
  
      const firstPlace = resp?.data?.places?.[0]; // places[0]
      const firstPhoto = firstPlace?.photos?.[0]; // photos[0]
  
      if (firstPhoto?.name) {
        const Url = PHOTO_REF_URL.replace("{NAME}", firstPhoto.name);
        console.log(photoURL)
        setPhotoURL(Url);
      } else {
        console.error("No photo found for this place.");
      }
    } catch (error) {
      console.error("Failed to get place details", error);
    }
  };
  
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all hover:shadow-md">
        <img
          className="object-cover rounded-xl mx-auto w-80 h-64"
          src={photoURL}
        />
        <h2 className="font-bold text-lg">
          {trip?.userChoice?.location?.label}
        </h2>
        <h2 className="text-sm text-gray-500">
          {trip?.userChoice?.noOfDays} days trip with "
          {trip?.userChoice?.budget}" budget.
        </h2>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
