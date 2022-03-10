import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    // Add feedback
    const addFeedback = ({ text, rating }) => {
        setFeedback([
            {
                id: uuidv4(),
                text,
                rating,
            },
            ...feedback,
        ]);
    };

    // Delete feedback
    const deleteFeedback = id => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    // Set item to be updated
    const editFeedback = item => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map(item =>
                item.id === id ? { ...item, ...updItem } : item
            )
        );
        feedbackEdit.edit = false;
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                editFeedback,
                deleteFeedback,
                addFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
