document.addEventListener('DOMContentLoaded', () => { // 현재 웹 페이지 안에서(document) 괄호 안에 있는 특정 이벤트가 발생했을 때 후에 따라오는 함수들을 실행함(addEventListener)
  const input = document.getElementById('textInput'); // 현재 웹 페이지 안에서(document) 괄호 안에 있는 특정 id(textInput)를 찾아, 변수 x 에 저장
  const btn = document.getElementById('colorBtn'); //
  const clearBtn = document.getElementById('clearBtn'); //
  const list = document.getElementById('itemList'); // 

  // colorBtn.className = 'aaa'

  function addItem() { // ?
    const text = input.value.trim(); // trim(): 문자열의 앞 뒤 공백을 제거함 - 입력받은 값(텍스트)에 앞 뒤 공백을 제거함
    if (text) {
      const li = document.createElement('li');

      const deleteBtn = document.createElement('button');
      //createElement()메서듸 역할 : html객체에서 <button>이라는 요소를 생성한다
      //이름은 deleteBtn으로
      deleteBtn.textContent = '×'; // 기본값을 'x'로 설정
      deleteBtn.className = 'deleteBtn'; // style.css 파일에서 인식될 수 있도록 class
      deleteBtn.addEventListener('click', () => { li.remove(); } ); //

      addEventListener
      li.appendChild(deleteBtn); // aaa
      li.appendChild(document.createTextNode(text + "*"));
      list.appendChild(li);
      input.value = '';
    }
  }

  btn.addEventListener('click', addItem);
  btn.addEventListener('dblclick', printConsole);

  function printConsole() {
    console.log("aaa")
  }

  input.addEventListener('keydown', (a) => { //aaa event 왜 들가있는쥐
    if (a.keyCode === 13) {
      console.log("사과",a)
      addItem();
    }
  });

  clearBtn.addEventListener('click', () => {
    list.innerHTML = '';
  });
});