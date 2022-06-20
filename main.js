// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const empty = document.getElementsByClassName('like-glyph')

//add eventListener to empty-heart class.
for (element of empty){
  element.addEventListener('click', mimicServerCall)
    .then(function(response){
      liked(response)
    })

    /*
    .catch(function(error){
      //call not liked function
    })
    */
    
}


function liked(event){
  let button = event.target
  if (button === EMPTY_HEART){
    button.innerText = FULL_HEART
    button.className = 'activated-heart' 
    console.log(button)
  }


}

// function unlike




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
