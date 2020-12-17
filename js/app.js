// Scrolls
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.querySelector(".navbar").style.height = "55px";
        document.querySelector(".logo").style.width = "150px";
    }else{
        document.querySelector(".navbar").style.height = "70px"
        document.querySelector(".logo").style.width = "200px";
    }

    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
        document.querySelector(".active").style.left = "100px";   
    } else {
        document.querySelector(".active").style.left = "0";  
    }

    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
        if(document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000){
            document.querySelector(".active").style.left = "200px"; 
        }else{
            document.querySelector(".active").style.left = "100px"; 
        }
    }

    if(document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000){
        if(document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400){
            document.querySelector(".active").style.left = "300px"; 
        }else{
            document.querySelector(".active").style.left = "200px"; 
        }
    }
}