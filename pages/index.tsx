import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "../store/atoms";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  if (typeof window !== "undefined") {
    if (Object.keys(user).length) {
      router.push("/buildings");
    } else {
      router.push("/login");
    }
  }
  return <></>;
}
