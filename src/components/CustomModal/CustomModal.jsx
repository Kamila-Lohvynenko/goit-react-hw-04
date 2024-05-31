import css from './CustomModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal, imageData }) => {
  const { regular, alt_description, name, profile_image } = imageData || {};

  return (
    <Modal
      isOpen={isOpen}
      className="modalContent"
      overlayClassName="modalOverlay"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      {regular && (
        <div className={css.modal}>
          <img className={css.img} src={regular} alt={alt_description} />
          <div className={css.inf}>
            <p className={css.title}>Description:</p>
            <p className={css.description}>{alt_description}</p>
            <div>
              <p className={css.title}>Author</p>
              <img
                src={profile_image.medium}
                alt="user-image"
                className={css.userImg}
              />
              <p className={css.text}>{name}</p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CustomModal;
