const { Component } = require("react");

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    <p>Copyright © Designed &amp; Developed by <a href="../index.htm" target="_blank">DexignZone</a> 2021
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;