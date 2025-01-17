const btn1 = document.querySelector('#my-btn')
btn1.addEventListener('click', function(){
    alert('어림도 없죠 ㅋㅋ')
})

const lec_btn = document.querySelector('#lecture')
lec_btn.addEventListener('click', function(){
    alert('강의 자료로 이동!')
    // location.href = "https://useful-pantry-930.notion.site/DOM-Event-Handling-17b611ac3a008090a4e8da6e9d68ae6a"
    window.open("https://useful-pantry-930.notion.site/DOM-Event-Handling-17b611ac3a008090a4e8da6e9d68ae6a")
})