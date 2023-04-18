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


//화면이 켜지자 마자 전체 내용을 프론트에 로드하는 ajax
// 레스토랑 정보가 담길 객체 itemObj, 객체 배열 itemList
var itemObj;
var itemList = [];

$(document).ready(function(){
    
 console.log("화면로드 함수 실행중")
  
  $.ajax({
    url: "load",
    type: "POST",
    dataType: "JSON",
    success: function (restList) {
        console.log(restList)

     // 1. 서버에서 받아온 데이터를 객체로 변환
     for (let i = 0; i < restList.length; i++) {
        let item = restList[i];
        let itemObj = {
          id: item.rest_id,
          name: item.rest_name,
          address: item.rest_Addr,
          lat: item.rest_x,
          lng: item.rest_y,
          category : item.rest_category
        };
        itemList.push(itemObj);
      }
    console.log("itemObj 객체 변환후:: "+itemObj);
    console.log("itemObj 문자열 변환:: "+ JSON.stringify(itemObj))
    

    render(itemList);
    
    },
    error : function(error){
      console.log("화면 로드 실패")
    }
  });

})

//레스토랑 목록이 생성될 div
var listContainer = document.getElementById("item-list");

function render(itemList){
    console.log("render() 실행중")
  for (let item of itemList) {
    var itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
        <div class="searchPage_res_item_info">
            <span class="item-name">${item.category}</span>
            <span class="item-category">${item.name}</span>
            <span class="item-address">${item.address}</span>
            <span><i class="fa-regular fa-heart"></i></span>
        </div>
        
    `;
    listContainer.appendChild(itemElement);

    }
}