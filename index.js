// Define the function saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the function mondayWork
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define the function wrapAdjective
  function wrapAdjective(flair = "*") {
    return function (adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  
  
