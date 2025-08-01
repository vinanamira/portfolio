/**
 * @copyright 2025 Vina Namira
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";
import Hematrik from "../images/project-1.png";
import Alitnest from "../images/project-2.png";
import Cheva from "../images/project-3.png";
import KawalTani from "../images/project-4.png";

/**
 * Components
 */

const works = [
   {
      imgSrc: KawalTani,
      title: 'KawalTani',
      tags: ['Laravel', 'MySQL', 'OpenAI'],
      projectLink: 'https://github.com/vinanamira/kawaltani-chatbot-be'
    },
    {
      imgSrc: Hematrik,
      title: 'Hematrik',
      tags: ['Express.Js', 'MySQL', 'MQTT', 'Cron-Job'],
      projectLink: 'https://github.com/vinanamira/hematrik-be'
    },
    {
      imgSrc: Alitnest,
      title: 'Alitnest',
      tags: ['Express.Js', 'MongoDB', 'OpenAI'],
      projectLink: 'https://github.com/vinanamira/alitnest-be'
    },
    {
      imgSrc: Cheva,
      title: 'LMS Cheva',
      tags: ['Laravel', 'MySQL'],
      projectLink: 'https://github.com/vinanamira/lms-cheva-be'
    },
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, 
                key) =>(
                    <ProjectCard 
                      key={key}
                      imgSrc={imgSrc}
                      title={title}
                      tags={tags}
                      projectLink={projectLink}
                      classes="reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work