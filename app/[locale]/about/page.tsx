'use server'
import Wine from '@/components/home/Wine'
import Hotel from '@/components/videos/Hotel'

export default async function page() {
    return (
        <main className="h-full w-full">
            <Hotel />
        </main>
    )
}
