import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'></img>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;