import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogsItems + ' ' + s.active}>
            <NavLink to={path} className={s.dialogContent}><img alt='pososi' className={s.profilePhoto} src= {props.photo} /><span className={s.dialogName}>{props.name}</span></NavLink>
        </div>
    );
}


export default DialogItem;