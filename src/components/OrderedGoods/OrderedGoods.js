import styles from './OrderedGoods.module.scss'
import { useSelector } from 'react-redux';
import DisplayOrdered from '../DisplayOrdered/DisplayOrdered';



const OrderedGoods = () => {
    const cart = useSelector(store => store.cart.data);
    return (
        <div className={styles.wrapper}>
            {cart.map(({ name, price, img, code, color}) =>
                <DisplayOrdered name={name} price={price} img={img} code={code} color={color} key={code} />)}
        </div>


    )
}


export default OrderedGoods;