const dotButton = document.querySelector(".dots");
const filterContainer = document.querySelector(".filtersOptions");
const cars = document.querySelectorAll(".car-container");
const count = document.querySelector(".count");
const hearts = document.querySelectorAll(".fa-heart");

count.innerHTML = `There are ${cars.length} cars that match your criteria`

dotButton.addEventListener('click', ()=>{
    filterContainer.classList.toggle("open")
})


document.addEventListener('mouseup', (event) => {
    if (filterContainer.classList.contains("open")) {
        if(!filterContainer.contains(event.target))
            filterContainer.classList.remove("open")
    }
})

hearts.forEach((heart)=>{
    heart.addEventListener('click', ()=>{
        heart.classList.toggle("fas")
        heart.classList.toggle("far")
    })
})