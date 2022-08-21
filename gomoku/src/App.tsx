import { Routes, Route, Navigate } from 'react-router-dom'

import { Header, UserProvider, GameSizeProvider } from './components'
import { Home, Login, Game, Gamelog, Games } from './pages'
import style from './App.module.css'


function App() {
  return (
    <UserProvider>
      <GameSizeProvider>
        <Header />
        <main className={style.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/Game-log/:id" element={<Gamelog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </GameSizeProvider>
    </UserProvider>
  )
}

export default App;
