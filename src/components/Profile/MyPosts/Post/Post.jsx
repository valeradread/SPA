import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'></img>
            {props.message}
            <div>
                <span>like</span>  {props.likesCount}
            </div>
        </div>
    );
}

export default Post;