'use client'

import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'
import Family from '../../../public/images/about/Family.jpg'
import { Visitors } from '@/components/svgs'

const ScrollTriggerComponent = ScrollTrigger as React.ComponentType<any>
export default function About() {
    const [count, setCount] = useState(false)
    return (
        <>
            <ScrollTriggerComponent onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <div className="relative flex h-auto w-full flex-row gap-20 py-10 pl-24">
                    <div className="flex h-[600px] w-full flex-col items-center gap-5">
                        <h1>About us</h1>
                        <p>
                            Chateau Iveri, a serene vineyard in Ajara, Georgia, invites you to a
                            unique winemakingexperience. Perched 500 meters high, near Batumi, our
                            vineyards thrive under the sun’snurturing warmth, producing exceptional
                            grapes for our traditional wines. With a heritage ofTsolikouri,
                            Chkaveri, and Satsuri grapes, we craft eco wines using age-old
                            techniques. Celebrate with us during “Rtveli,” our festive grape harvest
                            in autumn, and partake in the joy ofwinemaking.Welcome to a place where
                            every room offers a unique perspective on the world outside. Ourhotel is
                            not just a stay; it’s a visual journey.Visit us in Varjanisi, Keda, for
                            an unforgettable journey into the soul of Georgian winemaking.
                        </p>
                        <h2>We hosted</h2>
                        <p>
                            Pawel Herczynski, Ambassador of the European Union to Georgia;
                            Significant session of the Agrarian Affairs Committee, the Parliament of
                            Georgia;Significant session of the Regional Policy and Self-Government
                            Committee of the Parliamentof Georgia;Carl Hartzell, EU Ambassador.H.E
                            Maaike van Koldam Netherland Ambassador.
                        </p>
                        <p>
                           
                        </p>

                        <section className="flex h-auto  w-full  flex-col items-center gap-5  ">
                            <div className="flex w-full flex-col">
                                <div className="grid h-auto w-full grid-cols-2 grid-rows-2  gap-5  ">
                                    <div className=" flex w-full flex-row items-center rounded-md bg-zinc-800 p-2">
                                        <Visitors />
                                        {count && (
                                            <CountUp
                                                className="ml-1 text-white"
                                                start={1}
                                                end={20000}
                                                duration={3}
                                            />
                                        )}
                                        <span className="ml-1 text-white">+ visitors</span>
                                    </div>
                                    <div className="flex w-full flex-row items-center rounded-md bg-zinc-800 p-2">
                                        <Visitors />
                                        {count && (
                                            <CountUp
                                                className="ml-1 text-white"
                                                start={1}
                                                end={19}
                                                duration={3}
                                            />
                                        )}
                                        <span className="ml-1 text-white">+ weddings</span>
                                    </div>
                                    <div className=" flex  w-full  flex-row items-center rounded-md  bg-gray-600 p-2">
                                        <Visitors />
                                        {count && (
                                            <CountUp
                                                className="b ml-1 text-white"
                                                start={1}
                                                end={30}
                                                duration={3}
                                            />
                                        )}
                                        <span className="ml-1 text-white">+ meeting</span>
                                    </div>
                                    <div className="flex w-full flex-row items-center rounded-md bg-zinc-800 p-2">
                                        <Visitors />
                                        {count && (
                                            <CountUp
                                                className="ml-1 text-white"
                                                start={1}
                                                end={15}
                                                duration={3}
                                            />
                                        )}
                                        <span className="ml-1 text-white">+ event</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Image src={Family} className="h-full w-1/2 object-cover" alt="building" />
                </div>
            </ScrollTriggerComponent>
        </>
    )
}
