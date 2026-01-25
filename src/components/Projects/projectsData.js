import englishSchool from "../../images/openGraph/englishSchool.png";
import myBike from "../../images/openGraph/MYBIKE.png";
import welltrack from "../../images/openGraph/welltrack.png";
import TradeBlade from "../../images/openGraph/TradeBlade.png";

const projectsData = [
  {
    id: 1,
    title: "iziBloom – Онлайн школа англійської мови",
    image: englishSchool,
    description:
      "Сучасна онлайн школа англійської мови з адаптивним дизайном, формою заявки та SEO-оптимізацією. Перший урок безкоштовний!",
    link: "https://www.izibloomschool.com",
    tags: ["HTML", "SCSS", "JavaScript", "Responsive", "SEO"],
  },
  {
    id: 2,
    title: "MYBIKE – Лендинг-магазин велосипедів",
    image: myBike,
    description:
      "Лендинг про велосипеди з акцентом на візуальну привабливість та адаптивний дизайн. Реалізовано на чистому HTML/CSS/JS. Перший практичний проєкт.",
    link: "https://vovanchu.github.io/first-landing/",
    tags: ["HTML", "CSS", "JavaScript", "Landing Page", "GitHub Pages"],
  },
  {
    id: 3,
    title: "Welltrack – Персональний трекер здоров’я",
    image: welltrack,
    description:
      "Сервіс для відстеження здоров’я та персоналізованих рекомендацій: реєстрація, щоденник симптомів, календар подій, нагадування, завантаження медичних документів та інтеграція з послугами медичних центрів.",
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
    title: "TradeBlade",
    image: TradeBlade,
    description:
      "The site offers automatic and semi-automatic copying of professional traders' deals. Users can connect to a team of traders and profit from their deals on the cryptocurrency market (spot and futures) without having extensive trading experience.",
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
];

export default projectsData;
