let _cart = document.querySelectorAll('.cart')
 let _from = document.querySelectorAll(".from")
 let _back = document.querySelectorAll(".back")
  let figureBox = document.querySelectorAll('.figure-box')

 // let _box = document.querySelectorAll("#box-img>.figure-box")

 
 //function __boxImg(){}

 for( let i = 0; i<figureBox.length; i++ ){

    console.log(i);
        figureBox[i].addEventListener("mouseover", function(){
     //   this.style.border = "2px solid red"
        // document.querySelector(this+ "img").style.transform = "perspective(1000px) rotateY(0deg) "
         document.querySelectorAll('.icon-heart')[i].style.transform = 'translateX(0px)'
        _from[i].style.transform = "perspective(1000px) rotateY(-180deg) "
        _back[i].style.transform = "perspective(1000px) rotateY(0deg) "
        _cart[i].style.transform = 'translate(-50%, 60%) translateX(0%)'
       }) 
       
     figureBox[i].addEventListener('mouseleave', ()=>{
        document.querySelectorAll('.icon-heart')[i].style.transform = 'translateX(70px)'
        _cart[i].style.transform = 'translate(-50%, 60%) translateX(-160%)'
        _from[i].style.transform = "perspective(1000px) rotateY(0deg) " 
        _back[i].style.transform = "perspective(1000px) rotateY(180deg)" 
     })

 }