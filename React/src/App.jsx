import { Route, Routes } from 'react-router-dom'
import JsxComponent from './components/Jsx'
import Counter from './components/State'

function App() {

  return (
    <Routes>
      <Route path='/jsx' element={<JsxComponent/>} />
      <Route path='/state' element={<Counter/>} />
    </Routes>
  )
}

export default App
