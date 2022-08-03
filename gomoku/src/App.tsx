import { Routes, Route, Navigate } from 'react-router-dom'

import { Header, UserProvider } from './components'
import { Home, Login, Game, Gamelog, Games } from './pages'
import style from './App.module.css'


function App() {
  return (
    <UserProvider>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Gamelog/:id" element={<Gamelog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </UserProvider>
  )
}

export default App;
