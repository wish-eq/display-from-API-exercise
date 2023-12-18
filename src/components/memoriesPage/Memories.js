import React from "react";
import MemoriesContainer from "./MemoriesContainer";
import MemoriesHeader from "./MemoriesHeader";

export default function Memories() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <MemoriesHeader></MemoriesHeader>
      <MemoriesContainer></MemoriesContainer>
    </div>
  );
}
