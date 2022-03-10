import {
    useParams,
    Link,
    Navigate,
    useNavigate,
    Routes,
    Route,
} from 'react-router-dom';
import Card from './shared/Card';

function Post() {
    const params = useParams();
    const navigate = useNavigate();

    const status = 200;

    if (status === 404) {
        return <Navigate to="/notfound" />;
    }

    const handlePrevPost = () => {
        const page = params.id && params.id > 1 ? Number(params.id) - 1 : 1;
        navigate(`/post/${page}`);
    };

    const handleNextPost = () => {
        const page = params.id ? Number(params.id) + 1 : 1;
        navigate(`/post/${page}`);
    };

    return (
        <Card>
            <h1>Post {params.id}</h1>
            <button className="btn btn-secondary" onClick={handlePrevPost}>
                Previous post
            </button>
            <button className="btn btn-primary" onClick={handleNextPost}>
                Previous post
            </button>
            {/* <Routes>
                <Route path="/show" element={<h1>Hello world</h1>} />
            </Routes> */}
        </Card>
    );
}

export default Post;
