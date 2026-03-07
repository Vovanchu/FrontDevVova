import englishSchool from "../../images/openGraph/englishSchool.png";
import myBike from "../../images/openGraph/MYBIKE.png";
import welltrack from "../../images/openGraph/welltrack.png";
import TradeBlade from "../../images/openGraph/TradeBlade.png";
import PhoneCatalog from "../../images/openGraph/PhoneCatalog.png";

const projectsData = [
  {
    id: 1,
    title: "iziBloom – Online English School",
    image: englishSchool,
    description:
      "A modern online English school with responsive design, application form, and SEO optimization. The first lesson is free.",
    link: "https://www.izibloomschool.com",
    tags: ["HTML", "SCSS", "JavaScript", "Responsive", "SEO"],
  },
  {
    id: 2,
    title: "MYBIKE – Bicycle Store Landing Page",
    image: myBike,
    description:
      "A bicycle landing page focused on visual appeal and responsive design. Built using pure HTML, CSS, and JavaScript. First practical project.",
    link: "https://vovanchu.github.io/first-landing/",
    tags: ["HTML", "CSS", "JavaScript", "Landing Page", "GitHub Pages"],
  },
  {
    id: 3,
    title: "Welltrack – Personal Health Tracker",
    image: welltrack,
    description:
      "A service for tracking health and personalized recommendations: registration, symptom diary, event calendar, reminders, medical document uploads, and integration with medical center services.",
    link: "https://vovanchu.github.io/Welltrack",
    tags: [
      "React",
      "JavaScript",
      "CSS",
      "User Authentication",
      "Health Tracker",
      "Responsive",
    ],
  },
  {
    id: 4,
    title: "TradeBlade – Crypto Trading Copy Platform",
    image: TradeBlade,
    description:
      "A platform offering automatic and semi-automatic copying of professional traders' deals. Users can connect to trader teams and profit from cryptocurrency markets (spot and futures) without extensive trading experience.",
    link: "https://vovanchu.github.io/testTask/#faq",
    tags: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive",
      "Landing Page",
      "GitHub Pages",
      "Figma",
    ],
  },
  {
    id: 5,
    title: "React Phone Catalog – E-commerce Product Catalog",
    image: PhoneCatalog,
    description:
      "A responsive e-commerce catalog for phones, tablets, and accessories. Users can browse products by categories, view detailed product pages with image galleries, add items to favorites, and manage a shopping cart. The project includes product carousels, category navigation, and a clean UI focused on product exploration.",
    link: "https://vovanchu.github.io/react_phone-catalog/#/",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "Axios",
      "REST API",
      "SCSS",
      "Responsive Design",
      "Skeleton Loading",
      "UI Components",
      "E-commerce",
      "GitHub Pages",
    ],
  },
];

export default projectsData;
