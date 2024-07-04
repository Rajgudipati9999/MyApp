import {motion} from "framer-motion"
import './index.css'

const About = function(){
    return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="main-container"
    ><div className="container">
            <div className="content">
                <h1 className="heading">
                    Full Stack Developer 
                </h1>
                <p className="description">
                Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), crafting dynamic, high-performance web applications with seamless user experiences and robust server-side functionality.
                </p>
            </div>
            <div className='image-container'>
                <img className="image" src='https://i.ibb.co/QrdPZz9/background-replacer-result.png' alt="logo"/>
                <h1 className='name'>Rahul Gudipati</h1>
            </div>
        </div>
    </motion.div>
    )
}

export default About