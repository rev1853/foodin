import SharedData from "@/Helpers/SharedData";

const { Component } = require("react");

class Layout extends Component {
    render() {
        return (
            <>
                <header className="page-topbar" id="header">
                    <div className="navbar navbar-fixed">
                        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-light">
                            <div className="nav-wrapper">
                                <div className="header-search-wrapper hide-on-med-and-down"><i className="material-icons">search</i>
                                    <input className="header-search-input z-depth-2" type="text" name="Search"
                                        placeholder="Search name or tag" id="top-search" data-search="template-list"></input>
                                    <ul className="search-list collection display-none"></ul>
                                </div>
                                <ul className="navbar-list right">
                                    <li className="hide-on-med-and-down"><a
                                        className="waves-effect waves-block waves-light toggle-fullscreen"
                                    ><i className="material-icons">settings_overscan</i></a></li>
                                    <li className="hide-on-large-only search-input-wrapper"><a
                                        className="waves-effect waves-block waves-light search-button" ><i
                                            className="material-icons">search</i></a></li>
                                    <li><a className="waves-effect waves-block waves-light profile-button"
                                        data-target="profile-dropdown"><span className="avatar-status avatar-online"><img
                                            src={`${this.props.sharedData.props.ziggy.url}/man.png`}
                                            alt="avatar"></img><i></i></span></a></li>
                                </ul>
                                <ul className="dropdown-content" id="profile-dropdown">
                                    <li><a href={route('client.logout')} className="grey-text text-darken-1"><i
                                        className="material-icons">keyboard_tab</i> Logout</a></li>
                                </ul>
                            </div>
                            <nav className="display-none search-sm">
                                <div className="nav-wrapper">
                                    <form id="navbarForm">
                                        <div className="input-field search-input-sm">
                                            <input className="search-box-sm mb-0" type="search" required="" id="search"
                                                placeholder="Explore Materialize"></input>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </nav>
                    </div>
                </header>
                <div id="main p-0">
                    <div className="row">
                        <div className="col s12">
                            <div className="container">
                                <div className="section">
                                    <div className="row" id="ecommerce-products">
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                            <div className="content-overlay"></div>
                        </div>
                    </div>
                </div>

                <footer className="page-footer footer footer-static footer-light navbar-border navbar-shadow">
                    <div className="footer-copyright">
                        <div className="container"><span>&copy; 2020 <a href="../../../../user/pixinvent/portfolio.html?ref=pixinvent"
                            target="_blank">PIXINVENT</a> All rights reserved.</span><span
                                className="right hide-on-small-only">Design and Developed by <a
                                    href="https://pixinvent.com/">PIXINVENT</a></span></div>
                    </div>
                </footer>
            </>
        );
    }
}

export default SharedData(Layout);