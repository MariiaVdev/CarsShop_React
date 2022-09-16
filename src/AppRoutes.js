import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import CardList from './components/CardList/CardList';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';
import CartPage from './pages/CartPage/CartPage';
import FavoritePage from './pages/FavoritePage.js/FavoritePage';
import { useDispatch,  useSelector } from 'react-redux';
import { addToCartAC, countCartAC, deleteItemFromCartAC, dicrementCountCartAC } from './store/cart/actionCreators';
import { setIsOpenModalAC } from './store/modal/actionCreators';




const AppRoutes = () => {
        const cardProps = useSelector(store => store.card.cardData);
        const modalProps = useSelector(store => store.modal.modalData);
        const dispatch = useDispatch();

    return (
        <Routes>
            <Route path='/' element={<>
                <CardList/>
                <Modal header={`Do you want to add this to cart?`}
                    closeButton={true} text={modalProps}
                    actions={<>
                        <button className={styles.modalConfirmBtn} onClick={() => {
                            dispatch(addToCartAC(cardProps));
                            dispatch(countCartAC());
                            dispatch(setIsOpenModalAC(false));
                        }}>Ok</button>
                        <button className={styles.modalCancelBtn} onClick={() => dispatch(setIsOpenModalAC(false))}>Cancel</button>
                    </>} />
            </>} />
            <Route path='/carts' element={
                <>
                    <CartPage/>
                    <Modal header={`Do you want to delete this from cart?`}
                        closeButton={true} text={modalProps}
                        actions={<>
                            <button className={styles.modalConfirmBtn} onClick={() => {
                                dispatch(dicrementCountCartAC(modalProps.code));
                                dispatch(deleteItemFromCartAC(modalProps.code));
                                dispatch(setIsOpenModalAC(false));
                            }}>Ok</button>
                            <button className={styles.modalCancelBtn} onClick={() => dispatch(setIsOpenModalAC(false))}>Cancel</button>
                        </>} />
                </>
            } />
            <Route path='/favorite' element={
                <>
            <FavoritePage/>
            <Modal header={`Do you want to add this to cart?`}
                    closeButton={true} text={modalProps}
                    actions={<>
                        <button className={styles.modalConfirmBtn} onClick={() => {
                           dispatch(addToCartAC(cardProps));
                           dispatch(countCartAC());
                            dispatch(setIsOpenModalAC(false));
                        }}>Ok</button>
                        <button className={styles.modalCancelBtn} onClick={() => dispatch(setIsOpenModalAC(false))}>Cancel</button>
                    </>} />
            </>
        } />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}


export default AppRoutes;