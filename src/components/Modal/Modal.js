import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, toggleModal, header, closeButton, text, actions }) => {

        if (!isOpen) {
            return null;
        }
        return (
            <div className={styles.modal}>

                <div className={styles.modalBackground} onClick={() => toggleModal(false)}></div>

                <div className={styles.modalMainContainer}>
                    <div className={styles.modalHeader}>
                        <p className={styles.modalHeaderText}>{header}</p>
                        {closeButton && <button className={styles.modalClose} onClick={() => toggleModal(false)}></button>}
                    </div>
                    <div className={styles.modalContentWrapper}>
                        <p>{text.name}</p>
                        <p>Are you ready to confirm your choice?</p>

                    </div>
                    <div className={styles.modalButtonWrapper}>
                        {actions}
                    </div>
                </div>
            </div>

        )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    closeButton: PropTypes.bool.isRequired,
    text: PropTypes.shape({
        code: PropTypes.number,
        name: PropTypes.string
    }),
    actions: PropTypes.node.isRequired

}

Modal.defaultProps = {
    user: {
        code: 3455,
        name: 'LEXUS'
    }

}

export default Modal;