import styles from './SomethingWentWrong.module.scss';

const SomethingWentWrong = () => {
        return (
            <section className={styles.root}>
                <h1>Something went wrong...</h1>
                <p>Try to reload page</p>
                <button onClick={() => window?.location?.reload()}>Reload</button>
            </section>
        );

}

export default SomethingWentWrong;
