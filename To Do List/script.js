document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add-button"); // 추가 버튼 요소 선택
  const todoInput = document.querySelector(".todo-input"); // 입력 필드 요소 선택
  const todoList = document.querySelector(".todo-list"); // 할 일 목록 요소 선택
  const alertBox = document.getElementById("alert"); // 알림 박스 선택

  // 할 일 항목 추가 함수
  const addTodoItem = () => {
    const todoText = todoInput.value.trim(); // 입력 필드의 텍스트 가져오기
    if (todoText) {
      if (todoList.children.length >= 8) {
        // 항목이 8개 이상일 때
        alertBox.style.display = "block"; // 알림 박스 표시
        setTimeout(() => {
          alertBox.style.display = "none"; // 2초 후 알림 숨김
        }, 2000);
        return; // 함수 종료
      }

      const todoItem = document.createElement("li"); // 새로운 리스트 아이템 생성

      const textSpan = document.createElement("span"); // 텍스트를 감싸는 span 생성
      textSpan.className = "todo-text"; // 클래스 설정
      textSpan.textContent = todoText; // 아이템의 텍스트 설정
      todoItem.appendChild(textSpan); // span을 아이템에 추가

      todoItem.style.opacity = "0"; // 초기 투명도 설정
      todoItem.style.transition = "opacity 1s"; // 투명도 전환 효과 설정

      todoList.appendChild(todoItem); // 할 일 목록에 아이템 추가
      setTimeout(() => {
        todoItem.style.opacity = "1"; // 아이템이 서서히 나타나도록 설정
      }, 10);

      const deleteButton = document.createElement("button"); // 삭제 버튼 생성
      deleteButton.textContent = "삭제"; // 삭제 버튼의 텍스트 설정
      deleteButton.className = "delete-button"; // 삭제 버튼의 클래스 설정

      // 삭제 버튼 클릭 이벤트 리스너 추가
      deleteButton.addEventListener("click", () => {
        todoItem.style.transition = "opacity 1s"; // 투명도 전환 효과 설정
        todoItem.style.opacity = "0"; // 아이템을 서서히 사라지게 설정
        setTimeout(() => {
          todoList.removeChild(todoItem); // 아이템을 목록에서 제거
        }, 1000);
      });

      todoItem.appendChild(deleteButton); // 삭제 버튼을 아이템에 추가
    }
    todoInput.value = ""; // 입력 필드 초기화
  };

  // 추가 버튼 클릭 이벤트 리스너 추가
  addButton.addEventListener("click", addTodoItem);
  // 입력 필드에서 엔터키 누를 시 할 일 추가
  todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTodoItem(); // 할 일 추가 함수 호출
    }
  });

  // 모바일 터치 이벤트 추가
  addButton.addEventListener("touchstart", () => {
    addButton.style.backgroundColor = "rgba(86, 186, 244, 0.8)"; // 터치 시 색상 변경
  });

  addButton.addEventListener("touchend", () => {
    addButton.style.backgroundColor = "rgb(165, 249, 165)"; // 원래 색상으로 복원
  });
});
