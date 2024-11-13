import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import logo from '../assets/images/logo.webp'
import { AnimatePresence } from "framer-motion"
import MobileNav from "./MobileNav"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='flex items-center p-5 justify-between md:p-8 lg:px-12 xl:py-3'>
            <button onClick={() => setIsOpen(true)} className="rounded-lg bg-bgColor lg:hidden">
                <Bars3Icon className="h-8 w-8 md:h-12 md:w-12 hover:text-primaryBtn tramsition-all" />
            </button>

            <img src={logo} alt="Crouton Jones Logo" className="w-[35%] z-[99] md:w-[40%] lg:w-[30%] xl:w-[20%]" />

            <button className="invisible lg:hidden">
                <Bars3Icon className="h-8 w-8 md:h-12 md:w-12" />
            </button>

            <nav className="hidden xl:block grow">
                <ul className="flex items-center gap-6 uppercase font-impact tracking-widest text-xl w-full justify-end">
                    <li className="hover-link cursor-pointer">Home</li>
                    <li className="hover-link cursor-pointer">Characters</li>
                    <li className="hover-link cursor-pointer">Memes</li>
                    <li className="hover-link cursor-pointer">Comic</li>
                    <li className="hover-link cursor-pointer">Merch</li>
                    <li className="hover-link cursor-pointer">About Us</li>
                    <li className="hover-link cursor-pointer">Contact Us</li>
                </ul>
            </nav>

            <AnimatePresence>
                {isOpen && <MobileNav setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </section>
    )
}

export default Header