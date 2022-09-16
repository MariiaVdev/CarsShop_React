import Card from '../Card/Card';
import styles from './CardList.module.scss'
import { useSelector } from 'react-redux';


const CardList = () => {
    const cars = useSelector(store => store.cars.data);
    return (
        <div className={styles.wrapper}>
            {cars.map(({ name, price, img, code, color, isFavorite }) =>
                <Card name={name} price={price} img={img} code={code} color={color} key={code} isFavorite={isFavorite} />)}
        </div>


    )
}


export default CardList;