import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

import logoHexagon from '@/images/logos/hexagon2.jpeg'
import logoAirBnB from '@/images/logos/airbnb.jpeg'
import logoWeather from '@/images/logos/weather.jpeg'
import logoNetflix from '@/images/logos/netflix.jpeg'
import logoAmazon from '@/images/logos/amazon.jpeg'
import logoPayIntel from '@/images/logos/payIntel.jpeg'
import logoBankApp from '@/images/logos/bankapp.jpeg'
import logoFood from '@/images/logos/food.jpeg'
import logoIkomers from '@/images/logos/ikomers.jpeg'
import logoPerso from '@/images/logos/perso.jpeg'
import logoGPT from '@/images/logos/betterGPT.png'
import logoInpost from '@/images/logos/inpost2.jpg'
import logoFlix from '@/images/logos/flix.jpg'
import logoAIweather from '@/images/logos/aiweather.jpg'
import logoWUImprove from '@/images/logos/wuimprove.jpg'
import logoCarshow from '@/images/logos/carshow.jpg'
import logoPizzaDeliv from '@/images/logos/pizzadeliv.jpg'
import logoCorseTorse from '@/images/logos/corsetorse.jpg'

import trueWU from '@/images/logos/trueWU.png'

const myDev = [
  {
    name: 'My Dev Website',
    description:
      'Come and visit my dev website to see my latest projects and blog posts.',
    link: { href: 'https://www.piotrdev.com/', label: 'www.piotrdev.com' },
    logo: logoPerso,
  },
]

const projects = [
  {
    name: 'Corse Torse',
    description:
      'OpenAI GPT-3.5 powered Training App and calories counter',
    link: {
      href: 'https://mytraining.vabank.me/',
      label: 'mytraining.vabank.me',
    },
    logo: logoCorseTorse,
    tags: '#AI, #GPT-3.5, #NextAuth, #OpenAI',
  },
  {
    name: 'Carshow Rental',
    description:
      'Rental company website training project with RapidAPI and latest Next.js 13 API features, plus TailwindCSS.',
    link: {
      href: 'https://carshow-kappa.vercel.app',
      label: 'carshow-kappa.vercel.app',
    },
    logo: logoCarshow,
    tags: '#eCommerce, #rapidAPI ',
  },
  {
    name: 'WU send money',
    description:
      'Improvements to WU customer journey, price engine and payout methods, with NextJS, TailwindCSS, and Zustand.',
    link: {
      href: 'https://wuimprove.vercel.app',
      label: 'wuimprove.vercel.app',
    },
    logo: logoWUImprove,
    tags: '#banking, #payments, #eCommerce',
  },
  {
    name: 'AI Weather App',
    description:
      'OpenAI GPT-3.5 powered AI Weather narration with NextJS, TailwindCSS, StepZen and Typescript',
    link: {
      href: 'https://aiweather.vabank.me/',
      label: 'aiweather.vabank.me',
    },
    logo: logoAIweather,
    tags: '#AI, #GPT-3.5, #TypeScript, #OpenAI',
  },
  {
    name: 'ChatGPT bot',
    description:
      'OpenAI GPT-3 powered chatbot with NextJS, TailwindCSS, Firebase and NextAuth',
    link: {
      href: 'https://bettergpt.vabank.dev',
      label: 'bettergpt.vabank.dev',
    },
    logo: logoGPT,
    tags: '#AI, #GPT-3, #OpenAI',
  },
  {
    name: 'Pizza Pierre',
    description:
      'Pizza Pierre is a pizza delivery website built with NextJS and TailwindCSS.',
    link: {
      href: 'https://pizzadelivery-five.vercel.app/',
      label: 'pizzadelivery-five.vercel.app',
    },
    logo: logoPizzaDeliv,
    tags: '#eCommerce, #food, #delivery',
  },
  {
    name: 'WU Bank clone',
    description:
      'A clone of the WU Bank Poland website with NextJS, TailwindCSS, Firebase and NextAuth',
    link: {
      href: 'https://truewubankpl.vercel.app/en',
      label: 'truewubankpl.vercel.app/en',
    },
    logo: trueWU,
    tags: '#banking, #eCommerce, #payments',
  },
  {
    name: 'Better AirB&B',
    description:
      'A newer version of AirB&B with NextJS, TailwindCSS, Mapbox and Calendar.',
    link: { href: 'https://arbb.vercel.app/', label: 'arbb.vercel.app' },
    logo: logoAirBnB,
    tags: '#eCommerce, #travel, #booking',
  },
  {
    name: 'payIntel - new social media',
    description:
      'A social media and payments platform built on Firebase with NextJS, TailwindCSS, NextAuth and Recoil.',
    link: {
      href: 'https://pay-intel.vercel.app/',
      label: 'pay-intel.vercel.app',
    },
    logo: logoPayIntel,
    tags: '#payments, #social, #eCommerce',
  },
  {
    name: 'Banking App landing page',
    description:
      'Inspiration from JSMastery to boost React/Next learnings and TailwindCSS.',
    link: {
      href: 'https://bankapp-seven.vercel.app/',
      label: 'bankapp-seven.vercel.app',
    },
    logo: logoBankApp,
    tags: '#banking, #payments, #eCommerce',
  },
  {
    name: 'Hexagon Layer with NextJS',
    description:
      'Plotting road accidents in the UK with DeckGL, Next13 and TailwindCSS.',
    link: {
      href: 'https://hexagonlayer-next.vercel.app/',
      label: 'hexagonlayer-next.vercel.app',
    },
    logo: logoHexagon,
    tags: '#maps, #data, #visualization',
  },
  {
    name: 'eCommerce on Sanity',
    description: 'eCommerce website built with Sanity and NextJS.',
    link: {
      href: 'https://nextcommerce-one-mu.vercel.app/',
      label: 'nextcommerce-one-mu.vercel.app',
    },
    logo: logoIkomers,
    tags: '#eCommerce, #shop, #cms',
  },
  {
    name: 'Parcel machine finder',
    description:
      'inPost parcel machine finder built with NextJS, TailwindCSS, Mapbox and DeckGL.',
    link: {
      href: 'https://inpostfinder.vabank.dev/map',
      label: 'inpostfinder.vabank.dev/map',
    },
    logo: logoInpost,
    tags: '#maps, #data, #visualization',
  },
  {
    name: 'Food & Cuisine Blog',
    description: 'API and search features with NextJS and TailwindCSS.',
    link: {
      href: 'https://fudtruck.vercel.app/',
      label: 'fudtruck.vercel.app',
    },
    logo: logoFood,
    tags: '#blog, #food, #recipes',
  },
  {
    name: 'Amazon Clone',
    description:
      'eCommerce project with NextJS, NextAuth, Firestore and TailwindCSS.',
    link: {
      href: 'https://amazon4-two.vercel.app/',
      label: 'amazon4-two.vercel.app',
    },
    logo: logoAmazon,
    tags: '#eCommerce, #shop, #payments',
  },
  {
    name: 'Netflix Clone',
    description: 'Netflix clone with NextJS, TailwindCSS, and Firebase.',
    link: {
      href: 'https://newnetflix-5355c.web.app/',
      label: 'newnetflix-5355c.web.app',
    },
    logo: logoNetflix,
    tags: '#streaming, #social, #eCommerce',
  },
  {
    name: 'Movie Review App',
    description: 'Vanilla JS, TailwindCSS and TMDB API.',
    link: {
      href: 'https://flix-project-phi.vercel.app/',
      label: 'flix-project-phi.vercel.app',
    },
    logo: logoFlix,
    tags: '#streaming, #social, #eCommerce',
  },
  {
    name: 'Weather App',
    description: 'Openweather API with NextJS and TailwindCSS.',
    link: {
      href: 'https://nextweather-plum.vercel.app/',
      label: 'nextweather-plum.vercel.app',
    },
    logo: logoWeather,
    tags: '#weather, #maps, #data',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Piotr Maciejewski</title>
        <meta
          name="description"
          content="ReactJS, Javascript, Mapbox, DeckGL, Pandas, Numpy, SciPy, cross-functional, Strategy, Management"
        />
      </Head>
      <SimpleLayout
        title="Welcome to my programming passion."
        intro="Since I was 8, I have been passionate about programming and computer science. It all began with Amstrad CPC 6128 and a very simple BASIC code. Later, I discovered the power of Javascript and Python which I extensively mastered and applied at day to day work. 
        
        I used to leverage my programming skills in my job as Head of Sales & Integrations at Western Union as well as all my previous assignments. I mainly work with financial data, APIs, and web dev technologies. I am interested in data visualization and I am constantly looking for new ways to improve my skills in this area.
        One of my key objectives is to perfectly link my business, finance and data science acumen with web technologies.
        "
      >
        <h1 className="mt-6 mb-8 text-4xl font-bold text-white">
          Few selected Web Dev training projects
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div>
                <h2 className="mt-6 mb-2 text-base font-semibold text-teal-800 dark:text-teal-400">
                  <Card.Link href={project.link.href}>{project.tags}</Card.Link>
                </h2>
              </div>
              <div className="h-42 w-58 relative z-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank" noopener noreferrer>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <hr className="mt-6 mb-6 h-2 text-zinc-500" />

        <h2 className="mt-8 mb-6 text-3xl font-bold text-slate-400">
          For more details visit my dev website - www.piotrdev.com
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {myDev.map((project) => (
            <Card as="li" key={project.name}>
              <div className="h-42 w-58 relative z-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
