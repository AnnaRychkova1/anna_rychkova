'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { FaPeopleGroup } from 'react-icons/fa6';
import { AiOutlineGlobal } from 'react-icons/ai';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projects from '../data/projects.json';

export default function ProjectsList() {
  return (
    <ul className="flex flex-col gap-4">
      {projects.map(project => (
        <li
          key={project.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between shadow-md shadow-fuchsia-900/5 mt-6 rounded-2xl"
        >
          <div className="w-full p-4">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={12}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
            >
              {project.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full aspect-[1356/858]">
                    <Image
                      src={img}
                      alt={`Project image ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col gap-4 p-4 pt-0 text-base lg:text-xl">
            <div className="flex justify-end mr-4 items-center">
              <h3 className=" w-full text-3xl md:text-4xl font-bold text-center text-[var(--dark-accent)]">
                {project.name}
              </h3>
              <div className="relative flex items-center gap-2 group">
                {project.type === 'individual' ? (
                  <FaPerson className="text-[var(--dark-accent)]" size={22} />
                ) : (
                  <FaPeopleGroup
                    className="text-[var(--dark-accent)]"
                    size={22}
                  />
                )}

                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 hidden w-max rounded bg-[rgba(253,216,229,0.9)] px-2 py-1 text-sm text-[var(--dark-accent)] font-medium shadow-lg group-hover:block whitespace-nowrap">
                  {project.type === 'individual'
                    ? 'Solo project'
                    : 'Team project'}
                </span>
              </div>
            </div>

            <div>
              <p>{project.overview}</p>
              <p>
                <span className="font-bold">My Contribution:</span>{' '}
                {project.contribution}
              </p>
              <div className="flex justify-between items-center gap-2">
                <p className="capitalize">
                  <span className="font-bold">Role:</span> {project.role}
                </p>
                <ul className="flex gap-4 md:justify-start items-center">
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub
                        size={24}
                        className="transition-all duration-300 ease-in-out fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:fill-[var(--light-accent)] hover:stroke-[var(--light-accent)]"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                    >
                      <AiOutlineGlobal
                        size={26}
                        className="transition-all duration-300 ease-in-out fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:fill-[var(--light-accent)] hover:stroke-[var(--light-accent)]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="bg-[rgba(253,216,229,0.9)] rounded-md px-2 py-1 shadow-md shadow-fuchsia-900/5"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
