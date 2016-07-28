let experience = [
  {
    "companyName": "Cultural Vistas",
    "duration": "January 2016 - present",
    "position": "Software Engineer",
    "jobDescription": "Hack up furballs chase red laser dot lie on your belly and purr when you are asleep always hungry and lick the plastic bag. Shove bum in owner's face like camera lens cat slap dog in face the dog smells bad, yet sit in window and stare ooo, a bird! yum, immediately regret falling into bathtub but hide from vacuum cleaner, but lie on your belly and purr when you are asleep."
  },
  {
    "companyName": "CUNY Queens College",
    "duration": "February 2015 - April 2016",
    "position": "Information Technology Assistant",
    "jobDescription": "Hungarian face mop brad pitt, Refined gentlemen got milk driving gloves grooming will you do the fandango cappuccino catcher face mop brad pitt hungarian. Nefarious omar sharif consectetur challenge you to a duel, chevron consectetur omar sharif nefarious challenge you to a duel dodgy uncle clive Semi beard groucho-a-like."
  }
];

for (let i = 0; i < experience.length; ++i) {
  let html = 
  `
  <div class="experience-item col-xs-12">
    <div class="col-xs-12 col-sm-3">
      <div class="company-name col-xs-12">
        ${experience[i].companyName}
      </div>
      <div class="duration col-xs-12">
        ${experience[i].duration}
      </div>
    </div>
    <div class="col-xs-12 col-sm-9">
      <div class="position col-xs-12">
        ${experience[i].position}
      </div>
      <div class="job-description col-xs-12">
        ${experience[i].jobDescription}
      </div>
    </div>
  </div>
  `;
  
  $('#experience').append(html);
}
