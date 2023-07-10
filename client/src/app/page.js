
import PslLogo from './components/logo'
import styles from './styles/page.module.css'
import { SignUp } from '@clerk/nextjs'
import sailImage from "./assets/images/image 39.jpg"
import Image from 'next/image'

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.signInWrapper}>
        <div className={styles.row}>
          <div className={styles.logoWrapper}>
            <PslLogo />
          </div>
        </div>
        <div className={styles.row}>
          <Image className={styles.image} src={sailImage} alt='sail boat with sunset behind it' />
          <div className={styles.signUpContainer}>
            <SignUp />
          </div>
        </div>
      </section>
    </main>

  )
}
