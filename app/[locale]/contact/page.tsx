import Contact from './_components/Contact'
import Header from './_components/Header'
import Location from './_components/Location'

export default function page() {
    return (
        <main className="flex h-auto w-full flex-col gap-14 bg-pageBg   pt-10 md:pt-16 lg:pt-20">
            <Header />
            <Contact />
            <h2 className='text-center font-semibold text-xl'>Get directions</h2>
            <Location />
        </main>
    )
}
