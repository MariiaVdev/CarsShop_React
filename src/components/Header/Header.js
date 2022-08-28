import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

class Header extends React.PureComponent {

    render() {
        const { title, isFav, inCart } = this.props;
        return (
            <header>
                <span className={styles.headerTitle}>{title}</span>
                <div className={styles.headerContainer}>
                    <img src='./img/favorite_Not.png' alt='Favorite' />
                    <span className={styles.headerCount}>{isFav}</span>
                    <img className={styles.headerCart} src='./img/shopping-cart.png' alt='Cart' />
                    <span className={styles.headerCount}>{inCart}</span>
                </div>
            </header>)

    }
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