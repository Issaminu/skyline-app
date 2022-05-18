import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumps = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <>
            {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
        </>
    )
}

export default Breadcrumps