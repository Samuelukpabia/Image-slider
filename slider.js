const imageEl = document.querySelector(".image-container");
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const imgEls = document.querySelectorAll("img")

console.log(imgEls);

let currentImg = 1
let timeout;

nextEl.addEventListener("click", ()=>{
    currentImg++
    clearTimeout(timeout)
    updateIMG()
})

prevEl.addEventListener("click", ()=>{
    currentImg-- 
    clearTimeout(timeout)
    updateIMG()
})
updateIMG()

function updateIMG(){
    if(currentImg > imgEls.length){
        currentImg = 1
    }else if(currentImg < 1){
        currentImg = imgEls.length
    }
    imageEl.style.transform = `translateX(-${(currentImg - 1) * 300}px)`
    timeout = setTimeout(()=>{
        currentImg++
        updateIMG()
    }, 3000)

}