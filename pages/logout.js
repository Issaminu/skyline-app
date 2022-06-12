import { useRouter } from 'next/router'

const Logout = () => {
  const router = useRouter();
  router.push('/api/auth/logout');
}

export default Logout