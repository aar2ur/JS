const decreaseBT = document.getElementById("decreaseBT");
const resetBT = document.getElementById("resetBT");
const increaseBT = document.getElementById("increaseBT");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBT.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBT.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBT.onclick = function(){
    count *= 0;
    countLabel.textContent = count;
}

function playSound() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime); // Частота щелчка (в Гц)
  osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);

  gain.gain.setValueAtTime(0.15, audioCtx.currentTime); // Громкость
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.05);
}

// Привязываем к кнопкам:
increaseBT.addEventListener('click', playSound);
decreaseBT.addEventListener('click', playSound);
resetBT.addEventListener('click', playSound);