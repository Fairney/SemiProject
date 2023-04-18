<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>검색화면</title>
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    
    <link rel="stylesheet" href="${contextPath}/resources/css/style.css">
    <link rel="stylesheet" href="${contextPath}/resources/css/searchPage.css">
    <script src="https://kit.fontawesome.com/069a8eb008.js" crossorigin="anonymous"></script> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c688b78e98ee3a9f2f5caa4ab814474f&libraries=services"></script>

</head> 

	<jsp:include page ="/WEB-INF/views/common/header.jsp"/>
 
    <main>
       <div class="searchPage_map_area">

            <div class="searchPage_list_container">
                <div class="searchPage_searchArea">
                    <div>
                        <label>지역</label>
                        <div class="searchArea_location">
                            <button type="button">서울</button>
                            <button type="button">경기</button>
                            <button type="button">부산</button>
                            <button type="button">제주</button>
                            <button type="button">전국</button>
                        </div>
                    </div>

                    <div>
                        <label>카테고리</label>
                        <div class="searchArea_category">
                            <button type="button">한식</button>
                            <button type="button">양식</button>
                            <button type="button">베이커리</button>
                            <button type="button">카페</button>
                            <button type="button">기타</button>
                            <button type="button">전체</button>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-arrow-rotate-left" id="category_reset"></i>
                    </div>
                </div>



                <div class="searchPage_res_item_wrap">
                    <!-- 세트 -->
                    <div class="searchPage_res_item">
                        <img src="${contextPath}/resources/img/defaultResImg.png" alt="레스토랑이미지" width="10px">
                        <div class="searchPage_res_item_info">
                            <span>한식</span>
                            <span>비건레스토랑 어쩌구</span>
                            <span>서울특별시 강남구 테헤란로 110번길, 20 3층</span>
                            <span><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div class="searchPage_res_item_bottom"> </div>
                    <!-- 세트 end -->

                    <div class="searchPage_res_item">
                        <img src="${contextPath}/resources/img/defaultResImg.png" alt="레스토랑이미지" width="10px">
                        <div class="searchPage_res_item_info">
                            <span>한식</span>
                            <span>비건레스토랑 어쩌구</span>
                            <span>서울특별시 강남구 테헤란로 110번길, 20 3층</span>
                            <span><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div class="searchPage_res_item_bottom"> </div>

                    <div class="searchPage_res_item">
                        <img src="${contextPath}/resources/img/defaultResImg.png" alt="레스토랑이미지" width="10px">
                        <div class="searchPage_res_item_info">
                            <span>한식</span>
                            <span>비건레스토랑 어쩌구</span>
                            <span>서울특별시 강남구 테헤란로 110번길, 20 3층</span>
                            <span><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div class="searchPage_res_item_bottom"> </div>

                    <div class="searchPage_res_item">
                        <img src="${contextPath}/resources/img/defaultResImg.png" alt="레스토랑이미지" width="10px">
                        <div class="searchPage_res_item_info">
                            <span>한식</span>
                            <span>비건레스토랑 어쩌구</span>
                            <span>서울특별시 강남구 테헤란로 110번길, 20 3층</span>
                            <span><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div class="searchPage_res_item_bottom"> </div>

                    <div class="searchPage_res_item">
                        <img src="${contextPath}/resources/img/defaultResImg.png" alt="레스토랑이미지" width="10px">
                        <div class="searchPage_res_item_info">
                            <span>한식</span>
                            <span>비건레스토랑 어쩌구</span>
                            <span>서울특별시 강남구 테헤란로 110번길, 20 3층</span>
                            <span><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div class="searchPage_res_item_bottom"> </div>

                    <div class="searchPage_res_item">
                        <img src="${contextPath}/resources/img/defaultResImg.png" alt="레스토랑이미지" width="10px">
                        <div class="searchPage_res_item_info">
                            <span>한식</span>
                            <span>비건레스토랑 어쩌구</span>
                            <span>서울특별시 강남구 테헤란로 110번길, 20 3층</span>
                            <span><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
                    <div class="searchPage_res_item_bottom"> </div>

                </div>
                
                

            </div>

            <div class="searchPage_map_container" id="map"></div> 
            </div>
            </div>
    </main>
    
    <jsp:include page ="/WEB-INF/views/common/footer.jsp"/>
    <script src="${contextPath}/resources/js/main.js"></script>
    <script src="${contextPath}/resources/js/searchPage.js"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html>