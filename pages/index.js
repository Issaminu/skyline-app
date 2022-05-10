import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
export default function Home() {
  const { user, isLoading, error } = useUser();
  return (
    <div className={styles.container}>
      {user ? (<>
        <Link><a href="/api/auth/logout">Logout</a></Link> </>) : <Link><a href="/api/auth/login">Login</a></Link>}
    </div>
  )
}
