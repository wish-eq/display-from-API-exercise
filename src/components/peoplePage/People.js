import React from "react";
import PeopleContainer from "./PeopleContainer";
import PeopleHeader from "./PeopleHeader";

export default function People() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <PeopleHeader></PeopleHeader>
      <PeopleContainer></PeopleContainer>
    </div>
  );
}
