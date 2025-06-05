document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('textInput');
  const btn = document.getElementById('colorBtn');
  const clearBtn = document.getElementById('clearBtn');
  const list = document.getElementById('itemList'); // 각 요소들을 먼저 정의 및 담음

  function addItem() {
    const text = input.value.trim();
    if (text) { // 텍스트가 있을 떄 
      const li = document.createElement('li'); // 리스트 정의
      li.className = 'listItem'; //스타일 지정 가능

      const span = document.createElement('span'); // 텍스트 담는 곳
      span.textContent = text;

      const deleteBtn = document.createElement('button'); // '삭제' 버튼 기능 설정
      deleteBtn.textContent = '삭제'; // 버튼에 '삭제' 문구 추가
      deleteBtn.className = 'deleteBtn'; // 스타일 지정 가능?
      deleteBtn.addEventListener('click', () => { // '삭제'버튼 클릭 했을 때, 
        li.remove(); // li 지우기
      });

      li.appendChild(span); // 리스트 항목 안에 1. 텍스트 담고
      li.appendChild(deleteBtn); // 2. '삭제' 버튼을 담고
      list.appendChild(li); // 리스트에 위 두 항목을 추가함
      input.value = ''; // 입력 값이 빈칸이 되게 함?
    }
  }

  btn.addEventListener('click', addItem); //?

  input.addEventListener('keydown', (event) => { // 키를 누를 때
    if (event.key === 'Enter') { // 그 키가 엔터라면
      addItem(); // addItem() 실행
    }
  });

  clearBtn.addEventListener('click', () => { //클리어 버튼 클릭하면
    list.innerHTML = ''; // 리스트 삭제
  });
});