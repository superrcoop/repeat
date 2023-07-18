import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topbar}>
        <div className={styles.hamburgerMenu}>
          {/* Hamburger menu icon */}
        </div>
        <h1 className={styles.title}>repyt</h1>
        <div className={styles.options}>
          {/* Vertical ellipse options icon */}
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <button className={styles.card}>
          <h2>
            Start <span>-&gt;</span>
          </h2>
          <p>Begin the game</p>
        </button>

        <button className={styles.card}>
          <h2>
            Leaderboard <span>-&gt;</span>
          </h2>
          <p>View the leaderboard</p>
        </button>

        <button className={styles.card}>
          <h2>
            Mode <span>-&gt;</span>
          </h2>
          <p>Select the game mode</p>
        </button>

        <button className={styles.card}>
          <h2>
            Preferences <span>-&gt;</span>
          </h2>
          <p>Customize your preferences</p>
        </button>
      </div>

      <div style={{ color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>
        Bonus
      </div>
    </main>
  )
}
