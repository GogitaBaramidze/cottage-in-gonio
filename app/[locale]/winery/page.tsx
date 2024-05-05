import About from './_components/About'
import Cover from './_components/Cover'
import List from './_components/List'

export default async function page() {
    return (
        <main className="h-auto w-full bg-white bg-pageBg ">
            <Cover />
            <About />
            <List />
        </main>
    )
}
