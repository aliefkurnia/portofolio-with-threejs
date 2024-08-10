import {
  dotnet,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  adobeilustrator,
  csharp,
  vb,
  blazor,
  sqlserver,
  bifarma,
  digitalent,
  codeid,
  realta,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: ".Net Developer",
    icon: dotnet,
  },
  {
    title: "Javascript Developer",
    icon: javascript,
  },

  {
    title: "Graphic Designer",
    icon: adobeilustrator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "VB",
    icon: vb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Blazor",
    icon: blazor,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "PT.Bifarma Adiluhung (Kalbe)",
    icon: bifarma,
    iconBg: "#ffffff",
    date: "Aug 2021 - Jan 2022",
    points: [
      "Poster, banner, flyer design for social media.",
      "Edit video for product branding.",
      "Responsible for making the genme.id website in terms of design and UI/UX.",
    ],
  },
  {
    title: "Student of Fresh Graduate Academy - Machine Learning Developer",
    company_name: "Digital Talent Scholarship",
    icon: digitalent,
    iconBg: "#ffffff",
    date: "Oct 2022 - Dec 2022",
    points: [
      "I have developed skills in programming and machine learning, including Python application development, image classification with CNNs, and NLP models with TensorFlow. I excel at understanding problems and designing solutions using machine learning and deep learning to achieve effective results.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Code Academy",
    icon: codeid,
    iconBg: "#ffffff",
    date: "Nov 2022 - Apr 2023",
    points: [
      "Developing and maintaining the master module of the Hotel Realta project, ensuring seamless integration and coordination between various sub-modules.",
      "Collaborating with cross-functional teams including backend developers, designers, and project managers to deliver a cohesive and efficient solution.",
      "Implementing backend functionality using C# and SQL Server, focusing on data integrity and performance optimization.",
      "Creating responsive and interactive front-end interfaces with Blazor, enhancing user experience across different devices.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "PT.Realta Chakradharma",
    icon: realta,
    iconBg: "#ffffff",
    date: "May 2023 - Present",
    points: [
      "Developing and enhancing enterprise-level software solutions using C#, .NET Core, and SQL Server, catering to a wide range of industries across Southeast Asia and Japan.",
      "Building and maintaining responsive front-end applications with Blazor and WebAssembly (WASM), ensuring high performance and user-friendly interfaces.",
      "Utilizing Docker and Kubernetes for containerization and orchestration, streamlining the deployment and management of scalable applications.",
      "Collaborating with cross-functional teams to integrate the latest technology trends, ensuring that solutions remain cutting-edge and aligned with industry best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
