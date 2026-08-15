/*const myButton = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
const max = 6;
const min = 1;
myButton.onclick = function(){
    let randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNumber;
}
*/
const myButton = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
const max = 6;
const min = 1;

let audioCtx;

// Функция синтеза неонового звука броска
function playRollSound() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(240, now);
  osc.frequency.exponentialRampToValueAtTime(60, now + 0.2);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, now);

  gain.gain.setValueAtTime(0.3, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.2);
}

myButton.onclick = function() {
  // 1. Генерация случайного числа от 1 до 6
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // 2. Звуковой эффект
  playRollSound();

  // 3. Перезапуск CSS-анимации кручения
  myLabel.classList.remove("rolling");
  void myLabel.offsetWidth; // Трюк для мгновенного рефлоу DOM
  myLabel.classList.add("rolling");

  // 4. Запись нового значения
  myLabel.textContent = randomNumber;
}
