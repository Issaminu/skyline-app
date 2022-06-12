import { useUser } from '@auth0/nextjs-auth0';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
const AuthenticationButton = () => {
  const { user } = useUser();
  return user ? <Button css={{ height: '2.2rem' }} flat color="primary" auto><Link href="/api/auth/logout"><a style={{ textDecoration: 'none', color: 'inherit' }}>Se déconnecter</a></Link></Button> : <Button flat color="warning" auto><Link href="/api/auth/login"><a style={{ textDecoration: 'none', color: 'inherit' }}>S&apos;authentifier</a></Link></Button>;
};
export default AuthenticationButton;