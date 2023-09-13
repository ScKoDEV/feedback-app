import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App(){
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you ant to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    } // We push this to feedback list then to feedback item and input there the id but wee need the function to be in app.js because there is the data. This will be easier with context api

    const [feedback, setFeedback] = useState(FeedbackData)

    return ( //JSX needs 1 element to be returned so we need to wrap in div or an fragment <> if multiple elements
        <>
        <Header />
        <div className='container'>
            <FeedbackForm />
            <FeedbackStats feedback={feedback} />
             <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
};



export default App;