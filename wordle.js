const wordList = ['apple', 'beach', 'crash', 'dwell', 'eagle', 'frost', 'giant', 'horse', 'issue', 'jelly',
                  'kites', 'lemon', 'magic', 'novel', 'oasis', 'peace', 'quest', 'risen', 'sharp', 'treat',
                  'unity', 'vivid', 'winds', 'xenon', 'yield', 'zebra', 'angry', 'brave', 'chain', 'drift',
                  'earth', 'flash', 'grace', 'heart', 'input', 'joint', 'kneel', 'latch', 'model', 'nerve',
                  'outer', 'paint', 'quiet', 'rapid', 'solar', 'tiger', 'under', 'vapor', 'waste', 'xerox',
                  'yearn', 'zonal', 'adapt', 'blown', 'craft', 'drink', 'elbow', 'flown', 'grain', 'house',
                  'ivory', 'knock', 'layer', 'minor', 'north', 'paste', 'quill', 'river', 'stone', 'throw',
                  'urban', 'voice', 'watch', 'blaze', 'chest', 'dance', 'elect', 'fling', 'grasp', 'honor',
                  'imbue', 'jolly', 'knees', 'manor', 'nurse', 'point', 'roast', 'smell', 'trace', 'usher',
                  'vital', 'whale', 'arrow', 'clean', 'dried', 'entry', 'fruit', 'grape', 'hinge', 'image',
                  'light', 'pearl', 'white', 'queen', 'round', 'stare', 'table', 'valid', 'acorn', 'blade',
                  'chart', 'draft', 'extra', 'guide', 'inked', 'judge', 'label', 'maple', 'night', 'other',
                  'query', 'sugar', 'track', 'urged', 'angle', 'block', 'claim', 'drove', 'error', 'flood',
                  'grown', 'imbed', 'knife', 'large', 'never', 'posed', 'raise', 'uncut', 'vigor', 'awake',
                  'broke', 'cloth', 'drive', 'enter', 'flute', 'human', 'inner', 'merit', 'noise', 'place',
                  'roost', 'sweet', 'toast', 'until', 'water', 'xylem', 'armed', 'chase', 'drown', 'float',
                  'joker', 'print', 'yikes', 'allow', 'brick', 'clock', 'dress', 'green', 'intro', 'plane',
                  'alert', 'break', 'clamp', 'glare', 'stand', 'amber', 'check', 'empty', 'front', 'great',
                  'abide', 'adopt', 'align', 'alarm', 'amaze', 'anger', 'beard', 'blend', 'bless', 'bloom',
                  'board', 'brace', 'chair', 'charm', 'chime', 'clear', 'climb', 'cloud', 'crown', 'dared',
                  'doubt', 'drama', 'eager', 'event', 'focus', 'gloat', 'group', 'humor', 'loyal', 'morse',
                  'noble', 'occur', 'ocean', 'phase', 'power', 'reach', 'ready', 'score', 'serve', 'shape',
                  'shine', 'shock', 'shore', 'slice', 'speak', 'spend', 'spice', 'spine', 'split', 'start',
                  'store', 'taste', 'trend', 'trust', 'wheat', 'worry', 'write', 'alone', 'cease', 'crust',
                  'delve', 'dream', 'fable', 'frame', 'globe', 'grind', 'guest', 'hello', 'laser', 'loose',
                  'major', 'march', 'medal', 'melon', 'month', 'motto', 'patio', 'peach', 'plate', 'prize',
                  'quick', 'right', 'silly', 'storm', 'style', 'train', 'wrist', 'fight', 'heavy', 'media',
                  'merry', 'plumb', 'prove', 'share', 'short', 'smart', 'swing', 'trove', 'yummy', 'actor',
                  'angel', 'apply', 'baker', 'blink', 'blush', 'broth', 'bumpy', 'candy', 'crane', 'crisp',
                  'depot', 'early', 'flame', 'flour', 'fuzzy', 'gifts', 'glove', 'honey', 'ideal', 'juice',
                  'jumpy', 'liver', 'lunch', 'mango', 'mirth', 'moose', 'scout', 'sheep', 'skate', 'slate',
                  'smile', 'space', 'spoon', 'steep', 'tulip', 'union', 'willy', 'young', 'amend', 'badge',
                  'brisk', 'cause', 'chose', 'cliff', 'cloak', 'couch', 'crush', 'fever', 'fifty', 'glory',
                  'grove', 'guess', 'happy', 'haste', 'irate', 'lunar', 'plain', 'snack', 'stark', 'sunny',
                  'trunk', 'kiosk', 'salad', 'yacht', 'bliss', 'gleam'];

let randindex = Math.floor(Math.random() * 346);
let randomword = wordList[randindex];
let currentRow = 1;
const totalRows = 6;

enableRow(currentRow);

function submitGuess() {

  const currentInputs = document.querySelectorAll(`.line${currentRow} .charbox`);
  let guessedWord = '';

  currentInputs.forEach(input => guessedWord += input.value.toLowerCase());

  let letterCount = {};
  for (let letter of randomword) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  let result = Array(guessedWord.length).fill('gray');

  for (let i = 0; i < guessedWord.length; i++) {
    let inputBox = currentInputs[i];

    if (guessedWord[i] === randomword[i]) {
      result[i] = 'green';
      inputBox.style.backgroundColor = 'green';
      inputBox.style.color = 'black';
      letterCount[guessedWord[i]]--;
    }
  }

  for (let i = 0; i < guessedWord.length; i++) {
    let inputBox = currentInputs[i];

    if (result[i] !== 'green' && randomword.includes(guessedWord[i])) {
      if (letterCount[guessedWord[i]] > 0) {
        result[i] = 'orange';
        inputBox.style.backgroundColor = 'orange';
        inputBox.style.color = 'black';
        letterCount[guessedWord[i]]--;
      } else {
        inputBox.style.backgroundColor = 'gray';
        inputBox.style.color = 'white';
      }
    } else if (result[i] !== 'green') {
      inputBox.style.backgroundColor = 'gray';
      inputBox.style.color = 'white';
    }
  }

  if (guessedWord === randomword) {
    alert("Congratulations! You guessed the word!");
    resetGame();
    return;
  }

  disableRow(currentRow);
  currentRow++;

  if (currentRow > totalRows) {
    alert("You lost. The word was: " + randomword);
    resetGame();
  } else {
    enableRow(currentRow);
  }

}

function enableRow(row) {
  const rowInputs = document.querySelectorAll(`.line${row} .charbox`);
  rowInputs.forEach(input => {
    input.disabled = false;
    input.style.backgroundColor = '';
  });
  rowInputs[0].focus();
  addInputListeners(rowInputs);
}

function disableRow(row) {
  document.querySelectorAll(`.line${row} .charbox`).forEach(input => {
    input.disabled = true;
  });
}

function addInputListeners(inputs) {
  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === input.maxLength && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      
      if (!inputs.disabled) {
        input.style.borderColor = 'blue';
    }

    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && index > 0 && input.value === '') {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
        inputs[index - 1].style.backgroundColor = '';
        inputs[index - 1].style.borderColor = '';
      }

      if (e.key === 'Enter') {
        submitGuess();
      }

      if (e.key === 'Esc') {
        window.close();
      }
    });
  });
}

function showPopup() {
  alert(`Game Over. The correct answer was ${randomword}.`);
}

function resetGame() {
  currentRow = 1;
  document.querySelectorAll('.charbox').forEach(input => {
    input.value = '';
    input.disabled = true;
    input.style.backgroundColor = '';
    input.style.color = '';
    input.style.borderColor = '';
    document.body.style.backgroundColor = '';
  });
  enableRow(currentRow);
  clearAll();
}

document.querySelector('button').addEventListener('click', submitGuess);

function clearAll() {
  caches.keys().then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))));
  sessionStorage.clear();
  localStorage.clear();
  location.reload();
}

function delay(milliseconds) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
  }, milliseconds);
}