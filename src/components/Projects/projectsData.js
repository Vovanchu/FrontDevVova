import englishSchool from "../../images/openGraph/englishSchool.png";
import myBike from "../../images/openGraph/myBike.png";
import welltrack from "../../images/openGraph/welltrack.png";

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
];

export default projectsData;
