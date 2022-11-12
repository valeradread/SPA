import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'

const Profile = (props) => {


    return (
        <div className={s.profile_container}>
            <div>
                <MyPostsContainer/>
            </div>
            <div>
                <ProfileInfo profile={props.profile}/>
            </div>
        </div>
    );
}

export default Profile;