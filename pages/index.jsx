import Head from 'next/head'
import Header from '../components/home/MainBanel';
import BurgizaaMenu from '../components/home/BurgizzaMenu';
import { useSelector } from 'react-redux';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Burgizza  | Home</title>
      </Head>
      <Header/>
      <BurgizaaMenu/>
    </>
  )
}

/*
  ** Pages
      ==> Home
      ==> About
      ==> Custom Product 
      ==> Products
      ==> LogIn
  
  ** Features
    ==> cart
    ==> make custom burger
    ==> make custom pizza
    ==> LogIn
  ** Tools
    ==> React & Hooks
    ==> Redux
    ==> Next JS & TypeScript
    ==> Formik React
    ==> React-Icons
*/