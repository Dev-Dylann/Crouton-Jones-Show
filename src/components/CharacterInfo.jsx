import { motion } from "framer-motion"
import { XMarkIcon } from '@heroicons/react/24/solid'

const CharacterInfo = ({ card, setCard }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.25 }}
            className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur z-[99] flex items-center justify-center p-5'
        >
            <motion.article
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="flex flex-col bg-bgColor p-5 pt-12 rounded-lg shadow-lg shadow-textColor/50 w-full gap-4 relative max-h-[65%]"
            >
                <motion.img
                    src={card.image}
                    alt={card.name}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 25, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.25, delay: 0.25 }}
                    className="absolute -top-28 left-0 w-[45%] h-auto -z-[1] opacity-0"
                />
                <button onClick={() => setCard(null)} className='p-4 z-[2] absolute right-2 top-2' >
                    <XMarkIcon className="h-6 w-6" />
                </button>

                <h2 className="font-impact font-bold text-primaryBtn text-2xl tracking-widest heading uppercase">{card.name}</h2>

                <pre className="font-semibold max-w-full font-montserrat text-wrap overflow-y-scroll">{card.info}</pre>

                <div className="flex justify-center gap-4 items-center">
                    <button
                        className='uppercase font-impact tracking-widest px-6 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit self-center'
                    >More Info</button>

                    <button
                        className='uppercase font-impact tracking-widest px-6 py-3 bg-white rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit self-center'
                    >Chat</button>
                </div>
            </motion.article>
        </motion.section>
    )
}

export default CharacterInfo