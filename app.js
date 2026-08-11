const adviceDisplay = document.getElementById("advice-text");
const actionButton = document.getElementById("fetch-btn");

// Creating an Async function to fetch advice from the API
async function fetchNewAdvice(){
    adviceDisplay.innerText = "Fetching Wisdom....";

    // Using try-catch to handle any errors that may occur during the fetch operation,
    // it protects our app if the internet cuts out or the API is down
    try{
         // Await, gives a pause here until the server responds with the  rawdata we requested
         const response =  await fetch("https://api.adviceslip.com/advice");
           
         // Await, pauses here until the raw netwoerk data is converted into a usable JSON object
         const refinedData = await response.json();

         // Updating the DOM using standard dot Notation to display the advice text from the JSON object
         // The API sends an object shaped like this: {slip: {id: 1, advice: "Always be yourself."}}
         adviceDisplay.innerText = refinedData.slip.advice;

    }
    catch(error){
        // If an error occurs, we log it to the console and update the DOM to inform the user
        // If anything fails above, handle the error gracefully and inform the user
        adviceDisplay.innerText = "Opps! Failed to connect to server. Check your internet connection or try again.";
        console.log("Error details:",error);
    }
}
 // Here, we attached an event listener to the button, so that when the user clicks it, we call the fetchNewAdvice function
    actionButton.addEventListener("click",fetchNewAdvice);