// 요소 추가 appendChild() appendBefore() append() prepend()
const container = document.querySelector("#container")

const newDiv = document.createElement('div');
newDiv.textContent = "나의 눈물 속에서 넌 지금도, 사랑을 가르쳐주나. 혼자만의 사랑을~ 워우워~ 내가 사랑했던 것만큼, 너를 미워하면 잊을까. 이별까지도, 사랑할 수는 없었기에..";

// newDiv.setAttribute('id', 'greeting');
newDiv.id = 'greeting';
newDiv.className = 'welcome-message';

console.log(newDiv);
container.appendChild(newDiv)
////////////////////////////////////////////


// 요소 삭제 removeChild() remove()
const itemList = document.querySelector("#item-list")
console.log(itemList)
const removeItem = document.querySelector(".remove-me")
console.log(removeItem)
itemList.removeChild(removeItem)