import { motion } from "framer-motion"
import bgBanner from "../assets/images/background/background_road.webp"
import banner from "../assets/images/background/banner_front.webp"

const Hero = () => {
    return (
        <section className='min-h-screen relative flex'>
            <img src={bgBanner} alt="Banner Background" className='absolute w-full h-full -z-[1] object-cover' />

            <article className='grow flex flex-col items-center justify-center px-5 pb-10 gap-6 radial-gradient'>
                <motion.img
                    src={banner}
                    alt="Crouton Jones Banner"
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    className="w-[85%]"
                />

                <div className="flex flex-wrap font-impact justify-center items-center gap-4">
                    <motion.button
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        className='uppercase tracking-wider px-4 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 text-sm'
                    >Explore the whitepaper</motion.button>

                    <motion.button
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        className='uppercase tracking-wider px-4 py-3 bg-white rounded-lg shadow-lg shadow-textColor/50 text-sm'
                    >Chat with Crouton</motion.button>
                </div>
            </article>
        </section>
    )
}

export default Hero