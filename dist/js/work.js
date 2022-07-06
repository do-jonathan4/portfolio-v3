const projects = document.querySelector('.projects')

const projectsArray = [
  {
    img: 'img/projects/ajax-project.jpg',
    title: 'Chuck Norris Facts',
    link: 'https://do-jonathan4.github.io/ajax-project/',
    git: 'https://github.com/do-jonathan4/ajax-project'
  },
  {
    img: 'img/projects/week-planner.jpg',
    title: 'Week Planner',
    link: 'https://do-jonathan4.github.io/week-planner/',
    git: 'https://github.com/do-jonathan4/week-planner'
  },
  {
    img: 'img/projects/chat-app-project.jpg',
    title: 'Group Chat App',
    link: 'https://group-chat-app1.herokuapp.com/',
    git: 'https://github.com/do-jonathan4/chat-app-project',
  },
  {
    img: 'img/projects/memory-match.jpg',
    title: 'Memory Match Game',
    link: 'https://do-jonathan4.github.io/memory-match/',
    git: 'https://github.com/do-jonathan4/memory-match',
  },
  {
    img: 'img/projects/number-guesser.jpg',
    title: 'Number Guesser Game',
    link: 'https://do-jonathan4.github.io/number-guesser/',
    git: 'https://github.com/do-jonathan4/number-guesser',
  },
  {
    img: 'img/projects/meme-gallery.jpg',
    title: 'Meme Gallery',
    link: 'https://do-jonathan4.github.io/meme-gallery/',
    git: 'https://github.com/do-jonathan4/meme-gallery',
  },
  {
    img: 'img/projects/character-count-app.jpg',
    title: 'Character Count App',
    link: 'https://do-jonathan4.github.io/character-count-app/',
    git: 'https://github.com/do-jonathan4/character-count-app',
  }
]

for (let i of projectsArray) {
  const item = document.createElement("div")
  item.classList.add("item")
  item.innerHTML = `
    <a href="${i.link}" target="_blank" class="btn-light">
      <img src="${i.img}" alt="project" srcset="">
    </a>
    <p class="title">${i.title}</p>
    <a href="${i.git}" target="_blank" class="btn-dark">
      <i class="fab fa-github"></i> GitHub
    </a>
  `
  projects.append(item)
}
