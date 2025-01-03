import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])

  console.log(cart)

  return (
    <div>
      <nav>
        <ul>
          <Link id='home-logo' to="/"><h2>Rajdip's Fake Store !</h2></Link>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="checkout">Checkout ({cart.length})</Link>
          </li>
        </ul>
      </nav>
      <div className='main-content'>
        <Outlet context={[cart, setCart]} />
      </div>
    </div>
  )
}

export default App