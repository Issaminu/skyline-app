import { useRouter } from 'next/router'

const login = () => {
    const router = useRouter();
    router.push('/api/auth/login');
}

export default login