import About from './_components/About'
import Cover from './_components/Cover'
import List from './_components/List'
import Gallery from './_components/Gallery'
import Vineyard from './_components/VineYard'
import Info from './_components/Info'

export default async function page() {
    return (
        <main className="h-auto w-full bg-white bg-pageBg ">
            <Cover />
            <About />
            <Gallery />
            <Info />
            <Vineyard />
            <List />
        </main>
    )
}
