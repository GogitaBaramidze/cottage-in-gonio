import Contact from './_components/Contact'
import Header from './_components/Header'
import Location from './_components/Location'

export default function page() {
    return (
        <main className="flex h-auto w-full flex-col gap-20 bg-pageBg pt-24">
            <Header />
            <Contact />
            <Location />
        </main>
    )
}
