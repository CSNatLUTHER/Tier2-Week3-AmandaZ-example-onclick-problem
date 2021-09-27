$(document).ready(onReady);

function onReady() {
  $( '#maker-button' ).on( 'click', createAButton );
}

function createAButton(){
  let list = $( '#button-creation-zone' );
  let equation = 77+99;

  list.append(
    `<li>placeholder text
    <button class="new-button" onclick="logEquation(${equation})">LOG EQUATION TO CONSOLE</button>
    </li>`
    )
}

function logEquation(equationToLog){
  console.log('the equation is:', equationToLog);
}