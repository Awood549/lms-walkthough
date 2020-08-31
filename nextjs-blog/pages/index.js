import Login from '../components/login.js'
import LoginContext from '../components/context.js'
import Head from 'next/head'
import styles from './_app.js'

export default function Home() {
  return (
    <>
    <Head>
  <title>Hire me :D</title>
</Head>
    <LoginContext>
    <Login>
      
    </Login>
    </LoginContext>
    </>
      
  )
}
