import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {

    return (
        <div className='home-container'>
            <h1>Home</h1>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}