import logo from "../assets/images/logo.webp"
import discord from "../assets/images/icons/discord.png"
import telegram from "../assets/images/icons/telegram.png"
import twitter from "../assets/images/icons/twitter.png"
import youtube from "../assets/images/icons/youtube.png"
import instagram from "../assets/images/icons/instagram.png"
import tiktok from "../assets/images/icons/tiktok.png"

const Footer = () => {
    return (
        <section className="py-16 px-5 flex flex-col items-center gap-10">
            <img src={logo} alt="Crouton Jones Logo" className="w-[80%]" />

            <nav className="flex flex-col gap-4 font-impact tracking-wider text-lg text-center uppercase">
                <ul className="flex flex-col gap-1">
                    <li>Roadmap</li>
                    <li>Characters</li>
                    <li>Memes</li>
                </ul>

                <ul className="flex flex-col gap-1">
                    <li>Comic</li>
                    <li>Merch</li>
                    <li>About Us</li>
                </ul>

                <ul className="flex flex-col gap-1">
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </nav>

            <hr className="border-textColor w-full" />

            <article className=" flex flex-col gap-2">
                <p className="uppercase font-impact text-lg text-center tracking-widest font-bold">Follow Our Social Media</p>

                <div className="flex items-center justify-center flex-wrap gap-2">
                    <button className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={discord} alt="Discord" className="w-8 h-8" />
                    </button>
                    <button className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={telegram} alt="Telegram" className="w-8 h-8" />
                    </button>
                    <button className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={twitter} alt="Twitter/X" className="w-8 h-8" />
                    </button>
                    <button className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={youtube} alt="Youtube" className="w-8 h-8" />
                    </button>
                    <button className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={instagram} alt="Instagram" className="w-8 h-8" />
                    </button>
                    <button className="rounded-lg shadow-lg shadow-textColor/50 border border-textColor p-2">
                        <img src={tiktok} alt="Tiktok" className="w-8 h-8" />
                    </button>
                </div>
            </article>

            <hr className="border-textColor w-full" />

            <p className="italic font-impact">
                &copy; {new Date().getFullYear()} Crouton Jones. All rights reserved.
            </p>
        </section>
    )
}

export default Footer