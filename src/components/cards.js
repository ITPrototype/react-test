import React from "react";
import "./card.style.css"
const divStyle = {
    width: '540px'
};

const Cards = ({user,time}) =>{
    return(
        <div className="card mb-3" style={divStyle}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={user.avatar} alt={user.first_name} />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{user.first_name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p><hr/> 
                <p className="card-text">{user.email}</p>
                <p className="card-text"><small className="text-muted">Last updated {time} minutes ago</small></p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Cards;