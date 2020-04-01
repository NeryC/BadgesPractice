import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';

function BadgeDetails(props){
  return(
    <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia"/>
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{props.badges.firstName} {props.badges.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName={props.badges.firstName} 
                lastName={props.badges.lastName}
                email={props.badges.email}
                twitter={props.badges.twitter}
                jobTitle={props.badges.jobTitle}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link className="btn btn-primary mb-4" to={`/badges/${props.badges.id}/edit`}>
                    Edit
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger" to={`/badges/${props.badges.id}/edit`}>
                    Delete
                  </button>
                  {ReactDOM.createPortal(
                    <h1>No estoy aqui</h1>,
                    document.getElementById('modal')
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BadgeDetails;