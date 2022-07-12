
let ichimlikFanta = [
    {
        name: "Fanta 0.5L",
        sum: "5000 so`m",
        title: "1-dona",
        id: "0"
    },
    {
        name: "Fanta 1L",
        sum: "8000 so`m",
        title: "1-dona",
        id: "1"
    },
    {
        name: "Fanta 1.5L",
        sum: "10 000 so`m",
        title: "1-dona",
        id: "2"
    },

]

let ichimlikCola = [
    {
        name: "Coca-Cola 0.5L",
        sum: "5000 so`m",
        title: "1-dona"
    },
    {
        name: "Coca-Cola 1L",
        sum: "8000 so`m",
        title: "1-dona"
    },
    {
        name: "Coca-Cola 1.5L",
        sum: "10 000 so`m",
        title: "1-dona"
    },

]

let btnCard = document.querySelector('.card')
let text = document.querySelector('.text-cont')
    btnCard.addEventListener('click', (e) =>{
        let ind = e.target.dataset.index;
        console.log(ind);
        text.innerHTML = 
        `
            <h3>${ichimlikFanta[ind].id}</h3>
        `        
        console.log('ishladi');
    })
