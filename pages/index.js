import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import countries from '../lib/countries'

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function Home({ country }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Borderless Local Services - reservewith.me</title>
        <meta
          name="description"
          content="reservewith.me - Borderless Local Services"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>reservewith.me - Borderless Local Services </h1>
        <p className={styles.description}>
          {country && country !== 'undefined' ? (
            <>
              <span className={styles.flag}>
                <Image
                  alt={`${country} flag`}
                  src={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`}
                  width={32}
                  height={24}
                />
              </span>
              <span className={styles.welcome}>
                Welcome from {countries.find((c) => c.code === country).name}
              </span>
            </>
          ) : (
            `We're unable to find you!`
          )}
        </p>
      </main>



    </div>
  )
}
