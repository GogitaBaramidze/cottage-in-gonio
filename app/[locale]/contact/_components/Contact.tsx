'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
    const [result, setResult] = useState('')
    const { t } = useTranslation()

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
            setResult('Form Submitted Successfully')
            event.target.reset()
        } else {
            setResult(data.message)
        }
    }

    return (
        <section className="h-auto w-full px-5 md:px-7 lg:px-40 xl:px-64 ">
            <div className=" relative h-full w-full  rounded-lg bg-[#f1efeb] shadow-md">
                <div className="absolute right-6 top-8 flex h-auto w-full flex-row items-center md:right-7 lg:right-64 ">
                    <div className=" h-[1px] w-3/5 bg-black lg:w-4/5 "></div>
                    <span className="ml-4 text-sm uppercase">{t('contactUs')}</span>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="flex h-auto w-full  flex-col items-end px-10 py-20 md:px-20 lg:px-40"
                >
                    <div className="mb-6 grid h-auto w-full  grid-cols-1 gap-6 md:grid-cols-2">
                        <Input name="firstname" placeholder={t('firstname')} required />
                        <Input name="lastname" placeholder={t('lastname')} required />
                        <Input name="email" type="email" placeholder={t('emailChoose')} required />
                        <Input name="phone" type="number" placeholder={t('phone')} />
                    </div>
                    <Textarea
                        name="message"
                        className="mb-10 h-[200px] w-full border border-black"
                        placeholder={t('message')}
                        required
                    />
                    <div className="flex h-auto w-full flex-row items-center justify-end">
                        <span className="mr-10 text-[green]">{result}</span>
                        <Button className="     ">{t('send')}</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
