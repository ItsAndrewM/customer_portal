import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/button'
import Link from 'next/link'
import LoginForm from './components/loginForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>login below</p>
        <LoginForm />

      </div>
    </main>
  )
}
