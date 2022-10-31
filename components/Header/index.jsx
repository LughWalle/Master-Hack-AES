import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'
import styles from './styles.module.scss'
const Header = () => {
    const router = useRouter()
  return (
    <header className={styles.header}>
        <nav className={styles.navBar}>
            <ul className={styles.navBarList}>
                <li className={cx(styles.menu, styles.link)}><Link href="/">Inicio</Link></li>
                <li className={cx(styles.menu, styles.link)}><Link href="/nos">Nós</Link></li>
                <li className={cx(styles.menu, styles.link)}><Link href="/projetos">Projetos</Link></li>
                <li className={cx(styles.menu, styles.link)}><Link href="/consorcio">Consorcio</Link></li>
            </ul>
            <Link className={cx(styles.menu, styles.button)} href='/Login'>LOGIN</Link>
        </nav>
    </header>
  )
}

export default Header