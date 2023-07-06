import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const firstDelay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const position = i;
    const delay = firstDelay + (i-1) * step;

    createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
} 

// createPromise(2, 1500)
// .then(({ position, delay }) => {
//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
// });

