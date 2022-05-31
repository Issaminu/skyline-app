import React from 'react'
// import { ironSession } from "iron-session/next";
// import Navbar from '../components/Navbar/Navbar';
import { useUser } from '@auth0/nextjs-auth0';
import { Input } from '@nextui-org/react';
const dashboard = () => {
    // const ress = appContext.ctx.req;
    // ress = JSON.stringify(ress);
    // console.log(ress);
    const { user } = useUser();
    console.log('u in dashboard now')
    return (
        <main style={{}}>
            {/* <Navbar /> */}
            <h1>This is my dashboard</h1>
            <h1>This is a bunch of text</h1>
            <h1>This is a bunch of text</h1>
            <h1>This is a bunch of text</h1>
            <h1>This is a bunch of text</h1>
            <h1>This is a bunch of text</h1>
            <>
                {/* <Input label="ffs"></Input> */}
                {/* {console.log(session)} */}
            </>
        </main>
    )
}
export default dashboard;