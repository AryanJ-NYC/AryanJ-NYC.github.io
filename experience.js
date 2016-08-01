let experience = [
  {
    "companyName": "Cultural Vistas",
    "duration": "Jan. 2016 - present",
    "position": "Software Engineer",
    "jobDescription": `
      <ul>
        <li>Coded, designed and developed data-driven software for a robust web application</li>
        <li>Implemented an extension of the Cultural Vistas software that allowed external users (users outside of Cultural Vistas) to view appropriate program data</li>
        <li>Provided internal software support to Cultural Vistas’ program teams</li>
        <li>Cut index page load times by more than 50% by optimizing MySQL queries</li>
      </ul>`,
    "image": "images/cultural-vistas.gif"
  },
  {
    "companyName": "CUNY Queens College",
    "duration": "Feb. 2015 - Apr. 2016",
    "position": "Information Technology Assistant",
    "jobDescription": `
      <ul>
        <li>Maintained and updated the Advising Center’s public website and social media</li>
        <li>Maintained and updated the Advising Center’s intranet and SQL database</li>
        <li>Provided technical support/troubleshooting to all Advising Center staff</li>
        <li>Migrated existing website from Linux server running PHP to Microsoft SharePoint in under 5 months</li>
      </ul>`,
    "image": "images/QC_PL_WhiteBG_RGB.jpg"
  },
  {
    "companyName": "Research Foundation of CUNY",
    "duration": "Jun. 2015 - Jan. 2016",
    "position": "Tech Incubator App Center Project Manager",
    "jobDescription": `
      <ul>
        <li>Coordinated and oversaw development of new and existing software projects</li>
        <li>Wrote websites for the Tech Incubator and other partners using PHP, AngularJS, jQuery and Twitter Bootstrap</li>
        <li>Managed and maintained Facebook and Twitter pages</li>
      </ul>`,
    "image": "images/cuny-research-foundation.jpeg"
  }
];

for (let i = 0; i < experience.length; ++i) {
  let html =
  `
  <div class="experience-item col-xs-12">
    <div class="col-xs-12 col-sm-4 col-md-5">
      <div class="col-xs-offset-1 col-sm-offset-0 col-xs-10 col-sm-6">
        <img src="${experience[i].image}" class="experience-item-image img img-responsive img-rounded center-block" />
      </div>

      <div class="col-xs-12 col-sm-6">
        <div class="company-name col-xs-12">
          ${experience[i].companyName}
        </div>
        <div class="duration col-xs-12">
          ${experience[i].duration}
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-8 col-md-7">
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
