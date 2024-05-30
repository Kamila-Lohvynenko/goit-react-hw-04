import css from './CustomModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal, imageData }) => {
  const { regular, alt_description } = imageData || {};

  return (
    <Modal
      isOpen={isOpen}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      onRequestClose={closeModal}
      // shouldCloseOnOverlayClick={true}
    >
      {regular && (
        <div>
          <img className={css.img} src={regular} alt={alt_description} />
        </div>
      )}
    </Modal>
  );
};

export default CustomModal;
