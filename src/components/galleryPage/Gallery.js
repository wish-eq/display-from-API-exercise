import GalleryContainer from "./GalleryContainer";
import GalleryHeader from "./GalleryHeader";

function Gallery() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <GalleryHeader></GalleryHeader>
      <GalleryContainer></GalleryContainer>
    </div>
  );
}

export default Gallery;
