import { Route, Routes } from 'react-router-dom'
import { Jsx } from './components/Jsx'
import {Event} from './components/Event'

function App() {

  return (
    <Routes>
      <Route path='/jsx-components' element={<Jsx/>} />
      <Route path='/event' element={<Event/>} />
    </Routes>
  )
}

export default App
