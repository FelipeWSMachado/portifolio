function generateProjectCard(project) {
  return `
  <div class="card">
    <h3>${project.title}</h3>
    <div class="img-wrapper">
      <img src="${project.imageSrc}" alt="${project.imageAlt}" />
      <div class="buttons">
        <a href="${project.githubLink}" target="_blank" title="Repositório no Github">${githubSVG}</a>
        <a href="${project.projectLink}" target="_blank" title="Ver Projeto">${projectSVG}</a>
      </div>
    </div>
    <p>${project.description}</p>
  </div>
  `;
}

const githubSVG = `
<?xml version="1.0" ?><svg fill="#000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="black" fill-rule="evenodd"/></svg>
`;

const projectSVG = `
<?xml version="1.0" ?><svg fill="#000" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M43.7578,61.7578a5.9994,5.9994,0,1,0,8.4844,8.4844l18-18a5.9979,5.9979,0,0,0,0-8.4844l-18-18a5.9994,5.9994,0,0,0-8.4844,8.4844L51.5156,42H6A6,6,0,0,0,6,54H51.5156Z"/><path d="M90,0H30a5.9966,5.9966,0,0,0-6,6V18a6,6,0,0,0,12,0V12H84V84H36V78a6,6,0,0,0-12,0V90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,90,0Z"/></g></svg>
`;

const projectsData = [
  {
    title: "Twitter Dark Mode",
    imageSrc: "./assets/images/projects/twitter.gif",
    imageAlt: "GIF do projeto twitter dark mode.",
    githubLink: "https://github.com/FelipeWSMachado/CloneTwitterDark",
    projectLink: "https://felipewsmachado.github.io/CloneTwitterDark/",
    description: "Clone (partial) do twitter modo dark.",
  },
  {
    title: "Pomodoro Clock",
    imageSrc: "./assets/images/projects/pomodoro.png",
    imageAlt: "Imagem do projeto pomodoro clock.",
    githubLink: "https://github.com/FelipeWSMachado/pomodoro-clock",
    projectLink: "https://happy-bohr-4d01a4.netlify.app/",
    description: "Um relogio pomodoro.",
  },
  {
    title: "Proffy Dark Mode",
    imageSrc: "./assets/images/projects/proffy.png",
    imageAlt: "Imagem do projeto Proffy em dark mode.",
    githubLink: "https://github.com/FelipeWSMachado/ProffyDarkMode",
    projectLink: "#",
    description: "Um app para cadastro de alunos e aulas.",
  },
];

function projetos(section) {
  const projectCards = projectsData
    .map((project) => generateProjectCard(project))
    .join("");

  section.innerHTML = `
    <header>
      <h2>Projetos</h2>
    </header>
    <div class="content">
      <div class="cards">
        ${projectCards}
      </div>
    </div>
  `;
}

export { projetos };
