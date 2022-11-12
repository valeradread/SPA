import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import facebook_icon from './../../../assets/images/facebook_icon.png'
import vk_icon from './../../../assets/images/vk_icon.png'
import twitter_icon from './../../../assets/images/twitter_icon.png'
import instagram_icon from './../../../assets/images/instagram_icon.png'
import youtube_icon from './../../../assets/images/youtube_icon.png'
import github_icon from './../../../assets/images/github_icon.png'
import no_photo from '../../../assets/images/no-photo.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile_info_container}>
            <div className={s.profile_images_container}>
                <div className={s.profile_wallpaper_container}>
                    <img className={s.profile_wallpaper_image}
                         src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'></img>
                </div>
                <div className={s.profile_photo_grid}>
                    <div className={s.profile_photo_container}>
                        {props.profile.photos.large ?
                            <img className={s.profile_photo} src={props.profile.photos.large}></img> :
                            <img className={s.profile_photo} src={no_photo}></img>
                        }
                    </div>
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.fullName_container}>
                    <p className={s.fullName_text}>{props.profile.fullName}</p>
                </div>
                <div>
                    <p className={s.aboutMe_text}>{props.profile.aboutMe}</p>
                </div>
                <div>
                    <p className={`${s.lookingForAJob_text} ${s.item_text}`}> {props.profile.lookingForAJob ?
                        <span> Looking for a job! </span> :
                        <span> I'm not looking for a job </span>}</p>
                </div>
                <div>
                    {props.profile.lookingForAJobDescription ?
                        <p className={s.lookingForAJob_text}><span
                            className={s.item_text}>Job I'm looking for :</span> {props.profile.lookingForAJobDescription}
                        </p> :
                        null
                    }
                </div>
                <div className={s.contacts_container}>

                    {props.profile.contacts.facebook || props.profile.contacts.vk || props.profile.contacts.twitter ||
                    props.profile.contacts.instagram || props.profile.contacts.youtube ||
                    props.profile.contacts.github ?
                        <p className={`${s.lookingForAJob_text} ${s.item_text}`}>Contact with me: </p> : null}

                    {/*FaceBook Icon*/}
                    {props.profile.contacts.facebook ?
                        <div className={s.contacts_icon}><a title={`https://${props.profile.contacts.facebook}`}
                                                            href={`https://${props.profile.contacts.facebook}`}>
                            <img className={s.icon_image}
                                 src={facebook_icon}></img> </a></div> :
                        null
                    }

                    {/***/}

                    {/*VK Icon*/}
                    {props.profile.contacts.vk ?
                        <div className={s.contacts_icon}><a title={`https://${props.profile.contacts.vk}`}
                                                            href={`https://${props.profile.contacts.vk}`}> <img
                            className={s.icon_image}
                            src={vk_icon}></img> </a></div> :
                        null}

                    {/***/}

                    {/*Twitter Icon*/}
                    {props.profile.contacts.twitter ?
                        <div className={s.contacts_icon}><a title={`https://${props.profile.contacts.twitter}`}
                                                            href={`https://${props.profile.contacts.twitter}`}> <img
                            className={s.icon_image}
                            src={twitter_icon}></img> </a></div> :
                        null}

                    {/***/}

                    {/*Instagram Icon*/}
                    {props.profile.contacts.instagram ?
                        <div className={s.contacts_icon}><a title={`https://${props.profile.contacts.instagram}`}
                                                            href={`https://${props.profile.contacts.instagram}`}> <img
                            className={s.icon_image}
                            src={instagram_icon}></img> </a></div> :
                        null}

                    {/***/}

                    {/*Youtube Icon*/}
                    {props.profile.contacts.youtube ?
                        <div className={s.contacts_icon}><a title={`https://${props.profile.contacts.youtube}`}
                                                            href={`https://${props.profile.contacts.youtube}`}> <img
                            className={s.icon_image}
                            src={youtube_icon}></img> </a></div> :
                        null}

                    {/***/}

                    {/*GitHub Icon*/}
                    {props.profile.contacts.github ?
                        <div className={s.contacts_icon}><a title={`https://${props.profile.contacts.github}`}
                                                            href={`https://${props.profile.contacts.github}`}> <img
                            className={s.icon_image}
                            src={github_icon}></img> </a></div> :
                        null}


                </div>
            </div>
        </div>
    );

}

export default ProfileInfo;