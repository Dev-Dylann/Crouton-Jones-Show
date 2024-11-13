import data from "../data/merchandise.json"
import { motion } from "framer-motion"
import MerchCard from "../ui/MerchCard"

const Merchandise = () => {
    return (
        <section className="py-16 px-5 gap-4 flex flex-col md:py-28 md:px-8 md:gap-8 lg:px-12">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading uppercase md:text-[40px]"
            >Explore Our Merch</motion.h2>

            <article
                className="flex flex-col gap-10 p-5 sm:gap-12 sm:p-8 sm:grid sm:grid-cols-2 lg:grid-cols-3"
            >
                {data.merchandise.map((merch, index) => (
                    <MerchCard key={`merch${index}`} merch={merch} />
                ))}
            </article>
        </section>
    )
}

export default Merchandise