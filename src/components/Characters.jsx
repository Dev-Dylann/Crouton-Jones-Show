import { useState, useEffect } from 'react'
import data from '../data/characters.json'
import { motion, AnimatePresence } from "framer-motion"
import CharacterCard from '../ui/CharacterCard'
import CharacterInfo from './CharacterInfo'

const Characters = () => {
    const [card, setCard] = useState(null)

    useEffect(() => {
        console.log(card)
    }, [card])

    return (
        <section className="py-12 px-5 flex flex-col gap-6 min-h-screen bg-[url('/background/background_city.webp')] bg-cover bg-center bg-fixed relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black/25"></div>

            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading uppercase z-[2]"
            >Meet Our Characters</motion.h2>

            <article className="flex flex-col gap-8">
                {data.characters.map((character, index) => {
                    character.position = index % 2

                    return (<CharacterCard key={`character${index}`} character={character} setCard={setCard} index={index + 1} />)
                })}
            </article>

            <AnimatePresence>
                {card && (<CharacterInfo card={card} setCard={setCard} />)}
            </AnimatePresence>
        </section>
    )
}

export default Characters
