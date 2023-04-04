let counterValue = 0;
const value = document.querySelector('#value');
const plusBtn=document.querySelector('[data-action="increment"]');
const minusBtn=document.querySelector('[data-action="decrement"]');
const plus = () => {
counterValue += 1;
value.textContent = counterValue;
};
const minus= () => {
counterValue -= 1;
value.textContent = counterValue;
};
plusBtn.addEventListener('click',plus);
minusBtn.addEventListener('click',minus);