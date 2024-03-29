import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1 className={styles.logo} >OftenNews</h1>
                {/* <img src="/images/logo.svg" alt="OftenNews" /> */}
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>

                </nav>

                <SignInButton />
            </div>
        </header>
    )
}