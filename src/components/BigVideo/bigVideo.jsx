import YouTube from 'react-youtube'
import './bigVideo.css'

export default function (props) {
    const opts = {
        height: '500',
        width: '1200',
        playerVars: {
            autoplay: false,
        }
    };
    return (
        <div className="player">

            <YouTube opts={opts} videoId={props.id ? props.id : 'Po3jStA673E'} iframeClassName='ytVideo'  />

            <iframe className="ytVideo" autoplay='false'></iframe>

        </div>
    )
}