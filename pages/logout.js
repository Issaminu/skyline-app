import { useRouter } from 'next/router'

const logout = () => {
    const router = useRouter();
    router.push('/api/auth/logout');
}

export default logout