'use server'

import SectionOne from './_components/SectionOne'
import SectionTwo from './_components/SectionTwo'

async function Home() {
    return (
        <main className=" flex min-h-screen w-full flex-col">
            <SectionOne />
            <SectionTwo />
        </main>
    )
}

export default Home
