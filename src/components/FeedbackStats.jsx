import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    const average = feedback.length
        ? Math.round(
              (feedback.reduce((acc, cur) => acc + cur.rating, 0) /
                  feedback.length) *
                  10
          ) / 10
        : 0;

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

export default FeedbackStats;
