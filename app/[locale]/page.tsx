'use server'

import Features from './_components/Features'
import SectionOne from './_components/SectionOne'
import Services from './_components/Services'

async function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col ">
            <SectionOne />
            <Services />
            <Features />
        </main>
    )
}

export default Home
