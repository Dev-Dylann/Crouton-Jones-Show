import { CircleStackIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

const MerchCard = ({ merch }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white overflow-hidden rounded-lg shadow-lg shadow-textColor/50">
            <img src={merch.image} alt={merch.name} className="rounded-lg" />

            <div className="px-5 py-2 flex flex-col gap-1">
                <p className="font-bold">{merch.name}</p>

                <div className="flex gap-8 py-0.5">
                    <p className='flex text-sm items-center gap-1'>
                        <CurrencyDollarIcon className="h-5 w-5" />
                        USD
                        <span className="font-bold">{(merch.price.usd / 100).toFixed(2)}</span>
                    </p>

                    <p className='flex text-sm items-center gap-1'>
                        <CircleStackIcon className="h-5 w-5" />
                        CJT
                        <span className="font-bold">{merch.price.cjt}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default MerchCard