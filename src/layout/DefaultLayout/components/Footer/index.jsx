import styles from "./Footer.module.scss";
import { Link } from "react-router";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Default : Footer</p>
            <Link className={styles.footerLink} to="/contact">
                Contact
            </Link>
            <Link className={styles.footerLink} to="/privacy">
                Privacy Pages
            </Link>
        </footer>
    );
}

export default Footer;
