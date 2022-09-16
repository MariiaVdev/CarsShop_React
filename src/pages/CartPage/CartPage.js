import styles from './CartPage.module.scss';
import CartCardWrap from '../../components/CartCardWrap/CartCardWrap';
import { useSelector } from 'react-redux';



const CartPage = () => {
    const carts = useSelector(store => store.cart.data);
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
                    <CartCardWrap name={name} price={price} img={img} code={code} color={color} key={code} count={count} />)}
            </div>
        </>


    )
}



export default CartPage;