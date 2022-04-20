const contentCardTemplate = document.querySelector("[data-content-template]");
const contentCardContainer = document.querySelector("[data-content-container]");
const searchInput = document.querySelector("[data-search]");

let coffee = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    coffee.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
    })
})

function getCoffee() {
    const api_url = `https://wrapapi.com/use/alexjamison/homeit/all/latest?wrapAPIKey=HCTPpA928xiR2xIr0ON2HkyaS8gKg4Lz`
    fetch(api_url)
        .then(result =>{
            return result.json()
        })
        .then(data => {
            coffee = data.data.coffee.map(item => {
                const card = contentCardTemplate.content.cloneNode(true).children[0];
                const price = card.querySelector("[data-price]");
                const name = card.querySelector("[data-name]");
                const img = card.querySelector("[data-img]");
    
                price.textContent = item.price;
                name.textContent = item.name;
                img.innerHTML = item.img;
                contentCardContainer.append(card)
                return { name: item.name, price: item.price, element: card}
            })
        })
        .catch(err => {
            console.log(err)
        });
}

getCoffee()







    
