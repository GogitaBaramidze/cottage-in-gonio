'use server'

import Hotel from '@/components/videos/Hotel'

export default async function page() {
    return (
        <main className="h-full w-full">
            <Hotel />
        </main>
    )
}
