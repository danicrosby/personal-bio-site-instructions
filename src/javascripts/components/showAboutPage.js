import profile from '../../styles/assets/profile.jpg';
import about1 from '../../styles/assets/about1.png';
import github from '../../styles/assets/github.png';
import linkedIn from '../../styles/assets/linkedIn.png';
import medium from '../../styles/assets/medium.png';
import dog from '../../styles/assets/dog.png';

const aboutPage = () => {
  document.querySelector('#about-container').innerHTML = `
  <div class="container" id="left-container">
   <img src="${profile}" id="profile-image">
  </div>

  <div class="container" id="right-container">
    <section class="top-section" id="top-section">

      <div id="first-name"> hello,</div>
      <div id="last-name">THERE</div>

      <div class="container" id="paragraph-container">
        <img src="${about1}" id="about-image">

        <p id="about-me-paragraph">
          My name is <b>Dani Crosby</b>, and I'm a student
          studying Javascript, C#, and .Net at Nashville Software School.
          I have a background in home organization, welding, and as a
          small business owner. I hope to integrate my new software skills
          and passion for workflow efficiency to promote work-life balance
          within an ethical company. I also enjoy mowing my lawn, helping senior
          dogs, and a daily hot cup of chai.
        </p>
      </div>
    </section>

    <section id="bottom-section">
      <a href="https://github.com/danicrosby"><img src="${github}" id="social-icons"></a>
      <a href="https://www.linkedin.com/in/dani-crosby-80258544/"><img src="${linkedIn}"id="social-icons"></a>
      <a href="https://danicrosby.medium.com/"><img src="${medium}" id="social-icons"></a>
      <a href="https://ofsds.org/"><img src="${dog}" id="social-icons"></a>
    </section>
    </div>
  </div>`;
};

export default aboutPage;
