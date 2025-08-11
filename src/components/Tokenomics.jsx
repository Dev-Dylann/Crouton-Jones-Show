// import { motion } from "framer-motion"
import { motion } from "motion/react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.font.family = 'Montserrat';
ChartJS.defaults.color = '#0C2150';
ChartJS.defaults.font.size = 9;

const Tokenomics = () => {
    const data = {
        labels: ['Development Fund', 'Circulating Supply at Launch', 'Staking and Rewards', 'Marketing and Partnerships', 'Team and Advisors', 'CEXS and Market Making', 'Liquidity Management', 'Reserve Fund', 'Content Creation Hub'],
        datasets: [
            {
                label: '% of supply',
                data: [20, 15, 15, 15, 10, 10, 5, 5, 5],
                backgroundColor: [
                    '#EDBF2D',
                    '#FE6565',
                    '#0C2150',
                    '#984E34',
                    '#4CB944',
                    '#3BAFDA',
                    '#E67300',
                    '#A63FA4',
                    '#FF9FB6'
                ],
                hoverBackgroundColor: [
                    '#EDBF2D',
                    '#FE6565',
                    '#0C2150',
                    '#984E34',
                    '#4CB944',
                    '#3BAFDA',
                    '#E67300',
                    '#A63FA4',
                    '#FF9FB6'
                ],
            }
        ]
    }

    const options = {
        plugins: {
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <section className='py-16 px-5 flex flex-col gap-4 md:py-28 md:px-8 md:gap-8 lg:grid lg:grid-cols-2 lg:px-12 xl:px-20'>
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading uppercase z-[2] md:text-[40px] lg:col-span-full"
            >Tokenomics</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-semibold text-center md:text-xl lg:text-left lg:place-content-end"
            >Dive deep into the economic model driving Crouton Jones adventures on the blockchain. Discover how our tokenomics support the journey through exciting narratives and engaging characters.</motion.p>

            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className='flex flex-col items-center font-montserrat px-10 py-4 sm:w-[65%] sm:mx-auto lg:row-span-2 lg:w-full'>
                <Doughnut data={data} options={options} />
            </motion.article>

            <motion.button
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.35 },
                }}
                className='uppercase font-impact tracking-widest text-lg px-6 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit self-center md:text-2xl lg:self-start'
            >Coming Soon!</motion.button>
        </section>
    )
}

export default Tokenomics