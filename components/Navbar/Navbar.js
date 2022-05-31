import React from 'react'
// import { Navbar, Container } from 'react-bootstrap';
import './Navbar.module.css'
import Image from "next/image"
import { css, Card, Button, globalCss, Spacer } from "@nextui-org/react";
import AuthenticationButton from './authentification-button';
import { useRouter } from 'next/router';
// import NextLink from 'next/link';
import Link from 'next/link';
// import { flexbox } from '@mui/system';
import { User } from '@nextui-org/react';
import { useUser } from '@auth0/nextjs-auth0';
// import { Image } from '@nextui-org/react';

// import styled from "styled-components";
const Navbar = () => {
    const router = useRouter();
    const { user } = useUser();

    const StyleNotActive = {
        paddingLeft: '2rem', paddingRight: '2rem', marginBottom: '0', color: 'white', fontWeight: 400, fontSize: 16, cursor: 'pointer'
    }
    const StyleActive = {
        paddingLeft: '2rem', paddingRight: '2rem', marginBottom: '0', color: '#489CFC', fontWeight: 600, fontSize: 16, cursor: 'pointer',
    }
    const isActiveRoute = (path) => {
        if (router.pathname.split('/').slice(0, 2).join('/') == path) return StyleActive;
        else return StyleNotActive;
    }
    // globalStyles();

    if (router.pathname == "/setup") return null;
    return (<>
        <Card css={{
            bgColor: '#00436b', zIndex: '1000', top: '0', position: 'fixed', paddingTop: '0px !important', paddingBottom: '0px', borderBottomLeftRadius: '1.5rem', borderBottomRightRadius: '1.5rem', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderColor: 'white'
        }}>
            <div style={{ marginLeft: "1rem", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>

                    <Link href="/">
                        <a>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <svg width="76" height="20" viewBox="0 0 76 20" fill="none">
                                    <path
                                        d="M2.8333 17.6623H5.92418V2.33766H2.31816V5.45455H0V1.49012e-07H8.75748V17.6623H11.8484V20H2.8333V17.6623Z"
                                        fill="white"></path>
                                    <path d="M21.3785 17.6623H30.6512V10.9091H22.1513V8.57143H30.6512V2.33766H21.3785V0H33.4845V20H21.3785V17.6623Z"
                                        fill="white"></path>
                                    <path d="M42.2419 17.6623H51.5146V10.9091H43.0147V8.57143H51.5146V2.33766H42.2419V0H54.3479V20H42.2419V17.6623Z"
                                        fill="white"></path>
                                    <path d="M72.6355 2.33766H64.9084V7.27273H62.5902V0H75.2113V20H72.6355V2.33766Z" fill="white"></path>
                                </svg>
                            </div>
                        </a>
                    </Link>
                    <Spacer y={0.5} />
                    <div>
                        <ul style={{ margin: 0, display: 'flex', justifyContent: 'space-evenly', alignContent: 'center', alignItems: 'center' }}>
                            <li style={{ marginBottom: 0 }}><Link href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                                <Button light css={isActiveRoute('/dashboard')} color="stuff" auto>
                                    Tableau de bord
                                </Button></Link>
                            </li>
                            <li style={{ marginBottom: 0 }}><Link href="/buildings" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                                <Button light css={isActiveRoute('/buildings')} color="stuff" auto>
                                    Immeubles
                                </Button></Link>
                            </li>
                            <li style={{ marginBottom: 0 }}><Link href="/tenants" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                                <Button light css={isActiveRoute('/tenants')} color="stuff" auto>
                                    Locataires
                                </Button></Link>
                            </li>
                            <li style={{ marginBottom: 0 }}><Link href="/fixes" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                                <Button light css={isActiveRoute('/fixes')} color="stuff" auto>
                                    Dépenses
                                </Button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <Link href="/users" passHref> */}
                        {/* <Button light css={{}} color="stuff"> */}
                        <User
                            src={user.image}
                            name={user.name}
                            size="sm"
                            css={{
                                "& .nextui-user-name": {
                                    color: "#ffff",
                                },
                                // cursor: 'pointer',
                                "& .nextui-user-info": {
                                    ml: "0.5rem",

                                }
                            }}
                        />
                        {/* </Button> */}
                        {/* </Link> */}

                        {/* <p style={{ fontWeight: 500, fontSize: '0.9rem' }}>{user.name}</p> */}

                        <Spacer y={0.5} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AuthenticationButton />
                    </div>
                </div>
            </div>
        </Card>
    </>
    )
}

export default Navbar



