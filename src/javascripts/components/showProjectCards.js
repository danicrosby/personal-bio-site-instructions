const showProjects = (projects) => {
  projects.forEach((item) => {
    document.querySelector('#projects-container').innerHTML += `
    <div class="project-card-container">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <div class="card m-3" style="width: 20em;">
            <div class="card-body">
              <img src="${item.image}" class="card-img-top">
              <h4 class="card-title">${item.title}</h4>
              <p class="card-text">${item.description}</p>
              <p class="card-text">${item.techUsed}</p>
              <p class="card-text">${item.dateCompleted}</p>
              <a href="${item.deployedUrl}" class="card-link">URL</a>
              <a href="${item.githubUrl}" class="card-link">GitHubURL</a>
            </div>
          </div>
        </div>
      </div>
      </div>`;
  });
};

export default showProjects;
