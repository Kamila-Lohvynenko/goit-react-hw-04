import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(image => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
