// import React from 'react'
// import { useUser } from "@auth0/nextjs-auth0";
import { Grid, Button, Image, css } from "@nextui-org/react"
// import { useEffect, useState } from "react";
import Tenant from "./Tenant";
import Loading from '../Loading'
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
// import { QueryClient } from 'react-query'
// import { useEffect } from "react";

const ListTenants = () => {
    // const user = useUser();
    // const queryClient = useQueryClient();
    // queryClient.removeQueries(["getTenants"]);
    // user.user.tenantIDs = [];
    const getTenantsList = useQuery('getTenants', async () => {
        const tenants = await JSON.parse((await axios.get('/api/getTenantsListAPI')).data.tenants);

        return tenants;
    })
    // const queryClient = new QueryClient();
    // queryClient.removeQueries(['getOneTenant'], { exact: true });

    if (getTenantsList.status == "loading") return <Loading />
    return (
        <div style={{ marginLeft: "4rem", marginRight: "4rem" }}>

            <Grid.Container gap={2} justify="left">
                {getTenantsList.data.map(tenant => (

                    <Grid key={tenant.id} xs={12} sm={3}>
                        <Tenant tenant={tenant} />
                    </Grid>))}


            </Grid.Container>
        </div>
    )
}

export default ListTenants