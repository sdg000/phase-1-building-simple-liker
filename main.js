const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const empty = document.querySelectorAll('.like-glyph')

//add eventListener to empty-heart class.
for (element of empty){
  element.addEventListener('click', buttonHandle)   
}

function buttonHandle(event){
  const heart = event.target

  mimicServerCall('url')

  .then(function(){
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    }
    else {
      heart.innerText = EMPTY_HEART
      heart.className = ""

    }
  })

  .catch(function(error){
    const modal = document.getElementById("modal")
    modal.className = ""
    modal.innerText = error
    setTimeout(modal.className = "hidden",3000)
  })


}



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
