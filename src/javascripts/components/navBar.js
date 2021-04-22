const navBar = () => {
  document.querySelector('#nav-container').innerHTML = `
  <div id="nav-container">
    <ul class="nav nav-tabs justify-content-lg-end" id="myTab" role="tablist">
      <li class="nav-item"><a class="nav-link active" href="#about-container">About</a></li>
      <li class="nav-item"><a class="nav-link" href="#projects-container">Projects</a></li>
      <li class="nav-item"><a class="nav-link" href="#tech-container">Technologies</a></li>
    </ul>
  </div>`;
};

export default navBar;
