const inputText = document.querySelector("#input-text");
const submitButton = document.querySelector("#btn");
const resultOpt = document.querySelector("#result");


const url = 'https://yesno.wtf/#api';




// const getResult = () => {


//   fetch(url)
//   .then((response) => response.json())
//   .then((data) => 
//     console.log(data)
//   );

// }


const getAll = () => {


  
}


const getSomeText = () => {
  
  const text = inputText.value;
  const imgSrc = resultOpt.value;

  console.log({text, imgSrc});
};



const enteredTextEvent = () => {
  submitButton.addEventListener("click", getSomeText);

};

enteredTextEvent();
  
