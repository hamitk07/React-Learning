import styles from "./Button.module.css"

function Button() {

    return(

        <button className={styles.button} onClick={styles.onClick}>Click Me</button>
    );
}

export default Button