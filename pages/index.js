// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import prisma from '../components/prismaClient'
import { Navbar } from '../components/Navbar/Navbar';
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
            session.user.id = DBuser.id;
            session.user.name = DBuser.name;
            session.user.image = DBuser.image;
            session.user.type = DBuser.type;
            session.user.accountStatus = DBuser.accountStatus;
            session.user.residentOfBuildingIDs = residentOfBuildingIDs;
            session.user.creatorOfBuildingIDs = creatorOfBuildingIDs;
            session.user.adminOfBuildingIDs = adminOfBuildingIDs;
            session.user.phone = DBuser.phone;
            session.user.notificationCount = DBuser.notificationCount;

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
                welcome! <a href="/api/auth/logout">Logout</a><br></br>
                click here to go to your setup: <Link href="/setup"><a>Setup</a></Link>
            </div>
        );
    } else {
        return (<>
            <Navbar />

            <h1>You are NOT logged in! <Link href='/api/auth/login'><a>Click here to log in</a></Link></h1>
        </>)
    }


    // return <a href="/api/auth/login">Login</a>;
}