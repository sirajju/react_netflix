import './App.css';
import Navbar from './components/navbar/navbar'
import Banner from './components/Banner/Banner'
import BigVideo from './components/BigVideo/bigVideo';
import RowPosts from './components/rowPosts/rowPosts';
import { useState, useEffect } from 'react';
import { api_key, base_url, image_url } from './components/constants/constant';
import Axios from 'axios';


function App() {
  const [movieList, setMovieList] = useState([])
  const [horrorList, setHorrer] = useState([])
  const [actionList, setAction] = useState([])
  const [romanceList, setRomance] = useState([])
  useEffect(() => {
    Axios.get(base_url + 'trending/all/week?api_key=' + api_key + '&language=en-US').then(response => {
      setMovieList(response.data.results)
    })
    Axios.get(base_url + 'discover/movie?api_key=' + api_key + '&with_genres=27').then((response) => {
      setHorrer(response.data.results)
    })
    Axios.get(base_url + 'discover/movie?api_key=' + api_key + '&with_genres=28').then((response) => {
      setAction(response.data.results)
    })
    Axios.get(base_url + 'discover/movie?api_key=' + api_key + '&with_genres=10749').then((response) => {
      setRomance(response.data.results)
    })
  }, [])
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="bottom">
        <RowPosts movies={movieList} text='Popular on Netflix' image_url={image_url} />
        <RowPosts movies={horrorList} text='Horror movies' image_url={image_url} />
      </div>
      <BigVideo />
      <div className='bottom' style={{ }} >
        <RowPosts movies={actionList} text='Action movies' image_url={image_url} />
        <RowPosts movies={movieList} isBig='true' text='Netflix originals' image_url={image_url} />
      </div>
      <BigVideo id={'JfVOs4VSpmA'} />
      <div className='bottom'>
      <RowPosts movies={romanceList}  text='Romandic movies' image_url={image_url} />

      </div>
    </div>
  )
}
export default App;
