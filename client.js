$(document).ready(onReady);

function onReady() {
  $( '#maker-button' ).on( 'click', createAButton );
}

function createAButton(){
  let list = $( '#button-creation-zone' );
  let equation = String('77+99'); //enter any equation with an operator here, examples: 99+5, 1.03-600, 77*3*22

  //doing String(equation) all over the place may not be necessary either - doesn't seem to change the result.

  logEquation(`${String(equation)}`); //template literal is obvi not necessary here, but I wanted it to look as close as possible to a few lines later for testing

  list.append(
    `<li>If we check the console now, we see our equation "uncomputed".
    <button class="new-button" onclick="logEquation(${String(equation)})">But if we click this, it logs again, computed</button>
    </li>`
    )
}

function logEquation(equationToLog){
  //expectation: the equation string ("77+99" in our example) is logged to the console.
  //reality (in #new-button's onclick example): the equation is computed somewhere along the way, "176" is logged to the console.
  console.log('the equation is:', String(equationToLog));
}