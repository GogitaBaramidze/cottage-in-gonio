'use client'

import i18nConfig from '@/configs/i18nConfig'
import { LangChooseProps } from '@/types/types'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const LangChoose = ({ className, spanClassname }: LangChooseProps) => {
    const currentPathname = usePathname()
    const router = useRouter()
    const { i18n } = useTranslation()
    const currentLocale = i18n.language
    const newLocale = currentLocale === 'ka' ? 'en' : 'ka'

    const handleLangSwitch = () => {
        const newLocale = currentLocale === 'ka' ? 'en' : 'ka'

        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + newLocale + currentPathname)
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
        }
        router.refresh()
    }

    return (
        <>
            <div className={`${className}`} onClick={handleLangSwitch}>
                <span className={`${spanClassname}`}>{newLocale === 'ka' ? 'GEO' : 'ENG'}</span>
            </div>
        </>
    )
}

export default LangChoose
