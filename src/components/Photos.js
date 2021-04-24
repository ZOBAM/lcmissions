import ImageGallery from "react-image-gallery";
import image1 from "./../assets/images/image1.png";
import image2 from "./../assets/images/image2.png";
import image3 from "./../assets/images/image3.png";

export default function Photos() {
  const images = [
    {
      original: image1,
    },
    {
      original: image2,
    },
    {
      original: image3,
    },
  ];
  return (
    <div className="bg-gray-900 p-10 my-20">
      <ImageGallery items={images} />
    </div>
  );
}
