/**
 * @copyright 2025 Vina Namira
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";
// import Php from "../images/php.svg";
import Laravel from "../images/laravel.svg";
// import JavaScript from "../images/javascript.svg";
import NodeJs from "../images/nodejs.svg";
import ExpressJs from "../images/expressjs.svg";
import MongoDB from "../images/mongodb.svg";
import MySQL from "../images/mysql.svg";
import Mqtt from "../images/mqtt.svg";
import OpenAI from "../images/openai.svg";
import Docker from "../images/docker.svg";

const skillItem = [
    {
        imgSrc: Laravel,
        label: 'Laravel',
        desc: 'PHP Framework'
    },
    {
        imgSrc: NodeJs,
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: ExpressJs,
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: MongoDB,
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: MySQL,
        label: 'MySQL',
        desc: 'Database'
    },
    {
        imgSrc: Mqtt,
        label: 'MQTT Explorer',
        desc: 'Data Inspector'
    },
    {
        imgSrc: OpenAI,
        label: 'Open AI',
        desc: 'AI API'
    },
    {
        imgSrc: Docker,
        label: 'Docker',
        desc: 'Containerization'
    }
];

const Skill = () => {
    return (
        <section id="tools" className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => 
                        (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skill