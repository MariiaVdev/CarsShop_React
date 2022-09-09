import styles from './Button.module.scss';
import PropTypes from 'prop-types';


const Button = ({bgColor, textBtn, onClick}) => {
        return (
            <>
            <button className={styles.btn} style={{backgroundColor: bgColor}} onClick={onClick}>
                {textBtn}</button>
                    </>
        )
    
}

Button.propTypes= {
    bgColor: PropTypes.string,
    textBtn: PropTypes.string
}

Button.defaultProps= {
    bgColor: 'blue',
    textBtn: 'Open modal'
}

export default Button;