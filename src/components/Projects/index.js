import {motion} from 'framer-motion'
import './index.css';

const Projects = () => (
<motion.div 
initial={{opacity : 0}}
animate={{opacity : 1}}
exit={{opacity : 0}}
className='projects'
>
<h2>My Projects</h2>
    <div className="project-list">
      <div className="project-item">
        <h1>Password Manager</h1>
        <p>This is the web app where a user can save all his passwords</p>
        <a href='https://rajgudipati9999.github.io/password-manager'>Project Link</a>
      </div>
      <div className="project-item">
        <h1>Match Game</h1>
        <p>This is the web app where we have to match displayed image with thumbnail images </p>
            <a href='https://rajgudipati9999.github.io/match-game'>Project Link</a>
      </div>

      <div className="project-item">
        <h1>
          Jobby App
        </h1>
        <p>This is the web app where you can find the Right Job that matches your skills</p>
        <a href='http://rajgudipati9999.github.io/jobby-app' target='new' rel='noreferrer'>Project Link</a>
      </div>
    </div>
  </motion.div>
);

export default Projects