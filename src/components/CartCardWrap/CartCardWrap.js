import styles from './CartCardWrap.module.scss';
import PropTypes from 'prop-types';
import CardInCart from '../CardInCart/CardInCart';

const CartCardWrap = (props) => {
    const {name, price, img, code, color, count, setModalProps, toggleModal} = props;
        return (    
        <div className={styles.cardWrapper}> 
        <div className={styles.headerCartWrapper}>
                <button className={styles.btnDel} onClick={() => {
                     setModalProps({ code, name });
                     toggleModal(true);
                }}></button>
                </div>               
                <CardInCart name={name} price={price} img={img} code={code} color={color} key={code}/>
             <div className={styles.footerCart}>
             <img className={styles.imgCart} src='./img/shopping-cart.png' alt='Cart'/>
                    <span className={styles.cartCount}>{count}</span>
                    </div>
                </div>           
        )
}

CartCardWrap.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    code: PropTypes.number,
    color: PropTypes.string,
    count: PropTypes.number.isRequired,
    setModalProps: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired

}


export default CartCardWrap;