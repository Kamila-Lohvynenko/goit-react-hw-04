import css from './ImageCard.module.css';
const ImageCard = ({
  // image: {
  //   alt_description,
  //   urls: { small, regular },
  //   user: { name, profile_image },
  // },
  image,
  openModal,
}) => {
  const handleClick = () => {
    openModal(image);
  };
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
