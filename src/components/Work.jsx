/**
 * @copyright 2025 Vina Namira
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

/**
 * Components
 */

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Hematrik',
      tags: ['API', 'Development', 'Data Management'],
      projectLink: 'https://hematrik.id/'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Alitnest',
      tags: ['API', 'Development'],
      projectLink: 'https://github.com/vinanamira/alitnest-be'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'LMS Cheva',
      tags: ['API', 'Development'],
      projectLink: 'https://github.com/vinanamira/lms-cheva-be'
    }
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