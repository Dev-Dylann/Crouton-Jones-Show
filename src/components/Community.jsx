// import { motion } from "framer-motion"
import { motion } from "motion/react"
import discord from '../assets/images/icons/discord.png'
import telegram from '../assets/images/icons/telegram.png'
import jonesLeather from '../assets/images/jones-leather.webp'

const Community = () => {
    return (
        <section className="px-5 pt-16 pb-60 flex flex-col gap-4 bg-primaryBtn bg-[url('./assets/background/scratches.webp')] bg-cover bg-center relative md:px-8 sm:py-16 lg:px-12 lg:grid lg:grid-cols-2">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-impact font-bold text-white text-2xl text-center tracking-widest heading uppercase lg:text-4xl lg:col-span-full"
            >Join Our Community</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-semibold text-center lg:col-span-full lg:text-xl"
            >Connect with fans, speak to the creators, get exclusive updates, and be part of the Crouton Jones adventure.</motion.p>

            <div className="flex flex-col items-center gap-6 my-4 sm:items-end sm:px-20 lg:order-2 lg:place-content-center lg:items-center">
                <motion.button
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className='uppercase font-impact tracking-widest px-6 py-3 bg-white rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit flex gap-2 items-center'
                >
                    <img src={discord} alt="Discord Logo" className="h-10 w-10" />
                    Join Our Discord
                </motion.button>

                <motion.button
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className='uppercase font-impact tracking-widest px-6 py-3 bg-white rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit flex gap-2 items-center'
                >
                    <img src={telegram} alt="Discord Logo" className="h-10 w-10" />
                    Join Our Telegram
                </motion.button>
            </div>

            <motion.img
                src={jonesLeather}
                alt="Crouton Jones"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-0 w-1/2 mx-auto max-w-[250px] lg:relative lg:order-2 lg:w-full lg:max-w-[300px]"
            />
        </section>
    )
}

export default Community
