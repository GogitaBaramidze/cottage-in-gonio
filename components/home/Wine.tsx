'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Cheers from '../../public/images/wine/Cheers.jpg'
import WineSort from '../../public/images/wine/WineSort.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Loading from '../../app/[locale]/loading'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from '../svgs'

export default function Wine() {
    const [video, setVideo] = useState(true)
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()
    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <section className="md:py-b flex h-auto w-full flex-col items-start justify-center gap-6  bg-[#f1efeb]  px-7 py-10 shadow-lg md:flex-row md:items-center md:gap-10  md:py-20 xl:px-24">
                    <div className="flex h-full w-full flex-col rounded-md ">
                        <h1 className="font-bgCaps mt-4 font-canela text-3xl text-[#111]">
                            {t('winery')}
                        </h1>
                        <p className="mb-4 mt-4 rounded-md text-[#111]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. 1500s, when an unknown printer.
                        </p>
                        <div className="rounded-md">
                            <Image
                                src={Cheers}
                                alt="bottle"
                                className="h-auto w-full rounded-md border border-[#484848] shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="flex h-auto w-full flex-col items-start">
                        <h1 className="font-bgCaps mt-4 text-[#111] md:order-2">
                            გინდა პახმელიის გარეშე ?
                        </h1>
                        <p className="mb-4 mt-4 text-[#111] md:order-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry s standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <div className="rounded-md  md:order-1">
                            <Image
                                src={WineSort}
                                alt="bottle"
                                className=" h-auto w-full rounded-md border border-[#484848] shadow-xl  "
                            />
                        </div>
                        <div className="mt-6 flex w-full justify-center md:order-5 md:justify-start">
                            <Button className=" h-12 w-full md:w-1/2">
                                <span>{t('viewMore')} </span>
                                <ArrowRight className="ml-2 h-5 w-5 " />
                            </Button>
                        </div>
                    </div>

                    <div className="hidden h-2/3 items-start justify-center overflow-hidden rounded-md  border border-[#484848] shadow-xl  md:flex">
                        {video && <div className="h-2/3 w-full"></div>}
                        <ReactPlayer
                            url="./images/wine/WineVideo.mp4"
                            width="100%"
                            height="100%"
                            playing={true}
                            muted={true}
                            loop={true}
                            onReady={() => setVideo(false)}
                            onStart={() => setVideo(false)}
                        />
                    </div>
                </section>
            )}
        </>
    )
}
