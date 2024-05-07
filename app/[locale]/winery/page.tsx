import About from './_components/About'
import Cover from './_components/Cover'
import List from './_components/List'
import Gallery from './_components/Gallery'
import Info from './_components/Info'
import WineYard from './_components/WineYard'

export default async function page() {
    return (
        <main className="h-auto w-full bg-white bg-pageBg ">
            <Cover />
            <About />
            <Gallery />
            <Info />
            <WineYard />
            <List />
        </main>
    )
}
