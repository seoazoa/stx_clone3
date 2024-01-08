window.onload = function(){
    // 비주얼 이동 버튼 스크롤 기능
    const button = document.querySelector(".visual-bt")
  // 비주얼 클릭했을때 스크롤이 이동하는 함수를 실행한다.
  button.addEventListener("click" , function(){
    // button클릭했을때, 실행해라 . scrollToSection()을
    // scrollToSection()#business 영역으로 이동 해라
    scrollToSection("#business")
  })
  function scrollToSection(sectionId){
    // sectionId로 지정된 요소를 찾아서 section 변수에 저장
const section = document.querySelector(sectionId);
    if(section){
        // scrollIntoView()메서드는 부드러운 스크롤 효과를 적용하도록 지정합니다.
        section.scrollIntoView({behavior:"smooth"})
    }
  }

//   top 버튼 스크롤 기능
const topBtn = document.getElementById("top-btn");
topBtn.addEventListener("click" , function(even){
  even.preventDefault();
  // console.log(window.scrollY);
  if(window.scrollY == 0){
    window.scrollTo({
      top:9999,
      behavior:"smooth",
    })
  }
  else{}
})


}