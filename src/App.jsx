import PersonCard from './components/PersonCard'
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <div className='personCard'>
          <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        </div>
        <div className='personCard'>
          <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        </div>
        <div className='personCard'>
          <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        </div>
        <div className='personCard'>
          <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
        </div>
      </div>
    </>
  )
}

export default App
