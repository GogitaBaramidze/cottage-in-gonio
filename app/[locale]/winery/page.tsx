import About from './_components/About'
import Cover from './_components/Cover'
import Kind from './_components/Kind'

export default function page() {
    return (
        <main className="h-auto w-full bg-white bg-pageBg ">
            <Cover />
            <About />
            <Kind />
        </main>
    )
}
