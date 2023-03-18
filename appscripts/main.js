// ----------- WELCOME PAGE ------------------ //

// Part 1: Welcome message 

function getUserName() {
  // when function is called, user is greeted by welcome message, prompting them to enter their name
  const welcome = prompt("Hello! I am Charlie, your virtual tour guide who will be following you along as you explore the issue of juvenile offender in this datastory! Can I first get your name?");
  // checking if a name has been entered
    if (welcome == null || welcome == "") {
  // if a name has not been entered, a message will pop up to prompt the user to enter a name
      window.alert("Please enter a name so I can get to know you better!!!");
      getUserName();
    } else {
  // if a name has been entered, it will be incorporated into this message below 
      window.alert("Hello " + welcome + ", " + "it is nice to meet you! We can now start the tour. See the buttons lining the top of the screen? You can click on each of them to venture into each stage of this data story -- from understanding the current situation, to the predictors of recidivism in youth, all to work towards understandng what can be done to help juvenile offenders! ");
    }
    return welcome; 
  }

  const welcome = getUserName(); 

// Part 2: Help

// when user clicks on a button, this function is triggered to explain to the user how to use the buttons located on the top of the page to navigate through the datastory 
var helpButton = document.getElementById("getHelp");
helpButton.addEventListener("click", function(){help();});
function help() {
  window.alert("Ah, I see you've clicked for help. Feeling a little lost? Don't worry, " + welcome + "! " + "See the buttons lining the top of the screen? You can click on each of them to venture into each stage of the recidivism journey -- from predictors, to current trends in recidivism and lastly to what is being done to help juvenile offenders!")
}


// ------- CURRENT SITUATION SECTION ------------------------------------

// this function addresses the user based on the name they input in the window prompt that appears whenever the page loads, and states the problem statement and research question 
function currentSiuationMessage() {
  console.log("it works");
  document.getElementById("SituationMessage").innerHTML = "'" + "Hi, " + welcome  + "! " + "I see you’ve joined me onboard this journey to understand juvenile recidivism more deeply. Juvenile recidivism refers to a youth offender’s return to committing criminal behaviour especially after receiving interventions for their prior offences. Unfortunately, rates of juvenile recidivism have been on the rise in recent years.\nSeeing as this is truly such a significant social issue, I have always wondered what could be done in the community to further support such youths. If you’re just as curious as I am, let’s dive deeper into this subject to figure this out together!" + "'";
}

currentSiuationMessage();

// change charts using button 
function changeCharts(evt, chartName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("currentSituation");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(chartName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();

//-------LINE CHART FOR RATE OF JUVENILE RECIDIVISM OVER THE YEARS--------------------------------

var labelYear = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
var rates = [20.3, 16.6, 18.9, 19.1, 16.7, 11.7, 10.1, 11.5, 14.3, 14.9, 12.2];

const dataObj = {
  labels: labelYear, 
  fontColor: "rgb(0, 0, 0)",
   datasets: [
       {
       label:"Rate",
       data: rates,
       borderWidth: 2,
       backgroundColor: "hsla(360, 100%, 100%, 0.47)",
       borderColor: "hsla(0, 0%, 0%, 1)"
       }
   ]
  }

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
          }
      }
  });


//-----------------BAR CHART FOR AGE DISTRIBUTION OVER TIME-----------------------------------

//----------------PLACEHOLDER FOR AGE BAR CHART-----------------------------------------------------------

var ageLabelYear = ["2010","2011", "2012"]; //these are arbitrary values, not the complete data set 
var ageGroup1 = [166, 344, 232,];
var ageGroup2 = [362, 129, 237,];
var ageGroup3 = [391, 237, 231,];


const ageDataObj = {
  labels: ageLabelYear, 
  fontColor: "rgb(0, 0, 0)",
   datasets: [
       {
       label:"Below 13 years of age",
       data: ageGroup1,
       borderWidth: 2,
       backgroundColor: "hsla(344, 100%, 70%, 1)",
       borderColor: "hsla(0, 0%, 0%, 1)"
       },
       {
        label:"Between 13 and 16",
        data: ageGroup2,
        borderWidth: 2,
        backgroundColor: "hsla(197, 100%, 70%, 1)",
        borderColor: "hsla(0, 0%, 0%, 1)"
        },
        {
          label:"Above 16",
          data: ageGroup3,
          borderWidth: 2,
          backgroundColor: "hsla(197, 100%, 70%, 1)",
          borderColor: "hsla(0, 0%, 0%, 1)"
          },
   ]
  }

  new Chart("age-bar-chart",
  {
      type: "bar",
      data: ageDataObj,
      options: { 
          maintainAspectRatio: false,
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
          }
      }
  });


//--------MAKING BAR CHART INTERACTIVE ----------------------------------

// placeholder function that updates the data displayed for the age bar chart according to the year the user chooses from the slider and changes the year display 
var updateAgeChart = function() {
const slider = document.getElementById("updateAge");
const yearDisplay = document.getElementById("year");
yearDisplay.innerHTML = slider.value;
};

// function addData(chart, label, data) {
   // chart.data.labels.push(label);
    // chart.data.datasets.forEach((dataset) => {
       // dataset.data.push(data);
    // });
    // chart.update();
// }

// function removeData(chart) {
   // chart.data.labels.pop();
    //chart.data.datasets.forEach((dataset) => {
      //  dataset.data.pop();
   // });
    //chart.update();
//}

// slider listens for change from the user to perform the updateAgeChart() function 
var revealAge = document.getElementById("updateAge");
revealAge.addEventListener("change", function(){updateAgeChart();})


//----------------PLACEHOLDER FOR GENDER PIE CHART-----------------------------------------------------------
//-----------------------------------PLACEHOLDER FOR PIE CHART-----------------------------------------------

const genderDataObj = {
  labels: [
    'male',
    'female',
  ],
  datasets: [{
    label: 'Number of cases',
    data: [30, 70], // arbitrary values, not the complete data set 
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',]
  }],
    hoverOffset: 4
  };

new Chart("gender-pie-chart",
{
    type: "pie",
    data: genderDataObj,
    options: { 
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: [
            "Proportion comparison of Gender"
            ],
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(255, 255, 255)',
        }
    }
});


// ------------------------------------PREDICTORS SECTION ---------------------------------------------

function predictorsMessage() {
  console.log("it works");
  document.getElementById("predictorsMessage").innerHTML = "'" + "With that introduction to the issue of juvenile recidivism in Singapore, it still does not give us much insight into what exactly we should tackle to reduce recidivism rates. To do that, we’re gonna have to backtrack a bit and look at the predictors of juvenile recidivism. Are you with me, " + welcome + "?" + "'";
};

predictorsMessage(); 

//-----------------------------------PLACEHOLDER FOR BAR CHART-----------------------------------------------


// these are arbitrary values, not the complete data set 
var predictorLabels = ["predictor 1", "predictor 2", "predictor 3"]
var risk = [128, 128, 128];

const predictorDataObj = {
  labels: predictorLabels, 
  fontColor: "rgb(0, 0, 0)",
   datasets: [
       {
       label:"percentage risk of recidivism",
       data: risk,
       borderWidth: 2,
       backgroundColor: "hsla(0, 95%, 85%, 1)",
       borderColor: "hsla(3, 88%, 79%, 1)"
       },
     ]
  }

  new Chart("predictors-bar-chart",
  {
      type: "bar",
      data: predictorDataObj,
      options: { 
          maintainAspectRatio: true,
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
          }
      }
  });




// ------ WHAT CAN BE DONE SECTION ----------------------------------------

function doneMessage() {
  console.log("it works 2");
  document.getElementById("doneMessage").innerHTML = "Wow, I'm sure you've learned a lot by now, " + welcome + "!" + " It may seem a little morbid and depressing, but let’s now conclude this journey with what can be done!\n(explanation of how predictors can be tackled, and which age groups/genders are most vulnerable to recidivism)";
}

doneMessage(); 


