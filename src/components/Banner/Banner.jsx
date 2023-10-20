import { useState, useEffect } from 'react'
import './Banner.css'
import { base_url, api_key, image_url } from '../constants/constant'
import Axios from 'axios'

export default function () {
    const [movie, setMovie] = useState({})
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        Axios.get(base_url + 'trending/all/week?api_key=' + api_key + '&language=en-US').then(response => {
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        })
        setTimeout(()=>{
            setLoader(false)
        },2500)
       
    }, [])
    return (
        <div>
            {loader && (
                <div className="loader d-flex justify-content-center align-items-center" style={{width:"100%",height:"100vh"}}>
                    <div className="spinner-border" style={{width:"70px",height:"70px"}} role="status">
                        <span className="sr-only "></span>
                    </div>
                </div>
            ) }
            <div className="wrapper">
                <div className="bannerContainer" style={{ backgroundImage: `url(${image_url}${movie.poster_path})` }}>
                    <h1 className="movie">{movie.original_title || movie.name}</h1>
                    <h2 className="description">{movie.overview}</h2>
                    <div className="divBtn">
                        <button className="btnPlay">
                            <ion-icon style={{ position: "absolute", left: '130px', marginTop: "5px" }} name="play"></ion-icon><span style={{ marginLeft: "10px" }}>Play</span></button>
                        <button className="btnMore">
                            <ion-icon name="information-circle-outline" style={{ position: 'absolute', left: '240px', fontSize: "18px", marginTop: '5px' }}></ion-icon>
                            <span style={{ marginLeft: "15px" }}>More info</span>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}