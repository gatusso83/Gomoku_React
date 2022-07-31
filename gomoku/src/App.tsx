import Header from './components/Header'
import { Home, Login } from './pages'
import style from './App.module.css'


function App() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Login />
        {/*<Home />*/}
      </main>
    </>
  )
}


export default App;
