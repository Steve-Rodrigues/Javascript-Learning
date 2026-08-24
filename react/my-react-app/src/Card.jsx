import profilePic from "./assets/73224464007-45-allstates-kc-04052024.webp";

function Card(){
    return(
        <div className="card">
            <img alt="profile picture image" src={profilePic} />
            <h3 className="Player">Steve Rodrigues</h3>
            <p className="description">Junior at RIC, studying CS,AI, and Mathematics</p>
        </div>
    );
}
export default Card