// button.spec.js
import { toggleText } from './button';

describe('Toggle Text Button', () => {
  beforeEach(() => {
    // Set up HTML for the test
    document.body.innerHTML = `
      <div>
        <button id="toggleBtn">Toggle</button>
        <div id="text" style="display: block;">Hello, World!</div>
      </div>
    `;
  });

  it('should hide the text when clicked', () => {
    const button = document.querySelector('#toggleBtn');
    button.click();
    const text = document.querySelector('#text');
    expect(text.style.display).to.equal('none');
  });

  it('should show the text when clicked again', () => {
    const button = document.querySelector('#toggleBtn');
    button.click(); // First click hides the text
    button.click(); // Second click shows the text
    const text = document.querySelector('#text');
    expect(text.style.display).to.equal('block');
  });
});
