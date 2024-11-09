import { motion } from "framer-motion"

const Community = () => {
    return (
        <section className="px-5 py-16 flex flex-col gap-4 bg-primaryBtn min-h-screen bg-[url('./assets/background/scratches.webp')] bg-cover bg-center">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-impact font-bold text-white text-2xl text-center tracking-widest heading uppercase"
            >Join Our Community</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-semibold text-center"
            >Connect with fans, speak to the creators, get exclusive updates, and be part of the Crouton Jones adventure.</motion.p>
        </section>
    )
}

export default Community