import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Navigation />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/post/:id" element={<Post />} />
                        {/* <Route path="/post/*" element={<Post />} /> */}
                    </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    );
}

export default App;
