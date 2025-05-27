document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('textInput');
  const btn = document.getElementById('colorBtn');
  const clearBtn = document.getElementById('clearBtn');
  const list = document.getElementById('itemList');

  function addItem() {
    const text = input.value.trim();
    if (text) {
      const li = document.createElement('li');

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '×';
      deleteBtn.className = 'deleteBtn';
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });

      li.appendChild(deleteBtn);
      li.appendChild(document.createTextNode(text));
      list.appendChild(li);
      input.value = '';
    }
  }

  btn.addEventListener('click', addItem);

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  });

  clearBtn.addEventListener('click', () => {
    list.innerHTML = '';
  });
});