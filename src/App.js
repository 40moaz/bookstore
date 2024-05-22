import './App.scss'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import BookApi from './components/BookApi/BookApi'
import Cart from './components/cart/Cart'
import ContextProvider from './components/context/GlobalContext'
import CreateAcount from './components/register/CreateAcount'
import FavBook from './components/favBook/FavBook'
import Forget from './components/register/ForgetPass'
import HomePage from './components/homePage/HomePage'
import Nav from './components/navbar/Nav'
import Register from './components/register/Register'

function App() {

  return (
    <Router>
        <ContextProvider>
        <div className='app'>
            <Nav />
            <BookApi />
            <Routes>
            <Route path='/'  element ={ <HomePage /> }/>
            <Route path='/cart'  element ={ <Cart /> }/>
            <Route path='/fav'  element ={ <FavBook /> }/>
            <Route path='/create-acount'  element ={ <CreateAcount /> }/>
            <Route path='/register'  element ={ <Register /> }/>
            <Route path='/forget'  element ={ <Forget /> }/>
            </Routes>
        </div>
        </ContextProvider>
    </Router>
  )
}

export default App
