import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.main}><Link href="/login"><h1>Go to login</h1></Link></div>
  )
}
