import { Route, Routes } from 'react-router-dom'
import JsxComponent from './components/Jsx'
import Counter from './components/State'
import LifeCycle from './components/LifeCycle'

function App() {

  return (
    <Routes>
      <Route path='/jsx' element={<JsxComponent/>} />
      <Route path='/state' element={<Counter/>} />
      <Route path='/life-cycle' element={<LifeCycle/>} />
    </Routes>
  )
}

export default App
