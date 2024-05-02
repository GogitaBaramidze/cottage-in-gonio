'use client'

import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export default function Hotel() {
    const [video, setVideo] = useState(true)

    return (
        <>
            <div className="h-full w-full">
                {video && <div className="min-h-screen w-full"></div>}
                <ReactPlayer
                    url="./../images/hotel/hotelVideo.mp4"
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                    loop={true}
                    onReady={() => setVideo(false)}
                    onStart={() => setVideo(false)}
                />
            </div>
        </>
    )
}
