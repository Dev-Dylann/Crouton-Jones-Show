import { motion } from "framer-motion"

const Intro = () => {
    return (
        <section className="py-16 px-5 flex flex-col items-center gap-10" >
            <article className='flex flex-col gap-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading"
                >CROUTON JONES: The Coolest Detective In New Snack City</motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-semibold text-center"
                >Get ready to dive into the smoothest, most action-packed adventure in New Snack City! Watch Crouton Jones, the fearless detective with style, wit, and his iconic catchphrase, "Respect it, baby!" as he battles the city's most notorious crime families. This is just a taste of what's to come in the Croutonverse. Stay tuned, baby!</motion.p>

                <motion.video
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    controls
                    className="py-4"
                >
                    <source src="./assets/teaser.mp4" type="video/mp4" />
                </motion.video>
            </article>

            <article className="flex flex-col gap-4">
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading uppercase"
                >About Us</motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-semibold text-center"
                >Crouton Jones isn&apos;t just a character, he&apos;s the meme king and the heart of a first-of-its-kind Global Brand Token. Powered by the $CJT token, this project is creating a whole new way to engage with a brand, allowing fans to own a piece of the Crouton Jones universe.

                    If you want to be part of a revolutionary movement that blends entertainment, blockchain, and community-driven content, you&apos;ve come to the right place!</motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className='uppercase font-impact tracking-widest text-lg px-6 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit self-center'
                >Read More</motion.button>
            </article>
        </section>
    )
}

export default Intro