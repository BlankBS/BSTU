const teamMembers = [
    {
        role: "Председатель",
        image: "images/studsovet/председатель.jpg",
        name: "Машкетов Антон"
    },
    {
        role: "Заместитель председателя", 
        image: "images/studsovet/замПредседателя.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Секретарь",
        image: "images/studsovet/секретарь.jpg", 
        name: "Сикорский Артём"
    },
    {
        role: "Староста 2 этажа", 
        image: "images/studsovet/староста2.jpg",
        name: "Евтушик Екатерина"
    },
    {
        role: "Заместитель старосты 2 этажа", 
        image: "images/studsovet/зам2.jpg",
        name: "Станчук Алевтина"
    },
    {
        role: "Староста 3 этажа", 
        image: "images/studsovet/староста3.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 3 этажа", 
        image: "images/studsovet/зам3.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 4 этажа", 
        image: "images/studsovet/староста4.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 4 этажа", 
        image: "images/studsovet/зам4.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 5 этажа", 
        image: "images/studsovet/староста5.jpg",
        name: "Сернацкий Владислав"
    },
    {
        role: "Заместитель старосты 5 этажа", 
        image: "images/studsovet/зам5.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 6 этажа", 
        image: "images/studsovet/староста6.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 6 этажа", 
        image: "images/studsovet/зам6.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 7 этажа", 
        image: "images/studsovet/староста7.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 7 этажа", 
        image: "images/studsovet/зам7.jpg",
        name: "Кудрявцева Анастасия"
    },
    {
        role: "Староста 8 этажа", 
        image: "images/studsovet/староста8.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 8 этажа", 
        image: "images/studsovet/зам8.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 9 этажа", 
        image: "images/studsovet/староста9.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 9 этажа", 
        image: "images/studsovet/зам9.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 10 этажа", 
        image: "images/studsovet/староста10.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 10 этажа", 
        image: "images/studsovet/зам10.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 11 этажа", 
        image: "images/studsovet/староста11.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 11 этажа", 
        image: "images/studsovet/зам11.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 12 этажа", 
        image: "images/studsovet/староста12.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 12 этажа", 
        image: "images/studsovet/зам12.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Староста 13 этажа", 
        image: "images/studsovet/староста13.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Заместитель старосты 13 этажа", 
        image: "images/studsovet/зам13.jpg",
        name: "Сикорский Артём"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбКозич.jpg",
        name: "Козич Анна"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбКозич.jpg",
        name: "Козич Анна"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбКозич.jpg",
        name: "Козич Анна"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбКозич.jpg",
        name: "Козич Анна"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбКозич.jpg",
        name: "Козич Анна"
    },
];

function CreateCard(cardData)
{
    return `
        <div class ="card">
            <h2>${cardData.role}</h2>
            <img src = "${cardData.image}" alt = "${cardData.role}">
            <span class = "name">${cardData.name}</span>
        </div>
    `;
}

function GenerateAllCards()
{
    const container = document.getElementById('cardsContainer');
    container.innerHTML = teamMembers.map(CreateCard).join('');
}

document.addEventListener('DOMContentLoaded', GenerateAllCards);