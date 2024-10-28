import style from './Header.module.css'

function Header() {

  return (
    <header className={`${style.header} bg-light`}>
      <h1>Calculadora IMC</h1>
    </header>
  )
}

export default Header