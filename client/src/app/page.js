import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href={"/portal"}>
          <Button text={"Portal"} />
        </Link>
      </div>
    </main>
  )
}
