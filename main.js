const teamMembers = [
    {
        role: "Председатель",
        image: "images/studsovet/председатель.jpg",
        name: "Машкетов Антон",
        tg: "https://t.me/learnedpegasus"
    },
    {
        role: "Заместитель председателя", 
        image: "images/studsovet/замПредседателя.jpg",
        name: "Отсутствует",
        tg: ""
    },
    {
        role: "Секретарь",
        image: "images/studsovet/секретарь.jpg", 
        name: "Сикорский Артём",
        tg: "https://t.me/BlankBS"
    },
    {
        role: "Начальник оперотряда",
        image: "images/studsovet/начопер.jpg", 
        name: "Авлас Кирилл",
        tg: "https://t.me/AVLASKIRILL"
    },
    {
        role: "Заместитель начальника оперотряда",
        image: "images/studsovet/замопер.jpg", 
        name: "Какадзе Анзор",
        tg: "https://t.me/anzor211111"
    },
    {
        role: "Староста 2 этажа", 
        image: "images/studsovet/староста2.jpg",
        name: "Евтушик Екатерина",
        tg: "https://t.me/katerinburger"
    },
    {
        role: "Заместитель старосты 2 этажа", 
        image: "images/studsovet/зам2.jpg",
        name: "Станчук Алевтина",
        tg: "https://t.me/alstnchk"
    },
    {
        role: "Староста 3 этажа", 
        image: "images/studsovet/староста3.jpg",
        name: "Волкович Александра",
        tg: "https://t.me/youdidn_tseeme"
    },
    {
        role: "Заместитель старосты 3 этажа", 
        image: "images/studsovet/зам3.jpg",
        name: "Юнго Амели",
        tg: "https://t.me/iammelk"
    },
    {
        role: "Староста 4 этажа", 
        image: "images/studsovet/староста4.jpg",
        name: "Войтко Ярослав",
        tg: "https://t.me/slavvoitko"
    },
    {
        role: "Заместитель старосты 4 этажа", 
        image: "images/studsovet/зам4.jpg",
        name: "Горбатенко Юлия",
        tg: "https://t.me/ww_juuls"
    },
    {
        role: "Староста 5 этажа", 
        image: "images/studsovet/староста5.jpg",
        name: "Сернацкий Владислав",
        tg: "https://t.me/what_i_s_love"
    },
    {
        role: "Заместитель старосты 5 этажа", 
        image: "images/studsovet/зам5.jpg",
        name: "Петрович Эмилия",
        tg: "https://t.me/kaerrujvj"
    },
    {
        role: "Староста 6 этажа", 
        image: "images/studsovet/староста6.jpg",
        name: "Шершнев Глеб",
        tg: "https://t.me/daviinchiii"
    },
    {
        role: "Заместитель старосты 6 этажа", 
        image: "images/studsovet/зам6.jpg",
        name: "Отсутствует",
        tg: ""
    },
    {
        role: "Староста 7 этажа", 
        image: "images/studsovet/староста7.jpg",
        name: "Кононович Юлия",
        tg: "https://t.me/kkJuliakk"
    },
    {
        role: "Заместитель старосты 7 этажа", 
        image: "images/studsovet/зам7.jpg",
        name: "Кудрявцева Анастасия",
        tg: "https://t.me/Astrelten"
    },
    {
        role: "Староста 8 этажа", 
        image: "images/studsovet/староста8.jpg",
        name: "Ковалевич Дарья",
        tg: "https://t.me/daria_kovalevich07"
    },
    {
        role: "Заместитель старосты 8 этажа", 
        image: "images/studsovet/зам8.jpg",
        name: "Сулима Ирина",
        tg: "https://t.me/ira200809"
    },
    {
        role: "Староста 9 этажа", 
        image: "images/studsovet/староста9.jpg",
        name: "Рыжко Татьяна",
        tg: "https://t.me/Tanyuha_31"
    },
    {
        role: "Заместитель старосты 9 этажа", 
        image: "images/studsovet/зам9.jpg",
        name: "Ханина Эвелина",
        tg: "https://t.me/ani_4_kina"
    },
    {
        role: "Староста 10 этажа", 
        image: "images/studsovet/староста10.jpg",
        name: "Гончарова Татьяна",
        tg: "https://t.me/taaaaanchik"
    },
    {
        role: "Заместитель старосты 10 этажа", 
        image: "images/studsovet/зам10.jpg",
        name: "Отсутствует",
        tg: ""
    },
    {
        role: "Староста 11 этажа", 
        image: "images/studsovet/староста11.jpg",
        name: "Полякова Валерия",
        tg: "https://t.me/leyanora"
    },
    {
        role: "Заместитель старосты 11 этажа", 
        image: "images/studsovet/зам11.jpg",
        name: "Отсутствует",
        tg: ""
    },
    {
        role: "Староста 12 этажа", 
        image: "images/studsovet/староста12.jpg",
        name: "Мильяненко Константин",
        tg: "https://t.me/kmlnko"
    },
    {
        role: "Заместитель старосты 12 этажа", 
        image: "images/studsovet/зам12.jpg",
        name: "Отсутствует",
        tg: ""
    },
    {
        role: "Староста 13 этажа", 
        image: "images/studsovet/староста13.jpg",
        name: "Дудкина Олеся",
        tg: "https://t.me/olesya_128"
    },
    {
        role: "Заместитель старосты 13 этажа", 
        image: "images/studsovet/зам13.jpg",
        name: "Отсутствует",
        tg: ""
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбКозич.jpg",
        name: "Козич Анна",
        tg: "https://t.me/malduranya"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбАбаничева.jpg",
        name: "Абаничева Александра",
        tg: "https://t.me/aleksapavall"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбПригодич.jpg",
        name: "Пригодич Татьяна",
        tg: "https://t.me/prigodicht"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбКирилюк.jpg",
        name: "Кирилюк Мария",
        tg: "https://t.me/livvmar"
    },
    {
        role: "Жилищно-бытовой сектор", 
        image: "images/studsovet/жбБаранова.jpg",
        name: "Баранова Яна",
        tg: "https://t.me/yaankkks"
    },
    {
        role: "Спортивный сектор", 
        image: "images/studsovet/спорт.jpg",
        name: "Алесько Арсений",
        tg: "https://t.me/tripl_A333"
    },
    {
        role: "Организационный сектор", 
        image: "images/studsovet/оргПолина.jpg",
        name: "Лазарева Полина",
        tg: "https://t.me/unnderwatter"
    },
    {
        role: "Организационный сектор", 
        image: "images/studsovet/оргЛера.jpg",
        name: "Рацыборская Валерия",
        tg: "https://t.me/lerarats"
    },
    {
        role: "Культурно-массовый сектор", 
        image: "images/studsovet/культВеретило.jpg",
        name: "Веретило Александр",
        tg: "https://t.me/oxatium"
    },
];

function CreateCard(cardData)
{
    return `
        <div class ="card">
            <h2>${cardData.role}</h2>
            <img src = "${cardData.image}" alt = "${cardData.role}">
            <span class = "name">${cardData.name}</span>
            <p>
            <a href = "${cardData.tg}">telegram</a>
        </div>
    `;
}

function GenerateAllCards()
{
    const container = document.getElementById('cardsContainer');
    container.innerHTML = teamMembers.map(CreateCard).join('');
}


document.addEventListener('DOMContentLoaded', GenerateAllCards);