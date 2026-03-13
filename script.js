let filterBtns = document.querySelector('.links');
let filterImg = document.querySelectorAll('.image');


const images = [
  "images/android1.jpg",
  "images/website1.jpg",
  "images/ios1.jpg",
  "images/android1.jpg",
  "images/website2.jpg",
  "images/android1.jpg"
]

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

let currentIndex = 0;

const showImage = ()=>{
  img1.src = images[currentIndex]
  img2.src = images[currentIndex + 1]
  img3.src = images[currentIndex +2]
}


let next = document.getElementById('next')
let prev = document.getElementById('prev')

const gallery = document.querySelector(".gallery");
const allImages = Array.from(gallery.querySelectorAll("img"));
let currentImages = allImages.slice(); // images currently visible
let index = 0;

// Show images based on index
function updateGallery(){
  const offset = -index * 210; // image width + margin
  gallery.style.transform = `translateX(${offset}px)`;
}

// Next button
next.addEventListener("click", ()=>{
  if(index < currentImages.length - 3) index++;
  updateGallery();
});

// Prev button
prev.addEventListener("click", ()=>{
  if(index > 0) index--;
  updateGallery();
});



// FILTERING

window.addEventListener('load', ()=>{
  filterBtns.addEventListener('click', (selected)=>{
    if(selected.target.classList.contains('link')){
      let filterName = selected.target.getAttribute('data-name');

      filterImg.forEach((image)=>{
        let imageCategory = image.getAttribute('data-name')

        if(filterName === imageCategory || filterName ==='all'){
          image.style.display = 'block';
        }else{
          image.style.display = 'none';
        }
      })

      
    }

    


  })
})


let fullImgCont = document.getElementById('showImageCont');
    let fullImg = document.getElementById('fullImg');

    function openFullImg(image){
      fullImgCont.style.display = 'flex';
      fullImg.src = image.src;
    }

    function closeFullImg(){
      fullImgCont.style.display = 'none';
    }