import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  console.log(images);
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls: { small, regular } }) => {
        return (
          <li
            key={id}
            className={css.item}
            onClick={() => openModal({ regular, alt_description })}
          >
            <ImageCard alt={alt_description} src={small} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
