import './index.css'
import {motion} from 'framer-motion'
const Place = () => {
    return (
    <motion.div
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    exit={{opacity : 0}}
    className='container'
    >
        <div className="place-container">
            <div>
            <h1>Address</h1>
            <h2>Name : Rahul Gandhi Gudipati</h2>
            <h2>Place : Podili,Ongole,Andra Pradesh,India</h2>
            </div>
            <div>
                <img className='location' src='https://i.postimg.cc/bJzJ3Kxf/Screenshot-15.png' alt='ongole'/>
            </div>

        </div>
        </motion.div>
    )
}

export default Place
