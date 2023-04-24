// // Task "makeProfileTimer"

// function makeProfileTimer() {
//   const start = performance.now();
  
//   alert('Вимiрюємо час роботи цього alert'); 
  
//   const end = performance.now();

//   return function() {
//     return (end - start).toFixed(2);
//   };
// }
// const timer = makeProfileTimer();
// alert(timer());

// const timer2 = makeProfileTimer();
// prompt('');
// alert(`Час роботи двух аlert та одного prompt ${timer()}`);
// alert(`Час роботи prompt та попереднього alert ${timer2()}`);




// Task "makeSaver"
// function makeSaver(func){
//   const result = func();
//   return () => result;
// }

// let saver = makeSaver(Math.random) 
// let value1 = saver();
// let value2 = saver();           
 
// alert(`Random: ${value1} === ${value2}`)

// let saver2 = makeSaver(() => {
//     console.log('saved function called');
//     return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
// })
// let value3 = saver2();
// let value4 = saver2();
// alert(`Check values: ${value3 === value4}`)

// let namePrompt = prompt.bind(window, 'Як тебе звуть?')
// let nameSaver = makeSaver(namePrompt)
// alert(`Привіт! Prompt ще не було!`)
// alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
// alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);


// Task "myBind"






//Task "checkResult"

// function checkResult(original, validator){
//   this.originalFunc = original;
//   this.validatorFunc = validator;

//   function wrapper(){
//     let resultOriginal;
//     do {
//         resultOriginal = originalFunc(...arguments);
//         resultValidator = validatorFunc(resultOriginal);
//     } while(!resultValidator);
//       return resultOriginal;
//   }
//   return wrapper;
// }



// function onCheckResult(){

//   const numberPrompt = checkResult(prompt, x => !isNaN(+x));
//   let number = +numberPrompt.call(window, "Введіть число", "0");
//   console.log(number);


//   const gamePrompt = checkResult(prompt, x => ['камінь', 'ножиці', 'папір'].includes(x.toLowerCase()));
//   const turn = gamePrompt.call(window, "Введіть щось зі списку: 'камінь, 'ножиці', 'папір'");
//   console.log(turn);

//   const randomHigh = checkResult(Math.random, x => x >= 0.5);
//   const resultRandomHigh = randomHigh();
//   console.log(resultRandomHigh);

//   const alwaysSayYes = checkResult(() => confirm(), x => x === true);
//   const resultAlwaysSayYes = alwaysSayYes();
//   console.log('Ти все ж здався і натиснув ОК!'); 

//   function capitalize(str){
//     let result = '';
//     result = str[0].toUpperCase();
//     for(let i = 1; i < str.length; i++) result += str[i].toLowerCase();
//     return result;
// }

//   function credentials(){
//     let surname = prompt('Введи своє прізвище:');
//     let name = prompt('Введи своє ім\'я:');
//     let fatherName = prompt('Введи своє по-батькові:');
//     if(surname !== null && surname !== '') {surname = surname.trim(); surname = capitalize(surname)};
//     if(name !== null && name !== '') {name = name.trim(); name = capitalize(name)};
//     if(fatherName !== null && fatherName !== '') {fatherName = fatherName.trim(); fatherName = capitalize(fatherName)};
//     const fullName = `${surname} ${name} ${fatherName}`;
//     return {'Прізвище': surname, 'Ім\'я': name, 'По-батькові': fatherName, 'ПІБ': fullName};
// }

//   const respectMe = checkResult(credentials, (arg) => {
//     for(key in arg){
//       if(arg[key] === null){
//           return false;
//       }
//     }
//     return true;
//   })
//   const resultRespectMe = respectMe();
//   console.log(resultRespectMe);
// }
// onCheckResult();








