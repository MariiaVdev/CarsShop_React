import notFoundImg from "../../assets/img/not_found.png"
import styles from "./NotFoundPage.module.scss"
import { useNavigate, useLocation } from "react-router-dom"
import Button from "../../components/Button/Button"


const NotFoundPage = () => {
const {pathname} = useLocation()
const navigate = useNavigate()


    return (
        <div className={styles.notFoundWrapper}> 
            <h2 className={styles.title}> This page <span className={styles.path}>{pathname}</span> is not found </h2>
            <img className={styles.notFoundImg} src={notFoundImg} alt="not-found" />
            <div className={styles.notFoundWrapper}>
            <Button bgColor={'black'} textBtn={'Back to Home'} onClick={()=>{navigate('/')}} />
            </div>
        </div>
    )
}

export default NotFoundPage