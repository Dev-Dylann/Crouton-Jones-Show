import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import logo from '../assets/images/logo.webp'
import { AnimatePresence } from "framer-motion"
import MobileNav from "./MobileNav"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='flex items-center p-5 justify-between md:p-8'>
            <button onClick={() => setIsOpen(true)}>
                <Bars3Icon className="h-8 w-8 md:h-12 md:w-12 hover:text-primaryBtn tramsition-all" />
            </button>

            <img src={logo} alt="Crouton Jones Logo" className="w-[35%] z-[99] md:w-[40%] lg:w-[30%]" />

            <button className="invisible">
                <Bars3Icon className="h-8 w-8 md:h-12 md:w-12" />
            </button>

            <AnimatePresence>
                {isOpen && <MobileNav setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </section>
    )
}

export default Header