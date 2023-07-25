const mediaQueryLg = window.matchMedia('(min-width:988px)')

if (mediaQueryLg.matches){
    var opacity = 0
document.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    if (opacity<1){
        if (value>50){
            var increaseOpacity = setInterval(()=>{
                document.querySelector('.navbar').style.backgroundColor = 'rgba(34,34,34,' + opacity + ')';
                opacity += 0.1
                console.log('increasing')
                if (opacity>=1){
                    console.log('stop increase')
                    clearInterval(increaseOpacity);
                    increaseOpacity = null
                }
            }, 100)
        }
        
    }    
});
document.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    if (value===0){
        increaseOpacity = null
        opacity = 0
        document.querySelector('.navbar').style.backgroundColor = 'rgba(34,34,34,' + 0 + ')'; 
    }
    
    
});
}

// CAROUSEL ANIMATION

var i = 0


$(".carousel-item1").turn({
    width: '200%',
    gradients: true,
    acceleration:true
  });

var flipPage = setInterval(()=>{
    if (i>=2){
        i = 0
        $(".carousel-item1").turn("previous").turn("previous");
    }
    else{
        i++
        $('.carousel-item1').turn('next')
    }}, '2500')
    