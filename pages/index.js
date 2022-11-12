import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import AreaAtuacao from '../components/areas-atuacao/AreaAtuacao';
import Contato from '../components/contato/Contato'
import Wpp from '../components/wpp-button/WppButton'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AreaAtuacao />
      <Contato />
      <Wpp />
      <Footer />
    </div>
  )
}
