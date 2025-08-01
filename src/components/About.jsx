/**
 * @copyright 2025 Vina Namira
 * @license Apache-2.0
 */

import Logo from "../images/logo.svg";

const aboutItems = [
    {
        label: 'Project done',
        number: 5
    },
    {
        label: 'Years of experience',
        number: 2
    }
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Vina, a professional backend developer with a knack for building robust, scalable, and high-performance systems. 
                        Combining technical expertise and problem-solving skills, I design and optimize server-side applications that ensure seamless functionality, security, 
                        and efficiency.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl ">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img src={Logo} alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About