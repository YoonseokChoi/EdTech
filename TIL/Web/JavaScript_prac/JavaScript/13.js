// querySelector() : 단일 요소 선택
const firstParagraph = document.querySelector('#first');
console.log(firstParagraph.textContent); // 첫 번째 문단
const secondParagraph = document.querySelector('.second');
console.log(secondParagraph.textContent); // 두 번째 문단
console.log("-----------------------------")

// querySelectorAll() : 전체 요소 선택
const paragraphs = document.querySelectorAll("p")
console.log(paragraphs);
paragraphs.forEach((a, i) => {
    console.log(`[문단${i+1}] ${a.textContent}`)
})
console.log("-----------------------------")

// 텍스트 조작
const divTag = document.querySelector('#div-tag')
console.log(divTag.textContent)
divTag.textContent = "수정된 텍스트"
console.log(divTag.textContent)
console.log("-----------------------------")

// 속성 조작
const link = document.querySelector("#link")
console.log(link.getAttribute('href'));
link.setAttribute('href', "https://useful-pantry-930.notion.site/DOM-Select-Manipulate-17b611ac3a0080f1a53bf9086a8189e6")
// link.href = "https://useful-pantry-930.notion.site/DOM-Select-Manipulate-17b611ac3a0080f1a53bf9086a8189e6"
console.log(link.getAttribute('href'));
link.textContent = "DOM 요소 선택"
console.log(link.textContent)
link.className = "div-class"
console.log(link.className)
console.log("-----------------------------")

// 클래스 조작
const element = document.querySelector("#my-element")
console.log(element.className)
element.classList.add('active')
console.log(element.className)
element.classList.remove('inactive')
console.log(element.className)
element.classList.toggle('tog_class') // tog_class가 없으면 추가
console.log(element.className)
if (element.classList.contains('active')) {
    console.log('.active 존재');
}

// 스타일 조작
// el.style.backgroundColor = red

// 하늘아 제발 그 사람 가는 길 힘들지 않도록
// 혹시나 그 이름을 실수라도 부르지 않도록
// 사랑아 어떻게든 그 사람 보내주어야 한다
// 그게 누가 봐도 멋진 남자니까