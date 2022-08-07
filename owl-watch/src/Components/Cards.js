import './Cards.css'

export function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <p className='card__class'>COMP 140</p>
                <h2 className="card__project">{props.project}</h2>
                <p className="card__description">{props.description}</p>
            </div>
        <button className="card__btn">completion</button>
        </div>
    );
}
