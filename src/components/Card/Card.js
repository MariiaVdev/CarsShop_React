import styles from './Card.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setIsOpenModalAC, setModalDataAC } from '../../store/modal/actionCreators';
import { setCardDataAC } from '../../store/card/actionCreators';
import { markAsFavoriteAC, countFavoriteAC } from '../../store/cars/actionCreators';


const Card = (props) => {
    const { name, price, img, code, color, isFavorite } = props;
    const dispatch = useDispatch();

    return (

        <div className={styles.cardWrapper}>
            <img src={img} alt={name}></img>
            <div className={styles.cardName}><h3>{name}
                <button className={styles.cardFavorite} onClick={() => {
                    dispatch(markAsFavoriteAC(code));
                    dispatch(countFavoriteAC());
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
                    dispatch(setModalDataAC({ code, name }));
                    dispatch(setCardDataAC({ name, price, img, code, color }))
                    dispatch(setIsOpenModalAC(true));
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
    isFavorite: PropTypes.bool.isRequired
}

Card.defaultProps = {
    code: 1234,
    color: 'grey'
}

export default Card;