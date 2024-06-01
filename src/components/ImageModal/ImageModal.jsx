import css from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal, selectedImage }) => {
  return (
    <Modal
      isOpen={isOpen}
      className="modalContent"
      overlayClassName="modalOverlay"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      {selectedImage && (
        <div className={css.modal}>
          <img
            className={css.img}
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
          <div className={css.inf}>
            <p className={css.title}>Description:</p>
            <p className={css.description}>{selectedImage.alt_description}</p>
            <div>
              <p className={css.title}>Author</p>
              <img
                src={selectedImage.user.profile_image.medium}
                alt="user-image"
                className={css.userImg}
              />
              <p className={css.text}>{selectedImage.user.name}</p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
// };

export default CustomModal;
