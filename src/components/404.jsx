import './404.css'

export default function (){
    return (
        <div className='NotFound'>
            <h1>404 Not Found!!</h1>
            <button className='backBtn' onClick={()=>window.history.back()}>Go Back :)</button>
        </div>
    )
}