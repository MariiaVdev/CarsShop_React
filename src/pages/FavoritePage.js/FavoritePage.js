import styles from './FavoritePage.module.scss';
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';



const FavoritePage = (props) => {
    const favorite = useSelector(store => store.cars.favorite);   
    if (favorite.length === 0) {
        return (
            <h2>Favorites is empty</h2>
        )
    }

    return (
        <>
            <h1>Your favorites</h1>
            <div className={styles.wrapper}>
                {favorite.map(({ name, price, img, code, color, isFavorite }) =>
                    <Card name={name} price={price} img={img} code={code} color={color} key={code} isFavorite={isFavorite} />
                )}
            </div>
        </>
    )
}



export default FavoritePage;