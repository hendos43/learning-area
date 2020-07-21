const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ':insertA: :insertB: :insertC: with :insertD:.';
let insertA = ['Draw', 'Lick', 'Kiss', 'Destroy'];
let insertB = ['a handful of','2', '12'];
let insertC = ['grains of rice', 'legs', 'jelly babies', 'pillows', 'mugs', 'sprouts'];
let insertD = ['chopsticks', 'gusto', 'love', 'terrifying results', 'care and compassion', 'wildness', 'the face of someone who has just licked a lemon', 'red eyes'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let aItem = randomValueFromArray(insertA);
  let bItem = randomValueFromArray(insertB);
  let cItem = randomValueFromArray(insertC);
  let dItem = randomValueFromArray(insertD);

  newStory = newStory.replace(':insertA:',aItem);
  newStory = newStory.replace(':insertB:',bItem);
  newStory = newStory.replace(':insertC:',cItem);
  newStory = newStory.replace(':insertD:',dItem);


/*
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }
  
  */

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
