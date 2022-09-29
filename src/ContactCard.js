import React, { useState } from 'react';

const ContactCard = (props) => {
    console.log(props);

    /*---CREATE STATE AND REACT HOOK FOR BUTTON TO SHOW AGE  */
    const [showAge, setShowAge] = useState(true); 


    return (
    <div className="contact-card">
      <img 
      src={props.avatarURL} 
      alt="profile">
      </img>
        <div className="user-details">
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <button onClick={()=> setShowAge(!showAge)}>Show Age</button>
            {showAge && <p>Age: {props.age}</p> }
      </div>
    </div>
    )
    
}

export default ContactCard;