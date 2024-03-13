import icon from "../assets/gps-icon.png"
import cover from "../assets/card-cover.png"

export default function Card(props) {
    return (
        <>
            <section className="card--container">
                <img className="card--cover" src={props.imageUrl} />
                <div className="card--info_container">
                    <div className="card--info_location">
                        <img className="card--icon" src={icon} />
                        <h4 className="card--country">{props.location}</h4>
                        <a href={props.googleMapsUrl} target="_blank" className="card--maps">Google Maps</a>
                    </div>
                    <h1 className="card--heading">{props.title}</h1>
                    <span className="card--date">{props.startDate} - {props.endDate}</span>
                    <p className="card--desc">{props.description}</p>
                    
                </div>
            </section>
            <hr></hr>
        </>
    )
}