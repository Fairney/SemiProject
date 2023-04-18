// 지도 띄우기
let container = document.getElementById("map");
let mapOptions = {
    center: new kakao.maps.LatLng(37.499, 127.0327),
    level: 3
};

let map = new kakao.maps.Map(container, mapOptions);



// 1. 카태고리 버튼 값 가져오기
// 2. 버튼 클릭 시, 배열에 담고 효과 주기 + 다시 클릭하면 배열에서 빠지고 효과 삭제
let locationKeywordArr = []; 
let CategoryKeywordArr = [];
let locationBtn = document.querySelectorAll(".searchArea_location button")
let categoryBtn = document.querySelectorAll(".searchArea_category button")

for(let i = 0; i<locationBtn.length; i++){
    locationBtn[i].addEventListener("click", function(){
        if(locationBtn[i].style.backgroundColor === '' || locationBtn[i].style.backgroundColor === 'transparent'){
            locationBtn[i].style.backgroundColor = '#7c8b66';
            locationBtn[i].style.color = 'white';
            locationKeywordArr.push(locationBtn[i].textContent)
        } else {
            locationBtn[i].style.backgroundColor = 'transparent';
            locationBtn[i].style.color = '#7c8b66';
            const removeArr = locationKeywordArr.indexOf(locationBtn[i].textContent);
            if(removeArr > -1){
                locationKeywordArr.splice(removeArr, 1);
            };
        }
        console.log("locationKeywordArr: ", locationKeywordArr)
        });
}


for(let i = 0; i<categoryBtn.length; i++){
    categoryBtn[i].addEventListener("click", function(){
        console.log(categoryBtn[i].textContent)

        if(categoryBtn[i].style.backgroundColor === '' || categoryBtn[i].style.backgroundColor === 'transparent'){
            categoryBtn[i].style.backgroundColor = '#7c8b66';
            categoryBtn[i].style.color = 'white';
            CategoryKeywordArr.push(categoryBtn[i].textContent)
        } else {
            categoryBtn[i].style.backgroundColor = 'transparent';
            categoryBtn[i].style.color = '#7c8b66';
            const removeArr = CategoryKeywordArr.indexOf(categoryBtn[i].textContent);
            if(removeArr > -1){
                CategoryKeywordArr.splice(removeArr, 1);
            };
        }
        console.log("CategoryKeywordArr: ", CategoryKeywordArr)
        });
}

// 되돌리기 버튼 누르면 배열, 버튼효과 모두 리셋
const resestBtn = document.getElementById("category_reset");
resestBtn.addEventListener("click",function(){
    locationKeywordArr = [];
    CategoryKeywordArr = [];

    for(let i = 0; i<locationBtn.length; i++){
        locationBtn[i].style.backgroundColor = 'transparent';
        locationBtn[i].style.color = '#7c8b66';
    }
    
    for(let i = 0; i<categoryBtn.length; i++){
        categoryBtn[i].style.backgroundColor = 'transparent';
        categoryBtn[i].style.color = '#7c8b66';
    }
    
})


//화면이 켜지자 마자 전체 내용을 화면에 로드하는 ajax

$(document).ready(function(){
    
 console.log("화면로드 함수 실행중")
  
  $.ajax({
    url: "load",
    type: "POST",
    dataType: "JSON",
    success: function (restList) {

      if(restList !=null){
        restList = [];
      }
     

       let itemObj = restList;
       console.log(itemObj);
    
      // restList 배열의 각 요소들을 addTask() 함수로 전달하여 처리
      for (let item of itemObj) {

       console.log(item);
      }

    },
    error : function(error){
      console.log("화면 로드 실패")
    }
  });

})