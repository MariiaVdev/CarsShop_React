import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalAC } from '../../store/modal/actionCreators'

const Modal = ({ header, closeButton, text, actions }) => {
    const isOpenModal = useSelector(store => store.modal.isOpenModal);
    const dispatch = useDispatch();

    if (!isOpenModal) {
        return null;
    }
    const closeModal = () => { dispatch(setIsOpenModalAC(false)) };
    return (
        <div className={styles.modal}>

            <div className={styles.modalBackground} onClick={closeModal}></div>

            <div className={styles.modalMainContainer}>
                <div className={styles.modalHeader}>
                    <p className={styles.modalHeaderText}>{header}</p>
                    {closeButton && <button className={styles.modalClose} onClick={closeModal}></button>}
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