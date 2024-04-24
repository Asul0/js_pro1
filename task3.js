const { JSDOM } = require('jsdom');

// Создаем виртуальное окружение DOM
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"><div class="my-class"></div></div></body></html>');
const { document } = dom.window;

// 3) Рекурсивно найти элемент по классу в DOM
function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  
  for (let child of rootElement.children) {
    const foundElement = findElementByClass(child, className);
    if (foundElement !== null) {
      return foundElement;
    }
  }
  
  return null;
}

// Пример использования
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
