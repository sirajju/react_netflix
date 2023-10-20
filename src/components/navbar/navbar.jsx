import { useEffect,useState } from 'react'
import './navbar.css'
import { Routes, Route, useNavigate,Outlet } from 'react-router-dom'

export default function () {
    const history = useNavigate()
    const [darkNavbar,setDarkNavbar] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            window.scrollY > 30 ? setDarkNavbar(true) : setDarkNavbar(false) 
        })
    },[])
    return (
        <div  className={darkNavbar?"navbarDark":"navbar"}>
            <script>
              
            </script>
            <div className="left">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                <ul>
                    <li onClick={() => history('/home')}>Home</li>
                    <li onClick={() => history('/tvShows')}>Tv Shows</li>
                    <li onClick={() => history('/movies')}>Movies</li>
                    <li onClick={() => history('/news')}>New & Popular</li>
                    <li onClick={() => history('/myList')}>My List</li>
                </ul>
            </div>
            <div className="right">
                <img className='avatar' src="https://i.ibb.co/cbjHCYM/avatar.png" alt="error" />
            </div>
        </div>
    )
}