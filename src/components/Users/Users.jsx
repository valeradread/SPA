import React from "react";
import styles from "./Users.module.css"
import axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(response => {
            debugger;
            props.setUsers();
        });

    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u. followed
                            ? <button onClick={ () => { props.unfollow(u.id) } } > Follow </button>
                            : <button onClick={ () => { props.follow(u.id) } } > Unfollow </button> }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                <p></p>
            </div>)
        }
    </div>
}

export default Users;