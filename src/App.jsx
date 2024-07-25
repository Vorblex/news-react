import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './styles.module.css'
import Main from '@/pages/Main/Main'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
