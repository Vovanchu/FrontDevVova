import englishSchool from "../../images/openGraph/englishSchool.png";
import myBike from "../../images/openGraph/MYBIKE.png";

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
    title: "Love Chat Bot – Романтичний веб-бот",
    image: "https://placehold.co/600x400?text=Love+Chat+Bot",
    description:
      "Інтерактивний чат-бот, який відповідає на романтичні повідомлення. Втілено за допомогою React та локального збереження даних.",
    link: "#",
    tags: ["React", "AI", "UX"],
  },
];

export default projectsData;
