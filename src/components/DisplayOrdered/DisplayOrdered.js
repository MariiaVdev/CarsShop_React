import styles from './DisplayOrdered.module.scss';
import PropTypes from 'prop-types';


const DisplayOrdered = (props) => {
    const { name, price, img, code, color } = props;

    return (

        <div className={styles.cardWrapper}>
            <img src={img} alt={name}></img>
            <div className={styles.cardName}>
                <span><b>{name}, </b></span>
                <span>Vendor code: {code}, </span>
                <span> Color: <button className={styles.cardBtnColor} style={{ backgroundColor: color }}></button>,  </span>
                <span><b>${price}</b></span>
            </div>            
        </div>

    )
}

DisplayOrdered.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    code: PropTypes.number,
    color: PropTypes.string
}

DisplayOrdered.defaultProps = {
    code: 1234,
    color: 'grey'
}

export default DisplayOrdered;