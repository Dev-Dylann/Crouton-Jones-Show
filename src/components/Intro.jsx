// import { motion } from "framer-motion"
import { motion } from "motion/react"

const Intro = () => {
    return (
        <section className="py-16 px-5 flex flex-col items-center gap-10 md:py-28 md:px-8 lg:px-12 lg:gap-28" >
            <article className='flex flex-col gap-4 md:gap-8 lg:grid lg:grid-cols-2 lg:gap-y-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading md:text-[40px] md:leading-normal lg:col-span-full"
                >CROUTON JONES: The Coolest Detective In New Snack City</motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-semibold text-center md:text-xl lg:text-left lg:place-content-center"
                >Get ready to dive into the smoothest, most action-packed adventure in New Snack City! Watch Crouton Jones, the fearless detective with style, wit, and his iconic catchphrase, "Respect it, baby!" as he battles the city's most notorious crime families. This is just a taste of what's to come in the Croutonverse. Stay tuned, baby!</motion.p>

                <motion.video
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    controls
                    className="py-4 md:py-8 md:w-[85%] md:mx-auto lg:py-0"
                >
                    <source src="./assets/teaser.mp4" type="video/mp4" />
                </motion.video>
            </article>

            <article className="flex flex-col gap-4 md:gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading uppercase md:text-[40px]"
                >About Us</motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-semibold text-center md:text-xl"
                >Crouton Jones isn&apos;t just a character, he&apos;s the meme king and the heart of a first-of-its-kind Global Brand Token. Powered by the $CJT token, this project is creating a whole new way to engage with a brand, allowing fans to own a piece of the Crouton Jones universe.

                    If you want to be part of a revolutionary movement that blends entertainment, blockchain, and community-driven content, you&apos;ve come to the right place!</motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.35 },
                    }}
                    className='uppercase font-impact tracking-widest text-lg px-6 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit self-center md:text-2xl'
                >Read More</motion.button>
            </article>
        </section>
    )
}

export default Intro