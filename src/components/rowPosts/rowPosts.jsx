import '../Banner/Banner.css'

export default function (props){
    return (
        <div>
                <div className="ad_text">
                    {props.text}
                </div>
                <div className="movies">
                    {props.movies.map((movie, index) => {
                        return (<img alt='error' key={index} title={movie.name||movie.original_title||movie.title} className='movie_img' src={props.image_url + (props.isBig ? movie.poster_path : movie.backdrop_path)} />)
                    })}
                </div>
            </div>
    )
}
