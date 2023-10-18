import './navbar.css'

export default function () {
    return (
        <div className="navbar">
            <div className="left">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className="right">
                <img className='avatar' src="https://i.ibb.co/cbjHCYM/avatar.png" alt="error" />
            </div>
        </div>
    )
}