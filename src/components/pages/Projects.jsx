import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card';

import Project_1 from '../../assets/images/Project1.jpg';
import Project_2 from '../../assets/images/Project2.png';
import Project_3 from '../../assets/images/Project3.png';
import Pagination from '../Pagination';

const projects = [
  {
    title: 'Project 1',
    src: Project_1,
  },
  {
    title: 'Project 2',
    src: Project_1,
  },
  {
    title: 'Project 3',
    src: Project_1,
  },
  {
    title: 'Project 4',
    src: Project_3,
  },
  {
    title: 'Project 5',
    src: Project_2,
  },
  {
    title: 'Project 6',
    src: Project_1,
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section
      className="h-screen snap-center flex flex-col justify-center items-center gap-9"
      id="projects"
    >
      <h2 className="text-4xl mb-12 text-pink-600 ">My Projects</h2>
      <div className="w-full max-w-full flex justify-around gap-10 mb-6">
        {currentItems.map((project, id) => {
          return (
            <div key={id}>
              <Card title={project.title} src={project.src} />
            </div>
          );
        })}
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalPages={projects.length}
        paginate={paginate}
      />
    </section>
  );
}
