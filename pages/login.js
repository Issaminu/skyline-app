import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter();
  router.push('/api/auth/login');
}

export default Login