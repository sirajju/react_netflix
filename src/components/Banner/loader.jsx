import './loader.css'

export default function () {
    return (
        <div className="loader" style={{ position: 'fixed', top: '50%', left: '50%' }}>
            <div className="spinner-border" style={{ width: "70px", height: "70px" }} role="status">
                <span className="sr-only "></span>
            </div>
        </div>
    )
}