import React from 'react';
import {Link} from 'react-router-dom';

import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
  const [count,setCount] = React.useState(0);

  if(count>max){
    setCount(0);
  }
  return [count,setCount];
}

function BadgeDetails(props){
  const [ count, setCount] = useIncreaseCount(4);
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
                  <button onClick={()=>{
                    setCount(count+1);
                  }} className="btn btn-primary mr-4">
                    Increase Count: {count}
                  </button>
                  <Link className="btn btn-primary mb-4" to={`/badges/${props.badges.id}/edit`}>
                    Edit
                  </Link>
                </div>
                <div>
                  <button onClick={props.onOpenModal} className="btn btn-danger" to={`/badges/${props.badges.id}/edit`}>
                    Delete
                  </button>
                  <DeleteBadgeModal 
                    isOpen={props.modalIsOpen} 
                    onClose={props.onCloseModal}
                    onDeleteBadge={props.onDeleteBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BadgeDetails;