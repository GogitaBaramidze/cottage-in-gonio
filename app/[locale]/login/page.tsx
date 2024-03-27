import Com from '@/components/Com'

import Two from '@/components/Two'
import Link from 'next/link'

function Login() {
    return (
        <main className=" flex min-h-screen w-full flex-col">
            <div className=" h-[700px] w-full bg-mainBg bg-contain bg-no-repeat md:bg-mainBg  md:bg-contain"></div>

            <Com />
            <Two />
            <Link href="/">
                <h1 className="text-3xl text-[red]">goooooooooooo</h1>
            </Link>
        </main>
    )
}

export default Login
