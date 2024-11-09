const CharacterCard = ({ character }) => {
    return (
        <div className='flex flex-col'>
            <img src={character.image} alt={character.name} className={`w-[45%] z-[2] ${character.position ? 'self-end' : ''}`} />

            <div className={`bg-white font-impact uppercase rounded-lg z-[1] shadow-lg shadow-textColor/50 px-5 py-4 flex flex-col ${character.position ? '' : 'items-end'} -mt-20`}>
                <h3 className="font-bold tracking-widest text-lg">{character.name}</h3>
                <span className={`py-0.5 px-2 text-sm rounded-full ${character.role === 'Hero' ? 'bg-green-400' : 'bg-red-400'} text-white w-fit`}>{character.role}</span>
            </div>
        </div>
    )
}

export default CharacterCard