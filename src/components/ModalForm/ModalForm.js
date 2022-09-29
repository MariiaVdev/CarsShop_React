import styles from './ModalForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenFormAC } from '../../store/form/actionCreators';
import OrderedGoods from '../OrderedGoods/OrderedGoods';
import OrderForm from '../OrderForm/OrderForm';

const ModalForm = () => {
    const isOpenForm = useSelector(store => store.form.isOpenForm);
    const dispatch = useDispatch();

    if (!isOpenForm) {
        return null;
    }
    const closeForm = () => { dispatch(setIsOpenFormAC(false)) };
    return (
        <div className={styles.form}>
            <div data-testid='ModalForm-bgd' className={styles.formBackground} onClick={closeForm}></div>
            <div className={styles.formMainContainer}>
                <div className={styles.formHeader}>
                    <h3>Ordering</h3>
                    <button data-testid='ModalForm-btn' className={styles.formClose} onClick={closeForm}></button>
                </div>
                <div className={styles.formContentWrapper}>
                    <OrderedGoods />
                    <OrderForm />
                </div>

            </div>
        </div>

    )
}


export default ModalForm;