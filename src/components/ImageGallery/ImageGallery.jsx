import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      <li>
        {images.map(image => {
          return (
            <ImageCard
              key={image.id}
              alt={image.alt_description}
              src={image.urls.small}
            />
          );
        })}
      </li>
    </ul>
  );
};

export default ImageGallery;
