import SharedData from "@/Helpers/SharedData";

const { Component } = require("react");

class Comment extends Component {
    render() {
        return (
            <div className="row mt-1">
                <div className="col s12">
                    <div className="row">
                        <div className="col pr-0">
                            <img src={`${this.props.sharedData.props.ziggy.url}/man.png`} alt="" width="40" height="40" className="circle z-depth-2 responsive-img avtar"></img>
                        </div>
                        <div className="col row">
                            <p className="list-title col s12"><strong>{this.props.data.user.nickname}</strong></p>
                            <div style={{ fontSize: "12px" }} className="col s12">{this.props.data.timestamps}</div>
                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <p className="s12 pb-1 w-100" style={{ width: "100%", borderBottom: "2px #eee solid" }}>{this.props.data.comment}</p>
                </div>
            </div>
        );
    }
}

export default SharedData(Comment);