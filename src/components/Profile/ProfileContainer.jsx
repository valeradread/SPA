import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redax/profile-reducer";

class ProfileContainer extends React.Component{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let ActionCreators = {
    setUserProfile: setUserProfileAC,

}

export default connect(mapStateToProps, ActionCreators)(ProfileContainer);