const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(
  ".grid-container .grid-container__box"
);
const grid = document.querySelectorAll(".grid-container .grid-container__box");

let repositories = [];
let repoSM = [];
let repoLG = [];

console.log(`
////////////////////////////////////////////////
//                                            //
//   QUEM CEDO MADRUGA PASSA O DIA COM SONO   //
//                                            //
////////////////////////////////////////////////

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$_____$$$$
$$$$_____$$$$$$$$$$$$$$$_____$$$$
$$$$_____$$$$$$$$$$$$$$$_____$$$$
$$$$_____$$____$$$____$$_____$$$$
$$$$_____$______$______$_____$$$$
$$$$_____$______$______$_____$$$$
$$$$_____$____$$$$$$$$$$$$$$$$$$$
$$$$_____$___$$___________$$$$$$$
$$$$_____$__$$_______________$$$$
$$$$__________$$_____________$$$$
$$$$___________$$___________$$$$$
$$$$_____________$_________$$$$$$
$$$$$_____________________$$$$$$$
$$$$$$___________________$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

------------------------------------------------
------------------- LTV 2022 -------------------
------------------------------------------------`);

function getGithubData() {
  fetch(`https://api.github.com/users/freddcf/repos`)
    .then((response) => response.json())
    .then((repo) => {
      repo.map((repo) => {
        if (repo.topics.includes("portfolio-sm")) {
          let repoItem = {
            name: repo.name
              .replaceAll("-", " ")
              .toLowerCase()
              .replace(/\b(\w)/g, (str) => str.toUpperCase()),
            desc: repo.description,
            demo: repo.homepage ? repo.homepage : null,
            url: repo.html_url,
            topics: repo.topics.filter((e) => !e.includes("up")),
            image: `https://github.com/freddcf/${repo.name}/blob/main/.github/sr-img.png?raw=true`,
          };
          repoSM.push(repoItem);
        }

        if (repo.topics.includes("portfolio-lg")) {
          let repoItem = {
            name: repo.name
              .replaceAll("-", " ")
              .toLowerCase()
              .replace(/\b(\w)/g, (str) => str.toUpperCase()),
            desc: repo.description,
            demo: repo.homepage ? repo.homepage : null,
            url: repo.html_url,
            topics: repo.topics.filter((e) => !e.includes("up")),
            image: `https://github.com/freddcf/${repo.name}/blob/main/.github/sr-img.png?raw=true`,
          };
          repoLG.push(repoItem);
        }
      });
      repositories.push(...repoSM);
      repositories.push(...repoLG);

      changePos(repositories, 2, 0);

      // Print initial project apresentation
      grid.forEach((element, index) => {
        if (index < 6) {
          element.innerHTML = `<h3 class="project-title" >${repositories[index].name}</h3>`;
          element.style.backgroundImage = `url(${repositories[index].image})`;
        }
        fakeLoad();

        element.addEventListener("click", () =>
          loadModalInfo(repositories[index])
        );
      });
    });
}

// utilities func

function changePos(arr, from, to) {
  arr.splice(to, 0, ...arr.splice(from, 1))[0];
  return arr;
}

/////////////////

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  fakeLoad();
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModal.length - 1; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeModal();
});

function fakeLoad() {
  modal.innerHTML =
    "<img class='loader' style='width:50px;' src='img/loading.gif' alt='tools'>";
}

function loadModalInfo(repository) {
  setTimeout(() => {
    modal.innerHTML = `
  <div class="project-image" style='background-image: url(${repository.image})'>
    <a href="${repository.url}" target="_blank" rel="noopener noreferrer">
      <span class="github-project-link">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C17.1375 18.1625 20 14.4125 20 10C20 4.475 15.525 0 10 0Z"
            fill="#000" />
        </svg>
        Github
      </span>
    </a>
  </div>
  <div class="project-info">
    <div class="text-wrapper">
      <h1 class="project-name">${repository.name}</h1>
      <p class="project-description">
      ${repository.desc}
      <a class="github-project-link" href="${
        repository.url
      }" target="_blank" rel="noopener noreferrer">
        Github repo.
      </a>
      </p>
      <div class="tags">
      ${repository.topics
        .map((topic) => `<span class="p-tag">${topic}</span>`)
        .join("")}
      </div>
    </div>
    <a class="${repository.demo ?? "disabled-deploy"}" href="${
      repository.demo
    }" target="_blank" rel="noopener noreferrer">
      <button class="view-deploy">
        <div class="isAvaliable" style="background:${
          repository.demo ? "#7ed56f" : "#ff2b49"
        }"></div>
        Check online demo
      </button>
    </a>
  </div>
  `;
  }, 400);
}

getGithubData();
