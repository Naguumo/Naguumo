import Link from 'next/link'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.navbar}>
      <div>
        <Link href='/'>Ishaan Bharal</Link>
      </div>
      <div>
        <Link href='/resume'>Resume</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/gallery'>Gallery</Link>
        <Link href='/blog'>Blog</Link>
      </div>
    </header>
  )
}
