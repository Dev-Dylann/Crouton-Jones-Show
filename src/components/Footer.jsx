import logo from "../assets/images/logo.webp"
import discord from "../assets/images/icons/discord.png"
import telegram from "../assets/images/icons/telegram.png"
import twitter from "../assets/images/icons/twitter.png"
import youtube from "../assets/images/icons/youtube.png"
import instagram from "../assets/images/icons/instagram.png"
import tiktok from "../assets/images/icons/tiktok.png"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <section className="py-16 px-5 flex flex-col items-center gap-10 md:px-8 md:py-24 lg:px-12 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:gap-y-16">
            <motion.img
                src={logo}
                alt="Crouton Jones Logo"
                className="w-[80%] lg:self-start lg:col-span-1 lg:w-full"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
            />

            <nav className="flex flex-col gap-4 font-impact tracking-wider text-lg text-center uppercase md:text-xl lg:flex-row lg:text-left lg:col-span-2 lg:pt-8 lg:gap-20 lg:row-span-2 lg:place-self-start lg:justify-end lg:w-full">
                <motion.ul
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 lg:gap-4"
                >
                    <li>Roadmap</li>
                    <li>Characters</li>
                    <li>Memes</li>
                </motion.ul>

                <motion.ul
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 lg:gap-4"
                >
                    <li>Comic</li>
                    <li>Merch</li>
                    <li>About Us</li>
                </motion.ul>

                <motion.ul
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 lg:gap-4"
                >
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </motion.ul>
            </nav>

            <hr className="border-textColor w-full lg:hidden" />

            <article className="flex flex-col gap-2">
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="uppercase font-impact text-lg text-center tracking-widest font-bold lg:text-sm lg:text-left"
                >Follow Our Social Media</motion.p>

                <div className="flex items-center justify-center flex-wrap gap-2 lg:justify-start">
                    <motion.button
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={discord} alt="Discord" className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={telegram} alt="Telegram" className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={twitter} alt="Twitter/X" className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={youtube} alt="Youtube" className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={instagram} alt="Instagram" className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={tiktok} alt="Tiktok" className="w-6 h-6" />
                    </motion.button>
                </div>
            </article>

            <hr className="border-textColor w-full lg:col-span-full" />

            <p className="italic font-impact lg:col-span-full lg:text-center">
                &copy; {new Date().getFullYear()} Crouton Jones. All rights reserved.
            </p>
        </section>
    )
}

export default Footer