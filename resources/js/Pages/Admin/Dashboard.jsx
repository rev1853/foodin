import RouteNames from '@/constants/routeNames';
import Routing from '@/Helpers/Routing';
import Layout from '@/Layouts/Admin/Layout';
import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <a href={Routing.url(RouteNames.user)} onClick={Routing.to(RouteNames.user)}>user</a>
        );
    }
}

Dashboard.layout = page => <Layout title="Dashboard">{page}</Layout>;

export default Dashboard;