import './Location.css';

const Location = () => {
    return (
        <section className="vertical-scrolling" id="locationSection">
            <div id="location-container">
                <div className="location-content">
                    <div className="location-title">
                        <span>LOCATION</span>
                    </div>
                    <div className="address-location">
                        <span>12 Upper St. Martin's Lane<br /> WC2H 9FB, London</span>
                    </div>
                </div>
                <div id="map"></div>
            </div>
        </section>
    );
}

export default Location;