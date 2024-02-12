import Header from './components/header/Navbar'
import New from './pages/home/herosection/Hero'
import Categeroury from './pages/home/browsecategoury/Collection'
import Discover from './pages/home/discover/Discover'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <New />
        <Categeroury />
        <Discover />
      </main>
      <Footer />
    </>
  )
}
