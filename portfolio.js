let portfolio = [
  {
    "projectName": "Underground Flushing Food Map",
    "url": "http://flushing.quic.nyc",
    "imgUrl": "images/underground-flushing-food.jpg",
    "description": "A webpage created for the Flushing Chamber of Commerce to display Flushing restaurants. Written in PHP using the yelp API."
  },
  {
    "projectName": "Queens College Tech Incubator",
    "url": "https://safe-plains-97827.herokuapp.com",
    "imgUrl": "images/qc-tech-incubator.jpg",
    "description": "The original website for the Queens College Tech Incubator. Written in PHP."
  },
  {
    "projectName": "Simon",
    "url": "http://aryanj-nyc.github.io/simon-game",
    "imgUrl": "images/simon.jpg",
    "description": "The 90s classic, Simon, emulated using jQuery. The game increases in difficulty as it progresses and is mobile-friendly."
  },
  {
    "projectName": "Tic-Tac-Toe",
    "url": "http://aryanj-nyc.github.io/tic-tac-toe",
    "imgUrl": "images/tic-tac-toe.jpg",
    "description": "An unbeatable and mobile-friendly tic-tac-toe game written in AngularJS using Monte Carlo game simulation trials."
  }
];

for (let i = 0; i < portfolio.length; ++i) {
  let html = 
  `
    <div class="portfolio-item col-xs-12 col-sm-6 col-lg-4">
      <h3 class="portfolio-title text-center">${portfolio[i].projectName}</h3>
      <a href="${portfolio[i].url}" target="_blank">
        <img src="${portfolio[i].imgUrl}" class="img-responsive portfolio-image" />
      </a>
      <p class="portfolio-description text-center">${portfolio[i].description}</p>
    </div>
  `;
  if ((i+1) % 2 == 0) {
    html += `<div class="clearfix visible-xs-block visible-sm-block visible-md-block"></div>`; // clear other divs in case height doesn't match
  } else if ((i+1) % 3 == 0) {
    html += `<div class="clearfix visible-lg-block"></div>`;
  }
  $('#portfolio').append(html);
}