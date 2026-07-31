document.body.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if(keyCode === 16) {
        console.log('Keydown for =>' + keyCode)
    }
})

document.body.addEventListener('keyup', function(e) {
    var keyCode = e.keyCode;
    if(keyCode === 16) {
        console.log('keyup for =>' + keyCode)
    }
})

document.body.addEventListener('keypress', function(e) {
    var keyCode = e.keyCode;
    if(keyCode === 16) {
        console.log('Keypress for =>' + keyCode)
    }
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  