import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import logo from '../assets/images/logo.webp'
import { AnimatePresence } from "framer-motion"
import MobileNav from "./MobileNav"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='flex items-center p-5 justify-between'>
            <button onClick={() => setIsOpen(true)}>
                <Bars3Icon className="h-8 w-8" />
            </button>

            <img src={logo} alt="Crouton Jones Logo" className="w-[35%] z-[99]" />

            <button className="invisible">
                <Bars3Icon className="h-8 w-8" />
            </button>

            <AnimatePresence>
                {isOpen && <MobileNav setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </section>
    )
}

export default Header