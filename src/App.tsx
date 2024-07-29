import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Main from '@/pages/Main/Main'

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
