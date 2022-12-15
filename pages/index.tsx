import React from "react"
import Head from 'next/head'
import Image from 'next/image'

// styles
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Pcari movie app home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}
