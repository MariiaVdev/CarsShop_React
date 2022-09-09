import styles from './Card.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const Card = (props) => {
        const { name, price, img, code, color, markAsFavorite, setModalProps, toggleModal, setCardProps, isFavorite} = props;
        return (

            <div className={styles.cardWrapper}>
                <img src={img} alt={name}></img>
                <div className={styles.cardName}><h3>{name}
                    <button className={styles.cardFavorite} onClick={() => {
                            markAsFavorite({name, price, code, color , isFavorite});                            
                    }}>
                        {isFavorite
                            ? <span className={styles.cardFavoriteSelect}></span>
                            : <span className={styles.cardFavoriteNoSelect}></span>
                        }
                    </button>
                </h3></div>
                <div className={styles.cardCode}>Vendor code: {code}</div>
                <div className={styles.cardCode}>Color: <button className={styles.cardBtnColor} style={{ backgroundColor: color }}></button></div>
                <div className={styles.cardPrice}><p><b>${price}</b>
                    <Button bgColor={'black'} textBtn={'Add to cart'} onClick={() => {
                        setModalProps({ code, name });
                        setCardProps({ name, price, img, code, color });
                        toggleModal(true);
                    }} /></p>
                </div>
            </div>

        )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    code: PropTypes.number,
    color: PropTypes.string,
    isFavorite:PropTypes.bool.isRequired,
    markAsFavorite: PropTypes.func.isRequired,
    setModalProps: PropTypes.func,
    toggleModal: PropTypes.func.isRequired,
    setCardProps: PropTypes.func.isRequired

}

Card.defaultProps = {
    code: 1234,
    color: 'grey'
}

export default Card;