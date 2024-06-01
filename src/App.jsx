import './App.css'
import './index.css'
import Main from '../components/Main'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Steps from '../components/Steps'

function App() {
  return (
    <>
      <div className="navigation"><Navigation /></div>
      <Main />
      <div className="steps"><Steps /></div>
      <div><Footer /></div>
    </>
  )
}

export default App
