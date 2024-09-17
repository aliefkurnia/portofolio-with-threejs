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
  hargaemas,
  carisurah,
  cariin,
  bookingin,
  bookshelf,
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

const projects = [
  {
    name: "Kalkulator Harga Emas",
    description:
      "provides real-time updates on the latest gold prices, reflecting changes in both USD and IDR. Additionally, it features a calculator to easily determine the price of gold per gram, offering a convenient tool for anyone interested in staying informed about gold market trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: hargaemas,
    source_code_link: "https://github.com/aliefkurnia/harga-emas",
    website_link: "https://harga-emas.vercel.app/",
  },
  {
    name: "Cari Surah",
    description:
      "This Website have a feature to search for specific Surahs in the Quran, along with a play feature that allows users to listen to the recitation of each Surah. This tool is designed to make it easier for users to explore and engage with the Quranic text.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: carisurah,
    source_code_link: "https://github.com/aliefkurnia/cari-surah",
    website_link: "https://cari-surah.vercel.app/",
  },
  {
    name: "Cariin",
    description:
      "A web application for searching movies, providing detailed descriptions and ratings for each title.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: cariin,
    source_code_link: "https://github.com/aliefkurnia/Cariin-Film-Finder",
    website_link: "https://cariin-film.vercel.app/",
  },
  {
    name: "Bookingin",
    description:
      "A web application for searching hotels, providing detailed descriptions and ratings for each property.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "dom",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookingin,
    source_code_link:
      "https://github.com/aliefkurnia/submission-tugas-akhir-membuat-website",
    website_link: "https://bookingin.vercel.app/",
  },
  {
    name: "Bookshelf App",
    description:
      "A web application for managing your book collection, with features for adding, editing, searching, and categorizing books. Supports local storage for data persistence.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "local storage",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookshelf,
    source_code_link:
      "https://github.com/aliefkurnia/submission-membangun-bookshelf-app",
    website_link: "https://bookshelfalief.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
