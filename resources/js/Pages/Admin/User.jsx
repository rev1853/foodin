import RouteNames from "@/constants/routeNames";
import Routing from "@/Helpers/Routing";
import Layout from "@/Layouts/Admin/Layout";

const { Component } = require("react");

class User extends Component {

    render() {
        return (
            <a href={Routing.url(RouteNames.user)} onClick={Routing.to(RouteNames.dashboard)}>dashboard</a>
        );
    }
}

User.layout = page => <Layout title="User Management">{page}</Layout>

export default User;