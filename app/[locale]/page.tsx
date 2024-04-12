'use server'

import Features from './_components/Features'
import SectionOne from './_components/SectionOne'
import Services from './_components/Services'
// import Wine from './_components/Wine'
import dynamic from 'next/dynamic'

const Wine = dynamic(() => import('./_components/Wine'), { ssr: false })

async function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col ">
            <SectionOne />
            <Services />
            <Features />
            <Wine />
        </main>
    )
}

export default Home
