import {motion} from 'framer-motion'
import './index.css'
const Skills = () => {
    return (
        <motion.div initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} className='bg-container'>
                <div className='skills-container'>
                    <h1 className='heading'>Front End Technologies</h1>
                    <ul className='skills'>
                        <li className='skill'>Html</li>
                        <li className='skill'>Css</li>
                        <li className='skill'>React JS</li>
                        <li className='skill'>Bootstrap</li>
                    </ul>
                </div>

                <div className='skills-container'>
                    <h1 className='heading'>Back End Technologies</h1>
                    <ul className='skills'>
                        <li className='skill'>Python</li>
                        <li className='skill'>Javascript</li>
                        <li className='skill'>Node js</li>
                        <li className='skill'>Express js</li>
                        <li className='skill'>Mongo DB</li>
                        <li className='skill'>Sqlite</li>
                    </ul>
                </div>

                <div className='skills-container'>
                    <h1 className='heading'>Other Technologies</h1>
                    <ul className='skills'>
                        <li className='skill'>Git</li>
                        <li className='skill'>Git Hub</li>
                        <li className='skill'>Vs Code</li>
                        <li className='skill'>Ubuntu</li>
                        <li className='skill'>Restful Api</li>
                        <li className='skill'>NPM</li>
                    </ul>
                </div>
        </motion.div>
    )
}

export default Skills;