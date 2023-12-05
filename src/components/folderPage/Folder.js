import FolderHeader from "./FolderHeader";
import FolderContainer from "./FolderContainer";

function Folder() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <FolderHeader></FolderHeader>
      <FolderContainer></FolderContainer>
    </div>
  );
}

export default Folder;
