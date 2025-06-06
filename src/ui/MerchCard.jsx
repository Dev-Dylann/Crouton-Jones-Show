import { CircleStackIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
// import { motion } from "framer-motion"
import { motion } from "motion/react"

const MerchCard = ({ merch }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.35 },
            }}
            className="flex flex-col bg-white overflow-hidden rounded-lg shadow-lg shadow-textColor/50 md:h-fit group">
            <img src={merch.image} alt={merch.name} className="rounded-lg" />

            <div className="px-5 py-2 flex flex-col gap-1 md:py-5 md:gap-3">
                <p className="font-bold md:text-xl group-hover:text-primaryBtn transition-all">{merch.name}</p>

                <div className="flex gap-8 py-0.5">
                    <p className='flex text-sm items-center gap-1 md:text-base md:gap-2'>
                        <CurrencyDollarIcon className="h-5 w-5 md:h-8 md:w-8" />
                        USD
                        <span className="font-bold">{(merch.price.usd / 100).toFixed(2)}</span>
                    </p>

                    <p className='flex text-sm items-center gap-1 md:text-base md:gap-2'>
                        <CircleStackIcon className="h-5 w-5 md:h-8 md:w-8" />
                        CJT
                        <span className="font-bold">{merch.price.cjt || "N/A"}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default MerchCard