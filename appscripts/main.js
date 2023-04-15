// ------------------------------------- WELCOME PAGE ------------------------------------- //

// Part 1: Welcome message 

function getUserName() {
  // when function is called, user is greeted by welcome message, prompting them to enter their name
  const welcome = prompt("Hello! I am Charlie, your virtual tour guide who will be following you along as you explore the issue of juvenile delinquency and recidivism in this datastory! Can I first get your name?");
  // checking if a name has been entered
    if (welcome == null || welcome == "") {
  // if a name has not been entered, a message will pop up to prompt the user to enter a name
      window.alert("Please enter a name so I can get to know you better!!!");
      getUserName();
    } else {
  // if a name has been entered, it will be incorporated into this message below 
      window.alert("Hello " + welcome + ", " + "it is nice to meet you! We can now start the tour. When the page loads, you'll be able to see buttons lining the top of the screen. You can click on each of them to venture into each section of this data story -- from understanding the current situation in terms of recividism rates and seeing the breakdown of delinquency cases by gender and age, to finally looking at the predictors of recidivism. All this works towards understandng what can be done to further help juvenile offenders! Scroll down when you're ready to join me on this journey!");
    }
    return welcome; 
  }

  // assigning the user's name input to the constant welcome
  const welcome = getUserName(); 

// Part 2: Help

// helpButton is a button which listens for the user to click it, triggering the getHelp() function 
var helpButton = document.getElementById("getHelp");
helpButton.addEventListener("click", function(){help();});
function help() {
  // window pop up appears to directly address the user based on the name they input in the window prompt from earlier and explains to the user how to navigate the page/datastory
  window.alert("Ah, I see you've clicked for help. Feeling a little lost? Don't worry, " + welcome + "! " + "See the buttons lining the top of the screen? You can click on each of them to venture into each section of the recidivism journey. Alternatively, you can follow the flow of the data story by scrolling down this page to the first secion, 'Current Situation' to further understand what juvenile deliquency and recividism is!");
}

// ------------------------------------- CURRENT SITUATION SECTION ------------------------------------- //

// this function updates the innerHTML  of the element with the id "SituationMessage" to display a text that directly addresses the user based on the name they input in the window prompt that appears whenever the page loads, and states the problem statement and research question 
function currentSiuationMessage() {
  console.log("it works"); // checking if this function works 
  document.getElementById("SituationMessage").innerHTML = "'" + "Hi, " + welcome  + "! " + "I see you’ve joined us onboard this journey to understand juvenile delinquency and recidivism more deeply.<br> <br> Firstly, you may be wondering what juvenile delinquency and recidivism actually is. Well, juvenile delinquency is defined as regular offending or criminality displayed by a young individual, especially when they are below the legal age of criminal prosecution. Juvenile recidivism on the other hand refers to a juvenile delinquent’s return to committing criminal behaviour especially after receiving interventions for their prior offences. <br> <br> In other words, juvenile delinquents who offend once may enter a repetition of crime, even after intervention has been made, which potentially leads to a vicious cycle from which they cannot escape. Unfortunately, rates of juvenile recidivism have not been going down as ideally these past several years. <br> <br> How do I even know this? Why does this matter? And what more can be done by the community to further or better support juvenile offenders? Scroll down to view the 'Juvenile Recidivism Rates' tab to find out more!"
  + "'";
}

// function automatically runs when the page loads, after the user inputs a name 
currentSiuationMessage();

// function that allows users to click on different tabs to change display of charts 
function changeCharts(evt, chartName) {
  var i, x, tablinks;

  x = document.getElementsByClassName("currentSituation");
  for (i = 0; i < x.length; i++) {
    // hides chart with the class "currentSituation"
    x[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    // removes the grey highlight of the tablink that has not been clicked on
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
    // shows new chart 
  document.getElementById(chartName).style.display = "block";
    // highlights the tablink in grey to show the user which tab/chart they are viewing at that point in time 
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}

document.getElementById("myLink").click();


// ------------------------------------- LINE CHART FOR RATE OF JUVENILE RECIDIVISM OVER THE YEARS ------------------------------------- //

var labelYear = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]; // x-axis labels -- years 
var rates = [20.3, 16.6, 18.9, 19.1, 16.7, 11.7, 10.1, 11.5, 14.3, 14.9, 12.2]; // y-axis values -- rates for each corresponding year 

//------------------------------------- CREATING GRADIENT UNDER LINE CHART ---------------------------------------- // 

// function learned and adapted from https://youtu.be/6hgc9sPDiho -- creates a gradient in the area under the line chart where color gets darker as rates of recidivism increases 
var ctx = document.getElementById("rates-line-chart").getContext("2d");
// linear gradient function which takes in 4 parameters
const gradientBackground = ctx.createLinearGradient(0, 0, 0, 664);
// first argument refers to the horizontal starting point of the gradient (extreme left)
// second argument refers to the vertical starting point of the gradient (top)
// third argument refers to the horizontal ending point (extreme right)
// fourth argument refers to the vertical ending point of the gradient (bottom)

// first argument defines at which point in the gradient background should each color stop, second argument specifies the color 
gradientBackground.addColorStop(0, "hsla(360, 100%, 50%, 1)");
gradientBackground.addColorStop(0.5, "hsla(360, 30%, 50%, 1)");
gradientBackground.addColorStop(1, "hsla(350, 0%, 50%, 1)");


// data object for line chart showing rate of juvenile recidivism over the years 
const dataObj = {
  labels: labelYear, 
  fontColor: "rgb(255, 255, 255)",
   datasets: [
       {
       label:"Rate",
       data: rates,
       borderWidth: 2,
       backgroundColor: gradientBackground,
       borderColor: "hsla(0, 0%, 0%, 1)"
       }
   ]
  }

// new chart constructor for line chart showing rate of juvenile recividivism over the years
  new Chart("rates-line-chart",
  {
      type: "line",
      data: dataObj,
      options: { 
          maintainAspectRatio: false,
          legend: {
              display: false
          },
          title: {
              display: true,
              text: [
              "Juvenile Recidivism Rates Over 10 Years"
              ],
              fontFamily: "TrebuchetMS",
              fontSize: 24,
              fontColor: 'rgb(255, 255, 255)',
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: "white",
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: "white"
              }
            }]
          }
      }
  });


//--------------------------------- BAR CHART FOR AGE DISTRIBUTION OVER TIME -------------------------------------//

//------------------------------------------- AGE BAR CHART-------------------------------------------------------//

var ageLabelYear = ["2010","2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]; // x-axis labels -- years 
var ageGroup1 = [42, 76, 96, 70, 75, 48, 47, 34, 54, 39, 23, 22]; // bar chart 1 -- number of juvenile cases in age group 1 (below 13 years old)
var ageGroup2 = [302, 353, 415, 341, 318, 334, 217, 242, 226, 216, 133, 159]; // bar chart 2 -- number of juvenile cases in age group 2 (between 13 to 16 years old)
var ageGroup3 = [184, 226, 256, 239, 193, 170, 162, 165, 186, 152, 82, 102]; // bar chart 3 -- number of juvenile cases in age group 3 (above 16 years old)

// data object for bar chart showing distribution of juvenile cases by age groups over the years 
const ageDataObj = {
  labels: ageLabelYear, 
  fontColor: "rgb(255, 255, 255)",
   datasets: [
       {
       label:"Below 13 years of age",
       data: ageGroup1,
       borderWidth: 2,
       backgroundColor: "hsla(25, 5%, 41%, 1)",
       borderColor: "hsla(0, 0%, 0%, 1)"
       },
       {
        label:"Between 13 and 16",
        data: ageGroup2,
        borderWidth: 2,
        backgroundColor: "hsla(0, 95%, 41%, 1)",
        borderColor: "hsla(0, 0%, 0%, 1)"
        },
        {
          label:"Above 16",
          data: ageGroup3,
          borderWidth: 2,
          backgroundColor: "hsla(25, 5%, 41%, 1)",
          borderColor: "hsla(0, 0%, 0%, 1)"
          }
   ]
  }

  // new chart constructor for bar chart showing distribution of juvenile cases by age groups over the years 
 const ageBarChart = new Chart("age-bar-chart",
  {
      type: "bar",
      data: ageDataObj,
      options: { 
          maintainAspectRatio: true,
          legend: {
              display: false
          },
          title: {
              display: true,
              text: [
              "Cases by Age over Time"
              ],
              fontFamily: "TrebuchetMS",
              fontSize: 24,
              fontColor: 'rgb(255, 255, 255)',
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: "white",
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: "white"
              }
            }]
          }
      }
  });


//-------------------------------------- MAKING BAR CHART INTERACTIVE ----------------------------------// 

//function that updates the data displayed by the bar chart from 2010 to the year the user chooses from the slider 
var updateAgeChart = function() {

//assigning the slider to a constant which will be used to reference the slider's value later 
const slider = document.getElementById("updateAge");

//assigning the element which displays the range of years the user chooses to view data from to the constant yearDisplay
const yearDisplay = document.getElementById("year");

// if the slider's value is 2010, the year display will show that the data is only from 2010
if (slider.value == 2010 ) {
yearDisplay.innerHTML = "This is showing data from " + slider.value;
 }
// if the slider's value is above 2010, the year display will show the range of years which the data is from 
else { 
  yearDisplay.innerHTML = "This is showing data from 2010 to " + slider.value;
} 


// slice the data arrays such that they only contain data from 2010 up to the year the user selected with the slider
const yearValue = ageLabelYear.slice(0, slider.value - 2009);
const ageValue1 = ageGroup1.slice(0, slider.value - 2009);
const ageValue2 = ageGroup2.slice(0, slider.value - 2009); 
const ageValue3 = ageGroup3.slice(0, slider.value - 2009); 

// used to check if the data is sliced correctly 
console.log(yearValue);
console.log(ageValue1);
console.log(ageValue2);
console.log(ageValue3);

//assigning the new data arrays to their respective datasets 
ageDataObj.labels = yearValue;
ageDataObj.datasets[0].data = ageValue1;
ageDataObj.datasets[1].data = ageValue2;
ageDataObj.datasets[2].data = ageValue3;

// updating the bar chart 
ageBarChart.update();

};

// revealAge is a slider which listens for change from the user to call the updateAgeChart() function 
var revealAge = document.getElementById("updateAge");
revealAge.addEventListener("change", function(){updateAgeChart();})


//----------------------------------------- PIE CHART OF DISTRIBUTION OF JUVENILE CASES BY GENDER ------------------------------------------------- //

// initialising the data of the pie chart 
var initialData = {
  labels: ["Female", "Male"],
  datasets: [
    {
      data: [50, 50], // when the page first loads, it will display the proportion of cases by gender to be equal -- this proportion can be changed when the user clicks a button below 
      backgroundColor: ["hsla(347, 44%, 64%, 1)", 
      "hsla(221, 25%, 43%, 0.68)"],
    },
  ],
};

// new chart constructor for pie chart 
var myChart = new Chart(document.getElementById("gender-pie-chart"), {
  type: "pie",
  data: initialData,
  options: {
    title: {
      display: true,
      text: "Proportion of cases by gender for the year ____",
      fontFamily: "serif",
      fontSize: 24,
      fontColor: 'rgb(255, 255, 255)',
    },
  },
});


//----------------------------------------- MAKING PIE CHART INTERACTIVE ------------------------------------ //


// array of data for number of male and female cases for each successive year
var yearData = [
  [166, 362], // 2010
  [182, 473], // 2011
  [203,	564], // 2012
  [122,	528], // 2013
  [112,	474], // 2014
  [111,	441], // 2015
  [110,	316], // 2016
  [89,	352], // 2017
  [80,	386], // 2018
  [87,	320], // 2019
  [42,	196], // 2020
  [45,	238], // 2021
];

// currentYear variable tracks the year from which the data is displayed
var currentYear = 0;

// function updates the data shown by the pie chart -- this changes the proportion of male and female cases of each successive year with each successive click of a button
function updateGender() {
  // obtaining the data from the year being displayed and assigning it to the dataForYear variable
  var dataForYear = yearData[currentYear];

  // assigning the data from the year of interest to the pie chart's data 
  myChart.data.datasets[0].data = dataForYear;

 // updating the pie chart's title to show which year the data is from
 myChart.options.title.text = "Proportion of cases by gender for the year  " + (currentYear + 2010)

  // increasing the year that is displayed until it reaches the last year of data, which is 2021
  currentYear = (currentYear + 1) % yearData.length;

  // updating the chart 
  myChart.update();
}

// genderButton is a button that the user can click and upon that, calls the updateGender() function to change the data shown by the pie chart 
var genderButton = document.getElementById("updateGender");
genderButton.addEventListener("click", function(){updateGender();});


// ------------------------------------ PREDICTORS SECTION --------------------------------------------- //

// function updates the innerHTML of the element with the id "predictorsMessage" to display a text that addresses the user based on the name they input in the window prompt that appears whenever the page loads, and introduces them to this section of the datastory  
function predictorsMessage() {
  console.log("it works");
  document.getElementById("predictorsMessage").innerHTML = "'" + "Now we've looked at demographic factors that make youths vulnerable to offending. But let's go back to examining recidivism and the social predictors for juveniles. Are you with me, " + welcome + "?" + "'";
};

//function automatically is called everytime the page loads 
predictorsMessage(); 

//----------------------------- BAR CHART SHOWING THE VARIOUS PREDICTORS OF JUVENILE RECIDIVISM  -----------------------------------------------// 

// y-axis labels -- various predictors of juvenile recidivism
var predictorLabels = ["Reported Father Criminality", "History of Running Away From Home", "History of Aggression", "1 year Decrease in Age of First Criminal Offense"]
var risk = [34, 34, 34, 34]; // corresponding bar chart values which are initially equal, but will change to the correct values once the user presses a button

// data object of the horizontal bar chart showing predictors of juvenile recidivism and their respective increase in percentage risk 
const predictorDataObj = {
  labels: predictorLabels, 
  fontColor: "rgb(255, 255, 255)",
   datasets: [
       {
       label:"percentage risk of recidivism",
       data: risk,
       borderWidth: 2,
       backgroundColor: ["hsla(360, 100%, 100%, 1)", "hsla(360, 100%, 100%, 1)", "hsla(360, 100%, 100%, 1)", "hsla(360, 100%, 100%, 1)"],
       borderColor: "hsla(360, 100%, 0%, 1)"
       },
     ]
  }

  // new chart constructor for this horizontal bar chart 
 const PredictorsBarChart = new Chart("predictors-bar-chart",
  {
      type: "horizontalBar",
      data: predictorDataObj,
      options: { 
          maintainAspectRatio: false,
          legend: {
              display: false
          },
          title: {
              display: true,
              text: [
              "Increase in Percentage Risk of Juvenile Recidivism"
              ],
              fontFamily: "TrebuchetMS",
              fontSize: 24,
              fontColor: 'rgb(255, 255, 255)',
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: "white",
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: "white"
              },
              barThickness: 20 // Set a fixed value for the bar thickness
            }]
          }
        }
      });

//---------------------------------- MAKING PREDICTORS BAR CHART INTERACTIVE ---------------------------------------//

//updates the data of the bar chart
function updatePredictors() {
// assigns the initial data array of percentage risk increase in juvenile recidivism a new array of values 
  risk = [128, 121, 128, 34];
// updates the data of the bar  chart by assigning the new data array to its dataset 
  predictorDataObj.datasets[0].data = risk;
// updating the bar chart 
  PredictorsBarChart.update();
};

//function changes color of the first 3 bars from white to red to highlight that these 3 predictors cause the highest percentage increase in risk of recidivism 
function changeColor() {
// assigning the background colors of bar charts 1-3 to the color red
  predictorDataObj.datasets[0].backgroundColor[0] = "hsla(0, 100%, 50%, 1)";
  predictorDataObj.datasets[0].backgroundColor[1] = "hsla(0, 100%, 50%, 1)";
  predictorDataObj.datasets[0].backgroundColor[2] = "hsla(0, 100%, 50%, 1)";
  // updating the colors of the bar chart 
  PredictorsBarChart.update();
}; 

//function collectively performs 2 other functions 
function updateHorizontalBar() {
//firstly, it updates the value of the bar chart to show the accurate percentage risk increase caused by each predictor 
updatePredictors();
//secondly, it also highlights the top 3 predictors which cause the highest percentage increase in risk 
changeColor(); 
}; 

// predictorsButton is a button which listens for the user to click on it before calling the function to update the horizontal bar chart to show the correct data and highlight the most critical predictors of juvenile recidivism 
var predictorsButton = document.getElementById("updatePredictors");
predictorsButton.addEventListener("click", function(){updateHorizontalBar();});



// ----------------------------------------------- WHAT CAN BE DONE SECTION ---------------------------------------------------------- // 

// function updates the innerHTML of the element with the id "doneMessage" to show a text that directly addresses the user based on the name they input in a window prompt that appears when the page is loaded and concludes the datastory 
function doneMessage() {
  console.log("it works 2");
  document.getElementById("doneMessage").innerHTML = "Wow, I'm sure you've learned a lot by now, " + welcome + "!" + " It may seem a little overwhelming and maybe even depressing. Not to worry as we have reached the light at the end of this tunnel. Look through the slides below which summarise what we now know about juvenile delinquency and recidivism in Singapore, as well as how these insights can inform what can be done by the community to further support them.";
}

doneMessage(); 

// initialising slideIndex variable to be 1
let slideIndex = 1;
showSlides(slideIndex);

// function that adds an increment or decreent to the slideIndex value by the index that is currently showing (i.e. n) depending on whether the user clicks the "next" or "previous" button 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// function assigns the value of n to slideIndex 
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) // n represents slide index
 { 
  // declaring variables 
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // if slide index (n) is more than 2, the slide index is set back to 1 to show the first slide
  if (n > slides.length) {slideIndex = 1}
  // if slide index (n) is 0, or less than 1, it will go back to the previous/very last slide
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // for loop which changes which dot is highlighted, and hides other slide that is not displayed
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

