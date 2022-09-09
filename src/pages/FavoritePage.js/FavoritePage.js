import styles from './FavoritePage.module.scss';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';



const FavoritePage = (props) => {
    const { favorite, markAsFavorite, setModalProps, toggleModal, setCardProps } = props;
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
                    <Card name={name} price={price} img={img} code={code} color={color} key={code} markAsFavorite={markAsFavorite}
                        setModalProps={setModalProps} toggleModal={toggleModal} setCardProps={setCardProps}
                        isFavorite={isFavorite} />
                )}
            </div>
        </>
    )
}

FavoritePage.propTypes = {
    favorite: PropTypes.array.isRequired,
    markAsFavorite: PropTypes.func.isRequired,
    setModalProps: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    setCardProps: PropTypes.func.isRequired
}


export default FavoritePage;