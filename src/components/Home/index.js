import Header from '../Header'
import './index.css'

const Home = function(){
    return (
        <div className='main-container'>
            <div className='header'>
                <Header/>
            </div>
            <div className="container">
            <div className="content">
                <h1 className="heading">
                    Full Stack Developer 
                </h1>
                <p className="description">
                Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), crafting dynamic, high-performance web applications with seamless user experiences and robust server-side functionality.
                </p>
            </div>
            <div className='image-container'>
                <img src='https://i.postimg.cc/Z54cNrtX/IMG-20210725-181307.jpg' alt='logo' className='image'/>
                <h1 className='name'>Rahul Gudipati</h1>
            </div>
        </div>
        </div>
    )
}

export default Home