import { useQueryClient } from "react-query";
import AddTenant from "../../components/Tenant/AddTenant"
import ListTenants from "../../components/Tenant/ListTenants"

const users = () => {
    const queryClient = useQueryClient();
    queryClient.removeQueries(["getOneTenant"]);
    return (
        <>
            <main>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
                    <h1 style={{ marginBottom: 0, }}>Locataires</h1>
                    <AddTenant />
                </div>
                <ListTenants />

            </main>
        </>
    )
}

export default users