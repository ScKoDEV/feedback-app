import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App(){

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you ant to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    } // We push this to feedback list then to feedback item and input there the id but wee need the function to be in app.js because there is the data. This will be easier with context api

    const [feedback, setFeedback] = useState(FeedbackData)

    return ( //JSX needs 1 element to be returned so we need to wrap in div or an fragment <> if multiple elements
        <Router>
        <Header />
        <div className='container'>
            <Routes>
            <Route exact path='/' element={
                <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                </>
            }>
             </Route>
             <Route path='/about' element={<AboutPage/>} />
             </Routes>
        </div>
        </Router>
    )
};



export default App;