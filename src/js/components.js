/*

// Компоненты

// Меню
function Menu(options) {
  let element = options.element;

  element.addEventListener("click", (event) => OpenMenu(event));

  function OpenMenu(event) {
    let closestTitle = event.target.closest('.menu__title');
    if (closestTitle && element.contains(closestTitle)) {
      toggle();
    }
  }

  function toggle() {
    element.classList.toggle('open');
  }
}

Menu({ element: document.getElementById('sweets-menu') });

// Таймер
class Clock {
  constructor(options) {
    this.element = options.element;
    this.timer = null;
  }

  render() {
    let date = new Date();
    this.element.querySelector('.date').innerHTML = date;
  }

  start() {
    this.render()
    this.timer = setInterval(() => { this.render() }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clock = new Clock({ element: document.getElementById('clock') });

// Голосовалка
class Voter {
  constructor(options) {
    this.element = options.element;
    this.voteElement = this.element.querySelector('.vote');

    this.element.addEventListener("click", (event) => { this.voteEvent(event) });
  }

  voteEvent(event) {
    if (event.target.closest('.down')) {
      this.voteDecriment();
    } else if (event.target.closest('.up')) {
      this.voteIncrement();
    }
  }

  voteIncrement() {
    this.voteElement.textContent = +this.voteElement.textContent + 1;
  }

  voteDecriment() {
    this.voteElement.textContent = +this.voteElement.textContent - 1;
  }

  voteDefaultvote(vote) {
    this.voteElement.textContent = +vote;
  }
}

let voter = new Voter({ element: document.getElementById('voter') });
voter.voteDefaultvote(10);

*/