import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { BurgerIcon, EmailIcon, FbIcon, InstaIcon, WhatsappIcon } from '../../svgs'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import { PhoneIcon } from '../../svgs'

export function BurgerMenu() {
    const { t } = useTranslation()
    const router = useRouter()
    const handleLinkClick = (href: string) => {
        router.push(href)
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <BurgerIcon className="cursor-pointer text-3xl md:hidden" />
            </SheetTrigger>
            <SheetContent className="bg-[#F2F5FF]">
                <div className="flex min-h-screen w-full flex-col justify-between  pb-12 pt-16">
                    <div className="flex flex-col gap-6 ">
                        <SheetClose
                            onClick={() => handleLinkClick('/')}
                            className="cursor-pointer text-left  underline-offset-8 hover:underline md:ml-7"
                        >
                            {t('main')}
                        </SheetClose>

                        <SheetClose
                            onClick={() => handleLinkClick('/book')}
                            className="cursor-pointer  text-left underline-offset-8  hover:underline md:ml-7 "
                        >
                            {t('tourism')}
                        </SheetClose>
                        <SheetClose className="cursor-pointer text-left   underline-offset-8 hover:underline md:ml-7 ">
                            {t('winery')}
                        </SheetClose>
                        <SheetClose className="cursor-pointer text-left  underline-offset-8 hover:underline  md:ml-7">
                            {t('about')}
                        </SheetClose>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex w-full flex-row items-center">
                            <PhoneIcon className="h-4 w-4 fill-[#484848]" />
                            <span className="ml-2 text-sm text-[#484848] ">555 13 55 44 </span>
                        </div>
                        <div className="mt-4 flex w-full flex-row items-center">
                            <EmailIcon className="h-4 w-4 fill-[#484848]" />
                            <span className="ml-2 text-sm text-[#484848] ">beridze@mail.com</span>
                        </div>
                        <div className="mt-4 h-[2px]  w-full bg-[#DADDE7]"></div>
                        <div className="mt-6 flex w-full flex-row items-center justify-end gap-6">
                            <FbIcon className="h-8 w-8 cursor-pointer" />
                            <InstaIcon className="h-8 w-8 cursor-pointer" />
                            <WhatsappIcon className="h-8 w-8 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
