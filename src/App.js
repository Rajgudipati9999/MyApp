import {Component} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Place from './components/Place'
import Header from './components/Header'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'

class App extends Component {
  render(){
    return (
      <div className='app'>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<About/>}/>
          <Route exact path='/place' element={<Place/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App 