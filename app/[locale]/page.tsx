'use server'

import SectionOne from './_components/SectionOne'

async function Home() {
    return (
        <main className=" flex min-h-screen w-full flex-col  pt-[1px]">
            <SectionOne />
            {/* <SectionTwo /> */}
        </main>
    )
}

export default Home
