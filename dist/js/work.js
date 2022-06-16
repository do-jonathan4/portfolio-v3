const projects = document.querySelector('.projects')

const projectsArray = [
  {
    img: 'img/projects/project1.jpg',
    title: 'Chuck Norris Facts',
    link: 'https://do-jonathan4.github.io/ajax-project/',
    git: 'https://github.com/do-jonathan4/ajax-project'
  },
  {
    img: 'img/projects/project2.jpg',
    title: 'Week Planner',
    link: 'https://do-jonathan4.github.io/week-planner/',
    git: 'https://github.com/do-jonathan4/week-planner'
  },
  {
    img: 'img/projects/project3.jpg',
    title: 'Group Char App',
    link: 'https://group-chat-app1.herokuapp.com/',
    git: 'https://github.com/do-jonathan4/chat-app-project',
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
