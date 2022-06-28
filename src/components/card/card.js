import React from 'react';

const Card = (props) => {
    return (
        <div className="col">
          <div className="card h-100">
            <img src={props.article.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.article.author}</h5>
              <p className="card-text">{props.article.title}</p>
            </div>
          </div>
        </div>
    
   
    
    );
}

export default Card;
