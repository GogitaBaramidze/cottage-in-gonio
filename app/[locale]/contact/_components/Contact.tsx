'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
        <section className="h-auto w-full px-5 md:px-7 lg:px-40 xl:px-64 ">
            <div className=" relative h-full w-full  rounded-lg bg-[#f1efeb] shadow-md">
                <div className="absolute right-6 top-8 flex h-auto w-full flex-row items-center md:right-7 lg:right-64 ">
                    <div className=" h-[1px] w-3/5 bg-black lg:w-4/5 "></div>
                    <span className="ml-4 text-sm uppercase">contact us</span>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="flex h-auto w-full  flex-col items-end px-10 py-20 md:px-20 lg:px-40"
                >
                    <div className="mb-6 grid h-auto w-full  grid-cols-1 gap-6 md:grid-cols-2">
                        <Input name="firstname" placeholder="firstname" required />
                        <Input name="lastname" placeholder="lastname" required />
                        <Input name="email" type="email" placeholder="email" required />
                        <Input name="phone" type="number" placeholder="phone (optional)" />
                    </div>
                    <Textarea
                        name="message"
                        className="mb-10 h-[200px] w-full border border-black"
                        placeholder="Your message"
                        required
                    />
                    <div className="flex h-auto w-full flex-row items-center justify-end">
                        <span className="mr-10 text-[green]">{result}</span>
                        <Button type="submit">submit</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
