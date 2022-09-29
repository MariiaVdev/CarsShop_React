import React, { useContext } from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss'
import { useSelector } from 'react-redux';
import ViewContext from '../../contexts/viewContext/ViewContext';


const CardList = () => {
    const cars = useSelector(store => store.cars.data);
    const { isCardThem } = useContext(ViewContext);
    return (
        <>
            {isCardThem ?
                <div className={styles.wrapper}>
                    {cars.map(({ name, price, img, code, color, isFavorite }) =>
                        <Card name={name} price={price} img={img} code={code} color={color} key={code} isFavorite={isFavorite} />)}
                </div>
                :
                <table className={styles.tblWrapper}>
                <tbody>
                    {cars.map(({ name, price, img, code, color, isFavorite }) =>
                        <Card name={name} price={price} img={img} code={code} color={color} key={code} isFavorite={isFavorite} />)}
                </tbody>
                </table>
    }
        
        </>
    )
}


export default CardList;