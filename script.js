//FIRST TASK
const firstTask = (string) => {
  const days = ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const rusDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
  let newStr = string;
  const newDays = days.map((elem) => {
    return elem.toUpperCase();
  });
  rusDays.forEach((elem, i) => {
    newStr = newStr.replace(elem.toUpperCase(), newDays[i]);
  });
  const paragraph = document.getElementById('p');
  paragraph.textContent = newStr;
};
firstTask(`Старший братец ПОНЕДЕЛЬНИК – 
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.
ВТОРНИК следует за братом
у него идей богато.
А потом СРЕДА-сестрица,
не пристало ей лениться.
Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.
ПЯТНИЦА-сестра сумела
побыстрей закончить дело.
Предпоследний брат СУББОТА
не выходит на работу.
В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`);

//SECOND TASK

const formElement = document.querySelector('#formElement');

formElement.addEventListener('click', (e) => {
  const activeElement = formElement.querySelector('.focused');
  if (activeElement) {
    activeElement.classList.remove('focused');
  }
  if (e.target.localName === 'input') {
    e.target.classList.add('focused');
  }
});

//THIRD TASK

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  fn();
});
const fn = () => {
  let numberRightPlace = [];
  let numberWrongPlace = [];

  let counter = 0;
  const generate = () => {
    return Array.from(new Set((Math.floor(Math.random() * (1000000 - 100 + 1)) + 100 + '').split('')));
  };
  let numberArr = generate();
  if (numberArr.length < 3) {
    numberArr = generate();
  }
  const helpArr = numberArr
    .map((elem) => {
      return '*';
    })
    .join('');

  let userAnswer = '';

  const game = () => {
    numberRightPlace = [];
    numberWrongPlace = [];
    userAnswer = window.prompt(`Найдите число ${helpArr}.Попытка ${counter}. Your answer?`, userAnswer);
    numberArr.forEach((elem, i, arr) => {
      if (arr[i] === userAnswer[i] && !numberRightPlace.includes(elem)) {
        numberRightPlace.push(elem);
      } else if (arr[i] !== userAnswer[i] && userAnswer.includes(elem) && !numberWrongPlace.includes(elem)) {
        numberWrongPlace.push(elem);
      }
    });
    if (userAnswer) {
      window.confirm(
        `Cовпавших цифр не на своих местах - ${numberWrongPlace.length} (${numberWrongPlace.toString()}), цифр на своих местах - ${
          numberRightPlace.length
        } (${numberRightPlace.toString()})`
      );
    }
    if (numberRightPlace.length === numberArr.length) {
      counter = 5;
      alert('You win!');
    } else if (counter === 3) {
      alert('You lose!');
    }
  };
  while (counter < 3) {
    counter++;
    game();
  }
};
