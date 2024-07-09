import {Component} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MyPlace from './components/MyPlace'
import Header from './components/Header'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'

class App extends Component {
  render(){
    return (
      <div className='app'>
        <BrowserRouter>
	<Header/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/place' element={<MyPlace/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/education' element={<Education/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App 
