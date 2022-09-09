import styles from './CartPage.module.scss';
import PropTypes from 'prop-types';
import CartCardWrap from '../../components/CartCardWrap/CartCardWrap';


const CartPage = (props) => {
    const { carts, setModalProps, toggleModal } = props;
    if (carts.length === 0) {
        return (
            <h2>Cart is empty</h2>
        )
    }

    return (
        <>
            <h1>The best choise in your cart</h1>
            <div className={styles.wrapper}>
                {carts.map(({ name, price, img, code, color, count }) =>
                    <CartCardWrap name={name} price={price} img={img} code={code} color={color} key={code} count={count}
                        setModalProps={setModalProps} toggleModal={toggleModal} />)}
            </div>
        </>


    )
}

CartPage.propTypes = {
    carts: PropTypes.array.isRequired,
    setModalProps: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
}


export default CartPage;