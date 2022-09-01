import styles from "../Users/Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: "https://c.tenor.com/AYnLoaBDsRoAAAAd/bunny-rabbit.gif",
                fullName: 'Polina K.',
                status: "fly like a bee!!!",
                location: {country: "Russia", city: "Moscow"},
                followed: true
            },
            {
                id: 2,
                photoURL: "https://thumbs.gfycat.com/EuphoricShowyDotterel-size_restricted.gif",
                fullName: 'Killian M.',
                status: "i love money",
                location: {country: "France", city: "Paris"},
                followed: false
            },
            {
                id: 3,
                photoURL: "https://i.gifer.com/embedded/download/PjDt.gif",
                fullName: 'Marshall M.',
                status: "the game тоби пизда нигга",
                location: {country: "United States", city: "Detroit"},
                followed: true
            },
            {
                id: 4,
                photoURL: "https://cdn3.whatculture.com/images/2015/04/Snoop-Dogg-Shooting-600x338.gif",
                fullName: 'Dr. Dre',
                status: "chill in Compton, babe",
                location: {country: "United States", city: "Los-Angeles"},
                followed: true
            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick = {() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;