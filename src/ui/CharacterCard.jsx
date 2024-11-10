import { motion } from "framer-motion"

const CharacterCard = ({ character, setCard, index }) => {
    return (
        <motion.div onClick={() => setCard(character)} className='flex flex-col'>
            <motion.img src={character.image} alt={character.name} className={`w-[45%] z-[2] ${character.position ? 'self-end' : ''}`} />

            <motion.div className={`bg-white font-impact uppercase rounded-lg z-[1] shadow-lg shadow-textColor/50 px-5 py-4 flex flex-col ${character.position ? '' : 'items-end'} -mt-20`}>
                <motion.h3 className="font-bold tracking-widest text-lg">{character.name}</motion.h3>
                <motion.span className={`py-0.5 px-2 text-sm rounded-full ${character.role === 'Hero' ? 'bg-green-400' : 'bg-red-400'} text-white w-fit`}>{character.role}</motion.span>
            </motion.div>
        </motion.div>
    )
}

export default CharacterCard