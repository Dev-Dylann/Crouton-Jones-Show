import { motion } from "framer-motion"

const Roadmap = () => {
    return (
        <section className="py-16 px-5 flex flex-col gap-4 bg-[url('./background/background_faded.webp')] bg-cover bg-center bg-fixed">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading uppercase"
            >The Crouton Jones Journey</motion.h2>

            <article className="flex flex-col gap-28 relative my-5">
                <div className="absolute h-full w-1.5 bg-white z-[1] inset-0 mx-auto"></div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-lg flex flex-col gap-2 shadow-textColor/50 rounded-lg p-5 z-[2]">
                    <h3 className="font-impact text-xl tracking-wider font-bold uppercase text-primaryBtn">Meet Crouton Jones</h3>

                    <p className='font-semibold'>Dive into the world of Crouton Jones, the smooth-talking, afro-wearing hero with a flair for adventure.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-lg flex flex-col gap-2 shadow-textColor/50 rounded-lg p-5 z-[2]">
                    <h3 className="font-impact text-xl tracking-wider font-bold uppercase text-primaryBtn">Crouton Jones Comic Series</h3>

                    <p className='font-semibold'>Step into the illustrated universe of Crouton Jones through his exclusive comic series.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-lg flex flex-col gap-2 shadow-textColor/50 rounded-lg p-5 z-[2]">
                    <h3 className="font-impact text-xl tracking-wider font-bold uppercase text-primaryBtn">CJ Meme Cartoons</h3>

                    <p className='font-semibold'>Experience the lighter side of Crouton Jones with our Meme Cartoon Series.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-lg flex flex-col gap-2 shadow-textColor/50 rounded-lg p-5 z-[2]">
                    <h3 className="font-impact text-xl tracking-wider font-bold uppercase text-primaryBtn">Launch of CJ NFT Coin</h3>

                    <p className='font-semibold'>Join us as we bring Crouton Jones into the future with the launch of the CJ NFT Coin</p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    viewport={{ once: true }}
                    className='uppercase font-impact tracking-widest text-lg px-6 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit self-center z-[2]'
                >See Full Roadmap</motion.button>
            </article>
        </section>
    )
}

export default Roadmap
