'use client'
import React, { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState('')

    const onSubmit = async (event: any) => {
        event.preventDefault()
        setResult('Sending....')
        const formData = new FormData(event.target)

        formData.append('access_key', '31e1263b-770b-4457-a655-932cde0af895')

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            console.log('Good')
            setResult('Form Submitted Successfully')
            event.target.reset()
        } else {
            console.log('Error', data)
            setResult(data.message)
        }
    }

    return (
        <section className="h-auto w-full px-24 ">
            <div className=" relative h-full w-full  bg-[#f1efeb]">
                <div className="absolute right-48 top-8 flex h-auto w-full flex-row items-center ">
                    <div className=" h-[1px] w-4/5 bg-black"></div>
                    <span>contact us</span>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="flex h-auto w-full  flex-col items-end px-40 py-24"
                >
                    <div className="mb-10 grid h-auto w-full  grid-cols-2 gap-10">
                        <input
                            name="firstname"
                            className="h-10 border border-black"
                            placeholder="firstname"
                            required
                        />
                        <input
                            name="lastname"
                            className="h-10 border border-black"
                            placeholder="lastname"
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            className="h-10 border border-black"
                            placeholder="email"
                            required
                        />
                        <input
                            name="phone"
                            type="number"
                            className="h-10 border border-black"
                            placeholder="phone"
                        />
                    </div>
                    <textarea
                        name="message"
                        className="mb-10 h-[200px] w-full border border-black"
                        placeholder="Your message"
                        required
                    ></textarea>
                    <button type="submit" className="right-0   border  border-black">
                        submit
                    </button>
                </form>
            </div>
            <span>{result}</span>
        </section>
    )
}
