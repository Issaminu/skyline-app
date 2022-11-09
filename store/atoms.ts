import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface userState {
  id?: number;
  email?: string;
  name?: string;
  image?: string;
  accountStatus: string;
  notificationCount: number;
}

export const userState = atom<userState>({
  key: "userState",
  default: {
    id: 0,
    email: "",
    name: "",
    image: "/default.jpg",
    accountStatus: "",
    notificationCount: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
