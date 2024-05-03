'use server'

import Events from '../../components/home/Events'
import Gallery from '../../components/home/Gallery'
import Kitchen from '../../components/home/Kitchen'
import Cover from '../../components/home/Cover'
import Wine from '../../components/home/Wine'
import Hotel from '@/components/home/Hotel'


async function Home() {
    return (
        <main className="flex h-full w-full flex-col bg-pageBg">
            <Cover />
            <Events />
            <Kitchen />
            <Hotel />
            <Wine />
            <Gallery />
        </main>
    )
}

export default Home
