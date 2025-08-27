import profilePic from "./assets/react.svg"

function Card() {

    return(

        <div className="card">
            <img className="card-img" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-h2">React</h2>
            <p className="card-p">This is my first card component with react</p>
        </div>
    );
}

export default Card