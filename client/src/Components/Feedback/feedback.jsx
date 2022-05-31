import React from "react";
import Feedback from 'react-bootstrap/esm/Feedback';
import './feedback.css'
const myFeedback = () => {
    return (
        <div>
        <h5 className='feedbacktitle' >Відгук</h5>
        <textarea className='feedbackClient' placeholder='Напишіть відгук' name="feedback" id="" cols="40" rows="2"></textarea>
         <button className='buttonFeedback' type="submit">Надіслати</button>
    </div>
    )
}
export default myFeedback;