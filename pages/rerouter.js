import { useRouter } from 'next/router';
import React from 'react'
import { useRecoilState } from 'recoil';
import { myUserState } from '../store/atoms';
const Rerouter = (context) => {
  const router = useRouter();


  const [myUser, setMyUser] = useRecoilState(myUserState);

  if (!('accountStatus' in myUser)) { //BRAND NEW USERS HERE
    if (router.pathname != '/setup') {
      router.push('/setup');
    } else {
      return <>{children}</> //HERE IS ACCESSIBLE ONLY TO THE BRAND NEW AUTHED USERS WHO HAVEN'T FINISHED SETUP PROCESS, THEY WILL ALWAYS BE TAKEN TO /setup
    }

  } else { //NOT BRAND NEW USERS HERE, POSSIBLY NOT FINISHED SETUP
    if (myUser.accountStatus == "TEMP" && router.pathname != '/setup') {
      router.push('/setup'); //HERE IS WHERE AUTHED USERS WHO STILL DIDN'T FINISH SETUP GET REDIRECTED TO FINISH IT
    } else {
      // console.log(context.req.headers.referer);
      router.push('/buildings');
    }// router.back();
  };
}

export default Rerouter