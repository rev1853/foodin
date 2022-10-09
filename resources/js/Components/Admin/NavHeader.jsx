const { Component } = require("react");

class NavHeader extends Component {
    render() {
        return (
            <div className="nav-header">
                <a href="index.html" className="brand-logo px-auto text-dark" style={{ fontSize: '28px' }}>
                    <span className="mx-auto">
                        Food<span className="text-primary">IN</span>
                    </span>
                </a>

                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavHeader;