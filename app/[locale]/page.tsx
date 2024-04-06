'use server'

import SectionOne from './_components/SectionOne'
import Services from './_components/Services'

async function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col ">
            <SectionOne />
            <Services />
        </main>
    )
}

export default Home
