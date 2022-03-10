import { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    // If second arguemnet is empty array, then the effect will be activate when the page loads
    // - Good fot initial http fetches
    // If you put the state there, then the effect will be activated when the state is changed
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit])

    const handleTextChange = e => {
        setText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim().length >= 10) {
            const newFeedback = {
                text: text.trim(),
                rating,
            };
            
            if (feedbackEdit.edit === true) updateFeedback(feedbackEdit.item.id, newFeedback);
            else addFeedback(newFeedback);
            setText('');
            setRating(10);
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect setRating={setRating} rating={rating} />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={text.trim().length < 10 && !feedbackEdit.edit}>
                        Send
                    </Button>
                </div>
                {text && text.trim().length < 10 && (
                    <div className="message">
                        Text must be at least 10 characters
                    </div>
                )}
            </form>
        </Card>
    );
}

export default FeedbackForm;
