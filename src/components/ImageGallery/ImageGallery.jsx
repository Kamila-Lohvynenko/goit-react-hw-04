import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(image => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard alt={image.alt_description} src={image.urls.small} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
