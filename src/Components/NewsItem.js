import React, { Component } from 'react';

export class Newsitem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className='my-3'>
        <div className='card'>
          <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/12/08/1600x900/IMG_5106_1666504626612_1670480186625_1670480186625.jpg":imageUrl} alt="img"/>
          <div className='card-body'>
            <h5 className='card-title'>{title} </h5>
            <p className='card-text'>{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className='btn btn-sm btn-dark'>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
