import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Resultado from './components/Resultado'

function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Formulario peso={setPeso} altura={setAltura} />
      <Resultado peso={peso} altura={altura} />
    </div>
  )
}

export default App
