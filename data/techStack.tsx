import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDatabase,
  FaAws,
  FaPython,
  FaLock,
  FaNetworkWired,
} from 'react-icons/fa';
import {
  SiCloudinary,
  SiEslint,
  SiFirebase,
  SiGitlab,
  SiGnubash,
  SiJest,
  SiMysql,
  SiPostman,
  SiPrettier,
  SiPrisma,
  SiReactrouter,
  SiSendgrid,
  SiSupabase,
  SiSwagger,
  SiTestinglibrary,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import { SiJquery, SiMaildotru } from 'react-icons/si';
import { FaNode } from 'react-icons/fa6';

import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiRedux,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { PiFigmaLogoDuotone } from 'react-icons/pi';
import { BsGit } from 'react-icons/bs';

export const backgroundIcons = [
  { icon: <FaDocker className="text-[var(--light-accent)]" /> },
  { icon: <FaHtml5 className="text-[var(--dark-accent)]" /> },
  { icon: <FaCss3Alt className="text-[var(--light-accent)]" /> },
  { icon: <FaGithub className="text-[var(--dark-accent)]" /> },
  { icon: <FaDatabase className="text-[var(--light-accent)]" /> },
  { icon: <FaAws className="text-[var(--dark-accent)]" /> },
  { icon: <FaPython className="text-[var(--light-accent)]" /> },
  { icon: <FaJava className="text-[var(--dark-accent)]" /> },
  { icon: <IoLogoJavascript className="text-[var(--light-accent)]" /> },
  { icon: <SiTypescript className="text-[var(--dark-accent)]" /> },
  { icon: <RiReactjsLine className="text-[var(--light-accent)]" /> },
  { icon: <SiRedux className="text-[var(--dark-accent)]" /> },
  { icon: <SiReactrouter className="text-[var(--light-accent)]" /> },
  { icon: <TbBrandNextjs className="text-[var(--dark-accent)]" /> },
  { icon: <FaNode className="text-[var(--light-accent)]" /> },
  { icon: <SiExpress className="text-[var(--dark-accent)]" /> },
  { icon: <SiTailwindcss className="text-[var(--light-accent)]" /> },
  { icon: <FaBootstrap className="text-[var(--dark-accent)]" /> },
  { icon: <SiJquery className="text-[var(--light-accent)]" /> },
  { icon: <SiMongodb className="text-[var(--dark-accent)]" /> },
  { icon: <SiFirebase className="text-[var(--light-accent)]" /> },
  { icon: <SiSupabase className="text-[var(--dark-accent)]" /> },
  { icon: <SiPrisma className="text-[var(--light-accent)]" /> },
  { icon: <SiMysql className="text-[var(--dark-accent)]" /> },
  { icon: <BsGit className="text-[var(--light-accent)]" /> },
  { icon: <SiGnubash className="text-[var(--dark-accent)]" /> },
  { icon: <PiFigmaLogoDuotone className="text-[var(--light-accent)]" /> },
  { icon: <SiPostman className="text-[var(--dark-accent)]" /> },
  { icon: <SiSwagger className="text-[var(--light-accent)]" /> },
  { icon: <SiJest className="text-[var(--dark-accent)]" /> },
  { icon: <SiTestinglibrary className="text-[var(--light-accent)]" /> },
  { icon: <SiPrettier className="text-[var(--dark-accent)]" /> },
  { icon: <SiEslint className="text-[var(--light-accent)]" /> },
  { icon: <SiCloudinary className="text-[var(--dark-accent)]" /> },
  { icon: <SiMaildotru className="text-[var(--light-accent)]" /> },
  { icon: <SiSendgrid className="text-[var(--dark-accent)]" /> },
];

export const techStack = [
  {
    name: 'Node.js',
    icon: <FaNode className="text-green-600 text-3xl" />,
    category: 'backend',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-black text-3xl" />,
    category: 'backend',
  },
  {
    name: 'REST APIs',
    icon: <SiSwagger className="text-green-500 text-3xl" />,
    category: 'backend',
  },
  {
    name: 'JWT',
    icon: <FaLock className="text-yellow-500 text-3xl" />,
    category: 'backend',
  },
  {
    name: 'gRPC',
    icon: <FaNetworkWired className="text-blue-500 text-3xl" />,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-600 text-3xl" />,
    category: 'backend',
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-blue-700 text-3xl" />,
    category: 'backend',
  },
  {
    name: 'Supabase',
    icon: <SiSupabase className="text-green-500 text-3xl" />,
    category: 'backend',
  },

  {
    name: 'React',
    icon: <RiReactjsLine className="text-cyan-400 text-3xl" />,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs className="text-black text-3xl" />,
    category: 'frontend',
  },
  {
    name: 'Redux',
    icon: <SiRedux className="text-purple-600 text-3xl" />,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
    category: 'frontend',
  },

  {
    name: 'JavaScript',
    icon: <IoLogoJavascript className="text-yellow-400 text-3xl" />,
    category: 'language',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-blue-600 text-3xl" />,
    category: 'language',
  },
  {
    name: 'Java',
    icon: <FaJava className="text-3xl text-red-600 lg:text-3xl" />,
    category: 'language',
  },
  {
    name: 'SQL',
    icon: <FaDatabase className="text-blue-500 text-3xl" />,
    category: 'language',
  },

  {
    name: 'Git',
    icon: <BsGit className="text-orange-600 text-3xl" />,
    category: 'tool',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-black text-3xl" />,
    category: 'tool',
  },
  {
    name: 'Docker (basic)',
    icon: <FaDocker className="text-blue-500 text-3xl" />,
    category: 'tool',
  },
  {
    name: 'Postman',
    icon: <SiPostman className="text-orange-500 text-3xl" />,
    category: 'tool',
  },
  {
    name: 'Swagger',
    icon: <SiSwagger className="text-green-500 text-3xl" />,
    category: 'tool',
  },
  {
    name: 'CI/CD (basic)',
    icon: <SiGitlab className="text-orange-700 text-3xl" />,
    category: 'tool',
  },
];
