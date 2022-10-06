const { Component } = require("react");

class Minimize extends Component {
    render() {
        return (
            <svg id="icon-minimize" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="feather feather-minimize">
                <path
                    d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                    style={{ strokeDasharray: "37, 57", strokeDashoffset: "0" }}></path>
            </svg>
        );
    }
}

export default Minimize;