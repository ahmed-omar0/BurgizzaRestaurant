import Head from 'next/head';
/* Import Components */
import Header from '../components/home/MainBanel';
import BurgizaaMenu from '../components/home/BurgizzaMenu';
import TrustUs from '../components/home/Features';
import Reservations from '../components/Common/Reservations';

export default function Home() {
  return (
    <>
      <Head>
        <title>Burgizza  | Home</title>
      </Head>
      <Header/>
      <BurgizaaMenu/>
      <TrustUs/>
      <Reservations/>
    </>
  )
}

/*
  ** Pages
      ==> Home
      ==> About
      ==> Custom Product 
      ==> Menu
      ==> LogIn

  ** Features
    ==> cart
    ==> make custom burger
    ==> make custom pizza
    ==> LogIn

  ** Tools
    ==> React & Hooks
    ==> Redux
    ==> Next JS
    ==> Formik React
    ==> React-Icons
*/