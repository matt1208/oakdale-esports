import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oakdale High Esports</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mustanglogo.webp" />
      </Head>

      <main className={styles.main}>
        <div className={styles.bars}></div>
        <div className={styles.barsYellow}></div>
        <h1 className={styles.title}>
          Oakdale High<br></br><span className={styles.accentText}>Esports</span>
        </h1>

        <div className={styles.barsrightYellow}></div>
        <div className={styles.barsright}></div>

        <div className={styles.specialText}>
          <TypeWriterText text={"Coming Soon"} showCursor={false} animationSpeed={200} />
        </div>
      </main>

      {/* Put form in footer */}
      <footer className={styles.footer}>
        <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <input className={styles.formInput} class="required email" id="mce-EMAIL" type="email" id="email" name="email" placeholder="EMAIL" />
          <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
        </form>
      </footer>
    </div>
  )
}
