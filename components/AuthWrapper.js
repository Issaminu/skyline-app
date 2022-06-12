// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
// import ProtectedRoute from './ProtectedRoute';
import { useUser } from '@auth0/nextjs-auth0';
import Loading from "./Loading";

const AuthWrapper = ({ children }) => { //WE USE THE AUTH WRAPPER TO WAIT TILL THE PAGE AND EVERYTHING ELSE FINISHES LOADING BEFORE SHOWING IT TO THE USER, OTHERWISE IT WILL LOOK BAD, TO CHECK THIS, COMMENT OUT THE LINE THAT RETURNS "NULL" AND REFRESH ANY PAGE.
  const router = useRouter();
  if (router.pathname == 'api/Auth0GetUserInfoAPI') {
    return <>{children}</>;
  }
  let { user, error, isLoading } = useUser();
  console.log(user)
  const authedRoutes = ['/dashboard', '...'] //ADD ALL THE ROUTES THAT REQUIRE THE USER TO BE LOGGED IN TO THIS ARRAY
  if (isLoading) return null;
  // if (isLoading) return null;
  // console.log('heere is user')
  // console.log(user)
  // if (authedRoutes.includes(router.pathname)) {
  if (user) {
    // console.log('my user:');
    // console.log(user);

    if (!('accountStatus' in user)) { //BRAND NEW USERS HERE
      if (router.pathname != '/setup') {
        router.push('/setup');
      } else {
        return <>{children}</> //HERE IS ACCESSIBLE ONLY TO THE BRAND NEW AUTHED USERS WHO HAVEN'T FINISHED SETUP PROCESS, THEY WILL ALWAYS BE TAKEN TO /setup
      }

    } else { //NOT BRAND NEW USERS HERE, POSSIBLY NOT FINISHED SETUP
      if (user.accountStatus == "TEMP" && router.pathname != '/setup') {
        router.push('/setup'); //HERE IS WHERE AUTHED USERS WHO STILL DIDN'T FINISH SETUP GET REDIRECTED TO FINISH IT
      }
      else if (user.accountStatus != "TEMP" && router.pathname == '/setup') {
        router.push('/'); //HERE IS WHERE FULLY SETUP USERS WHO TRY TO GO TO SETUP AGAIN GET REDIRECTED TO ROOT DIRECTORY
      }
      if (router.pathname == '/buildings/[id]') {
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
        return <>{children}</>

      }


      // console.log(buildingId)
      // console.log(router.asPath);
      return <>{children}</>;  //HERE, FULLY AUTHED USERS GOTO ANYWHERE EXCEPT /setup, AND NOT FULLY AUTHED USERS LOAD THE /setup page
    }
  } else (router.push('/api/auth/login'))
}
// } else (router.push('/'))
// }


export default AuthWrapper
