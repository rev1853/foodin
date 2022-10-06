import Footer from "@/Components/Admin/Footer";
import Header from "@/Components/Admin/Header";
import NavHeader from "@/Components/Admin/NavHeader";
import Preloader from "@/Components/Admin/Preloader";
import Sidebar from "@/Components/Admin/Sidebar";

const { Component } = require("react");

class Layout extends Component {
    render() {
        return (
            <>
                <Preloader />

                <div id="main-wrapper">
                    <NavHeader />
                    <Header title={this.props.title} />
                    <Sidebar />

                    <div className="content-body">
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>

                    <Footer />
                </div>
            </>
        );
    }
}

export default Layout;