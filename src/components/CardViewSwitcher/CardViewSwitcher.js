import styles from './CardViewSwitcher.module.scss';
import React, { useContext, useRef } from 'react';
import ViewContext from '../../contexts/viewContext/ViewContext';


const CardViewSwitcher = () => {
    const inputRef = useRef(null)
    const { setIsCardTheme } = useContext(ViewContext);

    return (
        <div className={styles.switchWrapper}>
            <label className={styles.switch}>
                <input ref={inputRef} type="checkbox"
                    onChange={() => {
                        {
                            inputRef.current.checked
                            ? setIsCardTheme(false)
                            : setIsCardTheme(true)
                        }
                    }} />
                <span className={styles.slider}></span>
            </label>
            <h3 className={styles.chngView}>Table view</h3>
        </div>
    )

}

export default CardViewSwitcher;