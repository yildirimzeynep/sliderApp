var models = [
  {
    name: "BMW",
    image: "img/bmw.jpg",
    link: "https://www.bmw.com.tr",
  },
  {
    name: "MAZDA",
    image: "img/mazda.jpg",
    link: "https://www.mazda.com.tr",
  },
  {
    name: "VOLVO",
    image: "img/volvo.jpg",
    link: "https://www.volvocars.com/tr",
  },
  {
    name: "SKODA",
    image: "img/skoda.jpg",
    link: "https://www.skoda.com.tr",
  },
  {
    name: "HONDA",
    image: "img/honda.jpg",
    link: "https://www.honda.com.tr",
  },
];
var index = 0;
var slaytCount = models.length;
showSlide(index);
var settings={
    duration:'5000',
    random: true,
}
var interval;
init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });
document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

  document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
  });
  document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
  });
function init(settings) {
    interval=setInterval(function() {
        var prev;
        if(settings.random){
            //random index
            do{
                index=Math.floor(Math.random()*slaytCount);

            }while(index==prev);     
            prev=index;      
        }else{
            //artan index
            if(slaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        console.log(index)
        showSlide(index);
    }, settings.duration);
}

function showSlide(i) {
    index=i;
    if(i<0){
        index=slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    document.querySelector(".card-link").setAttribute("href", models[index].link);
}
