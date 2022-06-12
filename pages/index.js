// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import prisma from '../components/prismaClient';
import axios from 'axios';
export const getServerSideProps = withPageAuthRequired({
  //returnTo: '/foo',
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    // const prisma = await new PrismaClient()
    let DBuser = new Object();
    // DBuser.accountStatus = "test";
    DBuser = await prisma.users.findUnique({
      where: {
        email: session.user.email
      },
      select: {
        id: true,
        email: true,
        // password: true,
        name: true,
        image: true,
        // type: true,
        // houseId: true,
        accountStatus: true,
        phone: true,
        notificationCount: true,
      },
    })
    const buildings = await prisma.buildings.findMany({
      where: {
        residentIDs: {
          contains: String(session.user.id)
        }
      },
      select: {
        id: true,
        adminIDs: true,
        creatorId: true,
      }
    });
    let creatorOfBuildingIDs = [];
    let adminOfBuildingIDs = [];
    let residentOfBuildingIDs = [];
    buildings.map(building => {
      residentOfBuildingIDs.push(building.id);
      if (building.creatorId == session.user.id) {
        creatorOfBuildingIDs.push(building.id);
      }
      if (building.adminIDs.includes(session.user.id)) {
        adminOfBuildingIDs.push(building.id);
      }
    });
    // DBuser.nickname = session.user.nickname;
    // if ('accountStatus' in DBuser) {
    //     session.user.accountStatus = DBuser.accountStatus;
    // }
    if (DBuser) {
      // console.log(DBuser);
      // session.user.id = DBuser.id;
      // session.user.name = DBuser.name;
      // session.user.image = DBuser.image;
      // // session.user.type = DBuser.type;
      // session.user.accountStatus = DBuser.accountStatus;
      // session.user.residentOfBuildingIDs = residentOfBuildingIDs;
      // session.user.creatorOfBuildingIDs = creatorOfBuildingIDs;
      // session.user.adminOfBuildingIDs = adminOfBuildingIDs;
      // session.user.phone = DBuser.phone;
      // session.user.notificationCount = DBuser.notificationCount;
      const MGMT_API_ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjNacGo0UmE5Y1VpZFpBaWRIdEdQQSJ9.eyJpc3MiOiJodHRwczovL3NreWxpbmUtYXBwLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJvRldnWFlVdXc4aExjTXc2RnM3QzgxUlhtNzZjSlZMZEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9za3lsaW5lLWFwcC5ldS5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY1NTA2NDIyMywiZXhwIjoxNjU1MTUwNjIzLCJhenAiOiJvRldnWFlVdXc4aExjTXc2RnM3QzgxUlhtNzZjSlZMZCIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zX3N1bW1hcnkgcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.fPgKkahMpgMgABuj0PoeUuzuT4a1jzKB6SHFTGR1nY53Eer3LqLW3hurD4dBRkHOOftiP7Il0rS4CB5qSk5gae7yUD-gpP2_BEAZRr9Q7q9aUE9mzdI273T2EiHU30FUNjoxjwdkh-Azb3rPHP6dVUtNg1QIET41PuQmbuJQgwZazSUHg9dq4a-yGNHXdYdK96fBzGZWhFpiwwy37P-6Ogxa2sGAecKJXt995ICTaedaZ1QzSl7bStOed2ODcOiDkxXTnx6UGHEm7CQGR8OKUxn2mkDjA6R9DlJuWl6i8FMUqPGmxSc_prl_C_7Tk2WR6pCPX1EadVcOqroaanHoYQ";
      // console.log(session.user);
      var options = {
        method: 'PATCH',
        url: 'https://skyline-app.eu.auth0.com/api/v2/users/' + session.user.sub,
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + MGMT_API_ACCESS_TOKEN,
          'cache-control': 'no-cache'
        },
        data: DBuser,
        // data: '{ "given_name": GIVEN_NAME_VALUE, "family_name": FAMILY_NAME_VALUE,"name": NAME_VALUE, "nickname": NICKNAME_VALUE,"picture": PICTURE_VALUE }'
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      if (DBuser.id != null) {
        // console.log('Hello old guy');

      }
      else {
        // console.log("HELLO NEW GUY");
      }
      prisma.$disconnect();
      // console.log('bye');
      // return res;
    } else console.log('user not found');
    prisma.$disconnect();
    // console.log('bye');

    return {
      props: {
        DBuser: DBuser
      },
      redirect: {
        destination: '/buildings',
        permanent: false,
      },

    };
  }
});
export default function Index(props) {
  const router = useRouter();
  let { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  if (isLoading) return null;
  if (error) return <div>{error.message}</div>;
  // console.log('here is the first call of user: ' + user);
  // callHandleLoginAPI(user, router);
  // console.log('here is props.user:');
  // console.log(props.DBuser);
  // console.log('wtf:')
  // console.log(user)
  if (user.email) {
    return (
      <div>
        {/* Welcome {user.name}! <a href="/api/auth/logout">Logout</a> */}
        {/* <Navbar /> */}
        welcome! <Link href="/api/auth/logout"><a>Logout</a></Link><br></br>
        click here to go to your setup: <Link href="/setup"><a>Setup</a></Link>
      </div>
    );
  } else {
    return (<>
      <h1>You are NOT logged in! <Link href='/api/auth/login'><a>Click here to log in</a></Link></h1>
    </>)
  }


  // return <a href="/api/auth/login">Login</a>;
}