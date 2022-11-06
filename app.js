const inputText = document.querySelector("#input-text");
const submitButton = document.querySelector("#btn");
const resultOpt = document.querySelector("#answer");


const url = 'https://yesno.wtf/api';


// set timeout function -------
const clearResult = ()=> {


  setTimeout(() => {

    inputText.value = '';
    resultOpt.innerHTML = '';

  }, 3000);
}

// output the result ---------
const showResult = (answer) => {

  // timeout function---
  setTimeout(() => {

    resultOpt.innerHTML = `${answer}`;
    clearResult();
  }, 3000);

}






//  fecth api -------
const getResult = () => {
  
  fetch(url)
  .then((response) => response.json())
  .then((data) => showResult(data.answer));
}




//  event result------
const getSomeText = () => {
   
  getResult();
  
};


const enteredTextEvent = () => {
  submitButton.addEventListener("click", getSomeText);

};

enteredTextEvent();
  