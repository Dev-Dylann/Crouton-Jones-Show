import { motion } from "framer-motion"
import bgBanner from "../assets/images/background/background_road.webp"
import banner from "../assets/images/background/banner_front.webp"
import bgBannerDesktop from "../assets/images/background/banner_background.webp"

const Hero = () => {
    return (
        <section className='min-h-screen relative flex'>
            <img src={bgBanner} alt="Banner Background" className='absolute w-full h-full -z-[1] object-cover lg:hidden' />
            <img src={bgBannerDesktop} alt="Banner Background" className='absolute w-full h-full -z-[1] object-cover hidden lg:block' />

            <article className='grow flex flex-col items-center justify-center px-5 pb-10 gap-6 radial-gradient sm:radial-gradient-sm sm:pb-0 md:pb-10 md:radial-gradient lg:pt-[12vh] lg:normal-gradient lg:pb-0'>
                <motion.img
                    src={banner}
                    alt="Crouton Jones Banner"
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    className="w-[85%] sm:w-[70%] md:w-[75%] lg:w-[45%] xl:w-[35%]"
                />

                <div className="flex flex-wrap font-impact justify-center items-center gap-4 lg:gap-8 xl:gap-10">
                    <motion.button
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.35 },
                        }}
                        className='uppercase tracking-wider px-4 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 text-sm sm:text-xl sm:tracking-widest'
                    >Explore the whitepaper</motion.button>

                    <motion.button
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.35 },
                        }}
                        className='uppercase tracking-wider px-4 py-3 bg-white rounded-lg shadow-lg shadow-textColor/50 text-sm sm:text-xl sm:tracking-widest'
                    >Chat with Crouton</motion.button>
                </div>
            </article>
        </section >
    )
}

export default Hero