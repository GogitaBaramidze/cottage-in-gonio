'use server'

import Events from './_components/Events'
import Gallery from './_components/Gallery'
import Kitchen from './_components/Kitchen'
import SectionOne from './_components/SectionOne'
import dynamic from 'next/dynamic'
const Wine = dynamic(() => import('./_components/Wine'), { ssr: false })

async function Home() {
    return (
        <main className="flex h-full w-full flex-col bg-pageBg ">
            <SectionOne />
            <Kitchen />
            <Events />
            <Wine />
            <Gallery />
        </main>
    )
}

export default Home
