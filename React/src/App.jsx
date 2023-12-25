import { Route, Routes } from 'react-router-dom'
import { Jsx } from './components/Jsx'

function App() {

  return (
    <Routes>
      <Route path='/jsx-components' element={<Jsx/>} />
    </Routes>
  )
}

export default App
