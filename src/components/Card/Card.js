import React, { useContext } from 'react';
import styles from './Card.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setIsOpenModalAC, setModalDataAC } from '../../store/modal/actionCreators';
import { setCardDataAC } from '../../store/card/actionCreators';
import { markAsFavoriteAC, countFavoriteAC } from '../../store/cars/actionCreators';
import ViewContext from '../../contexts/viewContext/ViewContext';


const Card = (props) => {
    const {  name, price, img, code, color, isFavorite } = props;
    const dispatch = useDispatch();
    const {isCardThem} = useContext(ViewContext);

    return (
        <>
        {isCardThem ? 
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
        
        : 
            <tr>
                <td>
        <img className={styles.tblImg} src={img} alt={name}></img>
        </td>
        
        <td>
        <h3 className={styles.tblCardName}>{name} </h3>
        </td>
        <td>
            <button className={styles.cardFavorite} onClick={() => {
                dispatch(markAsFavoriteAC(code));
                dispatch(countFavoriteAC());
            }}>
                {isFavorite
                    ? <span className={styles.cardFavoriteSelect}></span>
                    : <span className={styles.cardFavoriteNoSelect}></span>
                }
            </button>
       
        </td>
        <td className={styles.tblCardCode}><b>Vendor code:</b> {code}</td>
        <td className={styles.tblCardCode}><b>Color:</b></td><td> <button className={styles.tblCardBtnColor} style={{ backgroundColor: color }}></button></td>
        <td className={styles.tblCardPrice}><p><b>${price}</b></p> </td>
        <td>
            <Button bgColor={'black'} textBtn={'Add to cart'} onClick={() => {
                dispatch(setModalDataAC({ code, name }));
                dispatch(setCardDataAC({ name, price, img, code, color }))
                dispatch(setIsOpenModalAC(true));
            }} />
            </td>  
        </tr>
    }
        </>
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