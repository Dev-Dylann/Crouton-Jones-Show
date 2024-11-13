import { XMarkIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

const MobileNav = ({ setIsOpen }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.1,
            }
        }
    }

    const item = {
        hidden: { opacity: 0, x: -25 },
        show: { opacity: 1, x: 0 }
    }

    return (
        <motion.aside
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className='font-impact bg-black/50 backdrop-blur fixed top-0 left-0 h-full w-full z-[80] flex flex-col lg:hidden'
        >
            <nav className="flex flex-col gap-16 px-5 py-8 w-[70%] bg-bgColor grow uppercase md:px-8 md:py-16 md:w-[50%] md:max-w-sm lg:px-12">
                <button onClick={() => setIsOpen(false)} className="hover-link">
                    <XMarkIcon className='h-8 w-8 md:h-12 md:w-12' />
                </button>

                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-xl flex flex-col gap-3 tracking-wider grow md:gap-6 md:text-2xl"
                >
                    <motion.li variants={item} className="hover-link cursor-pointer w-fit">Home</motion.li>
                    <motion.li variants={item} className="hover-link cursor-pointer w-fit">Characters</motion.li>
                    <motion.li variants={item} className="hover-link cursor-pointer w-fit">Memes</motion.li>
                    <motion.li variants={item} className="hover-link cursor-pointer w-fit">Comic</motion.li>
                    <motion.li variants={item} className="hover-link cursor-pointer w-fit">Merch</motion.li>
                    <motion.li variants={item} className="hover-link cursor-pointer w-fit">About Us</motion.li>
                    <motion.li variants={item} className="hover-link cursor-pointer w-fit">Contact Us</motion.li>
                </motion.ul>

                <button className='uppercase tracking-wider text-lg px-6 py-2 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 md:text-xl md:py-3 md:tracking-widest'>Chat with Crouton</button>
            </nav>

        </motion.aside>
    )
}

export default MobileNav