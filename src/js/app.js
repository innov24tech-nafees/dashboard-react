
// side bar:- for all list item display

// import { Chart } from "chart.js";

var displayButtons = document.querySelectorAll(".display");
var openSubMenu = null;

function hideOtherSubMenus(currentSubMenu) {
  displayButtons.forEach(function (button) {
    var subMenu = button.querySelector(".sub-menu");
    if (subMenu !== currentSubMenu) {
      subMenu.classList.add("hidden");
    }
  });
}

displayButtons.forEach(function (displayButton) {
  var subMenu = displayButton.querySelector(".sub-menu");

  displayButton.addEventListener("click", function (event) {
    event.stopPropagation();
    hideOtherSubMenus(subMenu);

    if (subMenu.classList.contains("hidden")) {
      subMenu.classList.remove("hidden");
    } else {
      subMenu.classList.add("hidden");
    }
  });
});

// dark mode


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  const moonIcon = document.querySelector('.fa-moon');
  const sunIcon = document.querySelector('.fa-sun');

  

  // Check local storage for user preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
  }

  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark');
      moonIcon.style.display = body.classList.contains('dark') ? 'none' : 'block';
      sunIcon.style.display = body.classList.contains('dark') ? 'block' : 'none';

      if (body.classList.contains('dark')) {
          localStorage.setItem('dark-mode', 'enabled');
      } else {
          localStorage.setItem('dark-mode', 'disabled');
      }
      
      // Toggle background color for app-header and other elements
      const appHeader = document.querySelector('.app-header');
      appHeader.classList.toggle('dark');

      const pageContent = document.querySelector('.page-content');
      pageContent.classList.toggle('dark-background');

      const TotalRevenue  = document.querySelector(".tatal-revenue");
      TotalRevenue.classList.toggle('dark');

      const projectFirstRow = document.querySelector(".project-first");
      // projectFirstRow.classList.toggle("hover:bg-gray-50");
        projectFirstRow.classList.toggle("dark:hover:bg-rgb(55 65 81 / .4)");


  });


});




// notification display block
const bellIcon = document.getElementById("bell-icon");
const notificationMassage = document.querySelector(".notification-massage");
const clearAllLink = document.getElementById("clear-all-link");

bellIcon.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from reaching the document
  notificationMassage.classList.remove("hidden"); // Show the notification-massage content
});

clearAllLink.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from reaching the document
  notificationMassage.classList.add("hidden"); // Hide the notification-massage content
});

// Hide notification-massage content when clicking anywhere outside the box
document.addEventListener("click", function (event) {
  if (!notificationMassage.contains(event.target)) {
    notificationMassage.classList.add("hidden");
  }
});

// user profile

const openProfile = document.getElementById("user-profile");
const userProfileId = document.querySelector(".user-profile-id");

openProfile.addEventListener("click", function () {
  userProfileId.classList.toggle("hidden");
});
document.addEventListener("click", function (event) {
  if (!userProfileId.contains(event.target) && !openProfile.contains(event.target)) {
    userProfileId.classList.add("hidden");
  }
});


// hamburger 

const button = document.getElementById("button-toggle-menu");
const appMenu = document.querySelector(".app-menu");
let originalWidth = null;

button.addEventListener("click", function () {
  if (originalWidth === null) {
    originalWidth = appMenu.style.width;
  }

  if (appMenu.style.width === "5%") {
    appMenu.style.width = originalWidth;
  } else {
    appMenu.style.width = "5%";
  }
});


// display none all pages. only icon display 

const buttonMenu = document.getElementById("button-toggle-menu");
const sideMenu = document.querySelectorAll(".side-menu-user")         //   apply on all class-->
const logoSm = document.querySelector(".company-logo")                // logo icon display

let isContentVisible = true;

buttonMenu.addEventListener("click", function () {
  sideMenu.forEach((sideMenu) => {
    if (isContentVisible) {                        //   apply on all class-->
      sideMenu.style.display = "none";
    }
    else {

      sideMenu.style.display = "block";
    }
  });
  isContentVisible = !isContentVisible;
});

buttonMenu.addEventListener("click", function () {
  if (logoSm.style.display === "block") {
    logoSm.style.display = "none";
  } else {
    logoSm.style.display = "block";
    logoSm.style.width = "50%";
  }
});





document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the dropdown content elements
  const button = document.querySelector(".fc-dropdown");
  const dropdownContent = document.querySelector("#dropdown-target1");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Toggle the 'hidden' class on the dropdown content to control visibility
    dropdownContent.classList.toggle("hidden");
  });
});


// <!-- morris donu chart -->



var colorDanger = "#ff8acc";

Morris.Donut({
  element: 'donut-example',
  resize: true,
  colors: [
    '#35b8e0',
    '#5b69bc'
  ],

  data: [
    { label: "In-Store Sales", value: 12, color: colorDanger },
    { label: "Mail-Order Sales", value: 50 },
    { label: "Download Sales", value: 30 },

  ]
});



const moriesButton = document.querySelector(".mories"); // Select the button with the "mories" class
const moriesId = document.getElementById("dropdown-target1"); // Select the dropdown content by its ID

moriesButton.addEventListener("click", function () {
  moriesId.style.display = "block";
});


// bar chart

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
    datasets: [{
      // label: '# of Votes',
      data: [75, 42, 75, 38, 19, 93],
      barPercentage: 0.2,
      backgroundColor: 'rgba(11, 104, 255, 0.85)',
      tension: 0.8,
    
    }]
  },
  options: {
      scales: {
      x: {

        // display: false,
        gridLines: {
       drawBorder: true,

        }

        
      },
      
      y: {
        display: true,
 
    }
    

    },
    
  }
});

// line chart  lineChart


const line = document.getElementById('lineChart');

new Chart(line, {
  type: 'line',
  data: {
    labels: ['', '2010', '', ' ', ' ', ' '],
    datasets: [{
      data: [0, 42, 75, 38, 19, 93],
      tension: 0.4,
      label: 'Dataset 1'
      
    },
  {
    // labels: ['', '', '', ' ', ' ', ' 2010'],
      data: [80, 50, 30, 80, 30, 20],
      tension: 0.4,
      label: 'Dataset 2' 
    // }
    // ],
    }
  ]
  },
  options: {
    scales: {
      x: {

        display: true,
      
      
      },

      y: {
        display: true
 
    }
    },

  }
});

//  revenue


// ---------------------------calender---------------------
$(function() {

 
  


});

