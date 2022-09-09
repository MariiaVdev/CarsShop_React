import styles from './CardInCart.module.scss';
import PropTypes from 'prop-types';


const CardInCart = (props) => {
        const { name, price, img, code, color} = props;
        return (

            <div className={styles.cardWrapper}>
                <img src={img} alt={name}></img>
                <div className={styles.cardName}><h3>{name}
                </h3></div>
                <div className={styles.cardCode}>Vendor code: {code}</div>
                <div className={styles.cardCode}>Color: <button className={styles.cardBtnColor} style={{ backgroundColor: color }}></button></div>
                <div className={styles.cardPrice}><p><b>${price}</b></p>
                </div>
            </div>

        )
}

CardInCart.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    code: PropTypes.number,
    color: PropTypes.string

}

CardInCart.defaultProps = {
    code: 1234,
    color: 'grey'
}

export default CardInCart;