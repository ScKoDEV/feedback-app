import React from 'react'
import Card from './shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    // runs when feedback edit button is clicked/when feedbackEdit is called (second argument) it will update then the form with the data of the item in the feedbackEdit state (item object). This works only for the text. The rating will be within the state but it will not be visually updated because RatingSelect is in another component. We need to handle this there.
    useEffect(() => {
        if(feedbackEdit.edit === true ){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
        const newFeedback = {
            text, //shorthand for text: text,
            rating
        }

        if(feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
        setText('')
    }
}

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                <Button type='submit' isDisabled={btnDisabled}>
                    Send
                </Button>
            </div>

            {message && <div className="message">{message}</div> } 
        </form>
    </Card>
  )
}

export default FeedbackForm
