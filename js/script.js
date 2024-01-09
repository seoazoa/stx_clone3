window.onload = function () {
  // 비주얼 이동 버튼 스크롤 기능
  const button = document.querySelector(".visual-bt");
  // 비주얼 클릭했을때 스크롤이 이동하는 함수를 실행한다.
  button.addEventListener("click", function () {
    // button클릭했을때, 실행해라 . scrollToSection()을
    // scrollToSection()#business 영역으로 이동 해라
    scrollToSection("#business");
  });
  function scrollToSection(sectionId) {
    // sectionId로 지정된 요소를 찾아서 section 변수에 저장
    const section = document.querySelector(sectionId);
    if (section) {
      // scrollIntoView()메서드는 부드러운 스크롤 효과를 적용하도록 지정합니다.
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  //   top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(window.scrollY);

    if (window.scrollY == 0) {
      window.scrollTo({
        top: 2952,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = window.document.documentElement.scrollTop;
    if(scTop > 0){
      topBtnImg.classList.add("up")
    }
    else{
      topBtnImg.classList.remove("up")
    }
  });
  // 안내창 스크립트
  const body = document.querySelector("body")
  const modal = document.querySelector(".modal-wrap")
  modal.addEventListener("click" , function(){
    modal.style.display = "none"
    fadeout(modal)
  })

};