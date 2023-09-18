import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'This is feedback item 1',
          },
          {
            id: 2,
            rating: 9,
            text: 'This is feedback item 2',
          },
          {
            id: 3,
            rating: 8,
            text: 'This is feedback item 2',
          },
    ])


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you ant to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item ))
        )
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext
