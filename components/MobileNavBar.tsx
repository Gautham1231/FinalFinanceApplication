'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import Footer from "./Footer"

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image 
            src='icons/hamburger.svg'
            width={30}
            height={30}
            alt='menu'
            className="cursor-pointer"
          /> 
        </SheetTrigger>
          <SheetContent side='left' className="border-none bg-white">
                <Link href="/" className="cursor-pointer items-center gap-1 px-4">
                      <Image src="/icons/logo.svg" alt="Horizon Logo" width={34} height={34} /> 
                      <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                        Finance Tracker
                      </h1>
                      </Link>
                      <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-4 pt-16 text-white">
                                    {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                      <SheetClose asChild key={item.label}>
                                  <Link href={item.route} 
                                      className={cn ('sidebar-link', {'bg-bank-gradient': isActive})}>
                                      <div className="relative size-6">
                                          <Image 
                                              src={item.imgURL}
                                              alt={item.label}
                                              fill
                                              className={cn({'brightness-[3] invert-0': isActive})}
                                          />
                                      </div>
                                          <p className={cn(['sidebar-label', {'!text-white': isActive}])}>
                                              {item.label}
                                          </p>

                                    </Link>
                                    </SheetClose>
                                  )
                              })}

                              USER
                            </nav>
                        </SheetClose>  

                        <Footer user={user} type="mobile"/>
                      </div>
                  </SheetContent>
            </Sheet>
        </section>
  )
}

export default MobileNavbar