console.log("hello");
$(document).ready(function(){
   $(window).scroll(function(){
       if($(window).scrollTop() > 50){
  $(".header").addClass("fix");
}else{
    $(".header").removeClass("fix");
}


   })



})


//////////navbar//////////////
let bars = document.querySelector(".header .icon i.fa-bars");
let ul = document.querySelector(".header nav ul");
let times = document.querySelector(".header nav ul i.fa-times");


bars.addEventListener("click", () => {
    ul.classList.toggle("active");
})


times.addEventListener("click", () => {
   ul.classList.remove("active");
})

window.onscroll = () =>{
    ul.classList.remove("active");

}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1",
    spaceBetween: 10,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // $(document).ready(function(){
  //   $(window).scroll(function(){
  //   if( $(window).scrollTop() > 300){
  //        // alert("yes");
  //  $(".scroll-top i").show();
  //   }else{
  //    $(".scroll-top i").hide();
   
  //   }  
  //   })
  //  $(".scroll-top i").click(function(){
    
  //    $("html").animate({scrollTop:0});
  //  });
  //  });
  // // })



  $(document).ready(function () {

    $(window).scroll(function(){
let s = $(window).scrollTop();
console.log(s);

        if($(document).scrollTop() > 300){
$(".scroll-top").fadeIn();
        }else{
            $(".scroll-top").fadeOut();   
        }
    });
$(".scroll-top").click(function(){
$("html").animate({scrollTop :0},800);
})


    })



//     let tag = document.getElementsByTagName("data-title");
//     let search_box = document.getElementById("search-box");
//     let images = document.querySelectorAll(".portfolio-box .container .boxes .img");
//     search_box.oninput = () => {
//         images.forEach(hide=>hide.getElementsByClassName.display="none");
// let value = search_box .value;
// images.forEach(filter =>{
//     let tittle = filter.getAttribute("data-tittle");
// })
//     }











