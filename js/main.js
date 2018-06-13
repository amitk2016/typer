var button = document.querySelector('#button');
var h1 = document.querySelector('#heading');

button.onclick = function(){
  h1.textContent = 'Hurray! You test is woking fine. Go ahead and do the hard Work now';
}

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Performance')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Commitment')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Working Teams')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Leaders Impact')
    .start();
