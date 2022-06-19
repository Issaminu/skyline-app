// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
// import ProtectedRoute from './ProtectedRoute';
import { useUser } from '@auth0/nextjs-auth0';
import Loading from "./Loading";
import { useRecoilState } from 'recoil';
import { myUserState } from '../store/atoms';
const AuthWrapper = ({ children }) => { //WE USE THE AUTH WRAPPER TO WAIT TILL THE PAGE AND EVERYTHING ELSE FINISHES LOADING BEFORE SHOWING IT TO THE USER, OTHERWISE IT WILL LOOK BAD, TO CHECK THIS, COMMENT OUT THE LINE THAT RETURNS "NULL" AND REFRESH ANY PAGE.
  const [myUser, setMyUser] = useRecoilState(myUserState);
  let { user, error, isLoading } = useUser();
  const router = useRouter();
  // return <>{children}</>

 
  // const authedRoutes = ['/dashboard', '...'] //ADD ALL THE ROUTES THAT REQUIRE THE USER TO BE LOGGED IN TO THIS ARRAY
  if (isLoading) return null;
  if (typeof window != "undefined" && !window.matchMedia('(min-width: 1800px)').matches) {
    return (
      <main style={{ display: 'flex', justifyContent: "center", flexDirection:'column'}}>
        <h1 style={{color:'#f31260'}}>Erreur</h1>
        <h2 style={{color: '#555454' }}>Veuillez utiliser un PC pour visiter cette page.</h2>
      </main>
    )
  }
  // if (isLoading) return null;
  // console.log('heere is user')
  // console.log(user)
  // if (authedRoutes.includes(router.pathname)) {
  if (user) {
    // console.log('my user:');
    // console.log(user);
    if (router.pathname == '/') {
      return <>{children}</>
    } else {
      if (!('accountStatus' in myUser) && router.pathname != '/setup') {
        router.push('/');
      }
    };

    // if (router.pathname == '/buildings/[id]') {
    // let reqBuildingId = parseInt(router.asPath.split("/").slice(2).join("/"));
    // // console.log(user.buildingIDs);
    // let isThisBuildingYoursChecker = false;
    // user.buildingIDs.map(buildingId => {
    //     if (buildingId == reqBuildingId) {
    //         isThisBuildingYoursChecker = true;
    //         return <>{children}</>
    //     }
    // })
    // if (!isThisBuildingYoursChecker) router.push('/');
    // return <>{children}</>

    // }


    // console.log(buildingId)
    // console.log(router.asPath);
    return <>{children}</>;  //HERE, FULLY AUTHED USERS GOTO ANYWHERE EXCEPT /setup, AND NOT FULLY AUTHED USERS LOAD THE /setup page

  } else (router.push('/api/auth/login'))
}
// } else (router.push('/'))
// }


export default AuthWrapper
