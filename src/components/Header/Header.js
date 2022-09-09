import styles from './Header.module.scss';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

const Header = ({ title, isFav, inCart }) => {
        return (
            <header>
                <NavLink to="/">
                <span className={styles.headerTitle}>{title}</span>
                </NavLink>
                <div className={styles.headerContainer}>
                <NavLink to="/favorite">
                    <img src='./img/favorite_Not.png' alt='Favorite' />
                    </NavLink>
                    <span className={styles.headerCount}>{isFav}</span>
                    <NavLink to="/carts">
                    <img className={styles.headerCart} src='./img/shopping-cart.png' alt='Cart'/>
                    </NavLink>
                    <span className={styles.headerCount}>{inCart}</span>
                </div>
            </header>)

}

Header.propTypes = {
    title: PropTypes.string,
    isFav: PropTypes.number,
    inCart: PropTypes.number


}

Header.defaultProps = {
    title: 'Lexus',
    isFav: 0,
    inCart: 0
}

export default Header;