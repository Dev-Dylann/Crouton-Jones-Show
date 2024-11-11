import { motion } from "framer-motion"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.font.family = 'Montserrat';
ChartJS.defaults.color = '#0C2150';

const Tokenomics = () => {
    const data = {
        labels: ['Liquidity Pool', 'Community Rewards', 'Burn Wallet', 'Team Wallet'],
        datasets: [
            {
                label: 'Crouton Jones Tokenomics',
                data: [0, 100, 0, 0],
                backgroundColor: ['#EDBF2D', '#fe6565', '#0C2150', '#984E34'],
                hoverBackgroundColor: ['#EDBF2D', '#fe6565', '#0C2150', '#984E34'],
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <section className='py-16 px-5 flex flex-col gap-4 md:py-28 md:px-8 md:gap-8'>
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-impact font-bold text-primaryBtn text-2xl text-center tracking-widest heading uppercase z-[2] md:text-5xl"
            >Tokenomics</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className="font-semibold text-center md:text-xl"
            >Dive deep into the economic model driving Crouton Jones adventures on the blockchain. Discover how our tokenomics support the journey through exciting narratives and engaging characters.</motion.p>

            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className='flex flex-col items-center font-montserrat px-10 py-4 md:py-8'>
                <Doughnut data={data} options={options} />
            </motion.article>

            <motion.button
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                viewport={{ once: true }}
                className='uppercase font-impact tracking-widest text-lg px-6 py-3 bg-primaryBtn rounded-lg shadow-lg shadow-textColor/50 font-bold w-fit self-center md:text-2xl'
            >Coming Soon!</motion.button>
        </section>
    )
}

export default Tokenomics