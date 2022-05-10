import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0'
export default function Home() {
  const { user, isLoading, error } = useUser();
  return (
    <div className={styles.container}>
      {user ? (<>
        <p>{console.log(user)}</p>
        <a href="/api/auth/logout">Logout</a> </>) : <a href="/api/auth/login">Login</a>}
    </div>
  )
}
