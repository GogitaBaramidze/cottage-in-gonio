'use server'

import Events from './_components/Events'
import Gallery from './_components/Gallery'
import Kitchen from './_components/Kitchen'
import Cover from './_components/Cover'
import Wine from './_components/Wine'

async function Home() {
    return (
        <main className="flex h-full w-full flex-col bg-pageBg">
            <Cover />
            <Kitchen />
            <Events />
            <Wine />
            <Gallery />
        </main>
    )
}

export default Home
