function Main(props) {
    return (
        <main>
            <section className="location-container">
            <div>
                <div className="location-info">
                    <h1>{props.header}</h1>
                    <p className="info-size">{props.location}</p>
                    <span className="info-size"><a href={props.locationLink}>View on google maps</a></span>
                </div>
                <div className="location-specs">
                    <p>{props.meters}<sup className='mini-text'>2</sup>]</p>
                    <p>{props.availableRooms} bedrooms]</p>
                    <p>{props.yearVisit}</p>
                </div>
                <div className="location-description">
                    <p>{props.comments}</p>
                </div>
            </div>
                <div className="image-container">
                    <img src={props.src} alt={props.alt} />
                </div>
            </section>    
        </main>
    )
}

export default Main