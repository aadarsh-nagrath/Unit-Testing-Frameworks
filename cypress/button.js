// button.js
export function toggleText() {
    const element = document.querySelector('#text');
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
  }
  