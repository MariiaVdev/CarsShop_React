import Card from '../Card/Card';
import styles from './CardList.module.scss'
import PropTypes from 'prop-types';


const CardList = (props) => {
        const { cars, markAsFavorite, setModalProps, toggleModal, setCardProps} = props;
        return (
            <div className={styles.wrapper}>
            {cars.map(({name, price, img, code, color, isFavorite}) =>
             <Card name={name} price={price} img={img} code={code} color={color} key={code} markAsFavorite={markAsFavorite}
             setModalProps={setModalProps} toggleModal={toggleModal} setCardProps={setCardProps}
             isFavorite={isFavorite}/>)}
          </div>
                
            
        )
}

CardList.propTypes = {
    cars: PropTypes.array.isRequired,
    markAsFavorite: PropTypes.func.isRequired,
    setModalProps: PropTypes.func,
    toggleModal: PropTypes.func.isRequired,
    setCardProps: PropTypes.func.isRequired
}


export default CardList;