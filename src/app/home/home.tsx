import HomeContact from '../components/HomeContact/HomeContact'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeNews from '../components/HomeNews/HomeNews'
import HomeServices from '../components/HomeServices/HomeServices'
import HomeStats from '../components/HomeStats/HomeStats'

//import HomeServices from '../components/HomeServices'
//import HomeStats from '../components/HomeStats'
//import HomeContact from '../components/HomeContact'

export default function HomePage() {
  return (
    <main>
      <HomeHeader />
      <HomeStats />
      <HomeServices />
      <HomeNews />
      <HomeContact />
    </main>
  )
}

