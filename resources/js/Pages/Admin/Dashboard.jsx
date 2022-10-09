import RouteNames from '@/constants/routeNames';
import Routing from '@/Helpers/Routing';
import Layout from '@/Layouts/Admin/Layout';
import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div class="alert alert-primary alert-dismissible fade show">
                <svg viewbox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                <strong>Welcome!</strong> Dont have a good day, have a great day
            </div>
        );
    }
}

Dashboard.layout = page => <Layout title="Dashboard">{page}</Layout>;

export default Dashboard;