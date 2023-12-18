import React from "react";
import LocationsContainer from "./LocationsContainer";
import LocationsHeader from "./LocationsHeader";

export default function Locations() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <LocationsHeader></LocationsHeader>
      <LocationsContainer></LocationsContainer>
    </div>
  );
}
