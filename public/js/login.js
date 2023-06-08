const signBtn = document.querySelector('.signup-tab');
const loginBtn = document.querySelector('.login-tab');
const signLink = document.querySelector('.signup-tab a');
const loginLink = document.querySelector('.login-tab a');
const loginTab = document.querySelector('#login-tab-content');
const signTab = document.querySelector('#signup-tab-content');

console.log('hi')

signBtn.addEventListener('click', () => {
  if (!signLink.classList.contains('active')) signLink.classList.add('active');
  loginLink.classList.remove('active');
  if (!signTab.classList.contains('active')) signTab.classList.add('active');
  loginTab.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
  if (!loginLink.classList.contains('active')) loginLink.classList.add('active');
  signLink.classList.remove('active');
  if (!loginTab.classList.contains('active')) loginTab.classList.add('active');
  signTab.classList.remove('active');
});
