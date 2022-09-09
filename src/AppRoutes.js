import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import CardList from './components/CardList/CardList';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';
import PropTypes from 'prop-types';
import CartPage from './pages/CartPage/CartPage';
import FavoritePage from './pages/FavoritePage.js/FavoritePage';



const AppRoutes = (props) => {
    const { cars, markAsFavorite, cartCounter, setModalProps, toggleModal, setCardProps,
        isOpenModal, modalProps, addToCart, carts, cardProps, deleteCartItem, dicrementCartCounter, counter, favorite} = props;


    return (
        <Routes>
            <Route path='/' element={<>
                <CardList cars={cars} markAsFavorite={markAsFavorite}
                    setModalProps={setModalProps} toggleModal={toggleModal} setCardProps={setCardProps} />
                <Modal isOpen={isOpenModal} toggleModal={toggleModal} header={`Do you want to add this to cart?`}
                    closeButton={true} text={modalProps}
                    actions={<>
                        <button className={styles.modalConfirmBtn} onClick={() => {
                            addToCart(cardProps);
                            cartCounter(carts);
                            toggleModal(false);
                        }}>Ok</button>
                        <button className={styles.modalCancelBtn} onClick={() => toggleModal(false)}>Cancel</button>
                    </>} />
            </>} />
            <Route path='/carts' element={
                <>
                    <CartPage carts={carts} setModalProps={setModalProps} toggleModal={toggleModal}/>
                    <Modal isOpen={isOpenModal} toggleModal={toggleModal} header={`Do you want to delete this from cart?`}
                        closeButton={true} text={modalProps}
                        actions={<>
                            <button className={styles.modalConfirmBtn} onClick={() => {
                                deleteCartItem(modalProps.code);
                                dicrementCartCounter(carts, counter, modalProps.code)
                                toggleModal(false);
                            }}>Ok</button>
                            <button className={styles.modalCancelBtn} onClick={() => toggleModal(false)}>Cancel</button>
                        </>} />
                </>
            } />
            <Route path='/favorite' element={
                <>
            <FavoritePage favorite={favorite} markAsFavorite={markAsFavorite} 
            setModalProps={setModalProps} toggleModal={toggleModal} setCardProps={setCardProps}/>
            <Modal isOpen={isOpenModal} toggleModal={toggleModal} header={`Do you want to add this to cart?`}
                    closeButton={true} text={modalProps}
                    actions={<>
                        <button className={styles.modalConfirmBtn} onClick={() => {
                            addToCart(cardProps);
                            cartCounter(carts);
                            toggleModal(false);
                        }}>Ok</button>
                        <button className={styles.modalCancelBtn} onClick={() => toggleModal(false)}>Cancel</button>
                    </>} />
            </>
        } />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

AppRoutes.propTypes = {
    cars: PropTypes.array.isRequired,
    markAsFavorite: PropTypes.func.isRequired,
    cartCounter: PropTypes.func.isRequired,
    setModalProps: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    setCardProps: PropTypes.func.isRequired,
    isOpenModal: PropTypes.bool.isRequired,
    modalProps: PropTypes.shape({
        code: PropTypes.number,
        name: PropTypes.string
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired,
    cardProps: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        code: PropTypes.number,
        color: PropTypes.string,
    }).isRequired,
    deleteCartItem: PropTypes.func.isRequired,
    dicrementCartCounter: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    favorite: PropTypes.array.isRequired
}

export default AppRoutes;