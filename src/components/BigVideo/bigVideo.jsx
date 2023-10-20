import YouTube from 'react-youtube'
import './bigVideo.css'

export default function (props) {
    const opts = {
        height: '500',
        width: '1200',
        playerVars: {
            autoPlay: false,
        }
    };
    return (
        <div className="player">

            <YouTube opts={opts} videoId={props.id} iframeClassName='ytVideo'  />

            <iframe title={props.id} className="ytVideo" autoplay='false'></iframe>

        </div>
    )
}