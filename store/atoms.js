import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();
export const myUserState = atom({
  key: 'myUserState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});