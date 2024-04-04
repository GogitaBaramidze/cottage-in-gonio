'use server'

import SectionOne from './_components/SectionOne'

async function Home() {
    return (
        <main className=" flex min-h-screen w-full flex-col  pt-[1px]">
            <SectionOne />
            {/* <SectionTwo /> */}
            <h1>Hello</h1>
        </main>
    )
}

export default Home
