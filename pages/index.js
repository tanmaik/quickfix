import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from './components/Button.js'
import IdCard from './components/IdCard'


export default function Home() {
  return (
    <>
    <IdCard name="Sumanth kalluru" profession="Plumber"></IdCard>
    {/* <Button buttonTitle="hi tanmai"></Button></div>
    <div>
      <IdCard name = "Person 1" img src="defaultPic.jpeg"></IdCard>
    </div> */}
    </>
  )
}
