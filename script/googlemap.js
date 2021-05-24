let map;
const options = {
    center: { lat: 49.988358, lng: 36.232845 },
    zoom: 12,
}
function initMap() {
    const icon = {
        url: './image/png/marker.png',
        scaledSize: new google.maps.Size(30, 45)
    }
    map = new google.maps.Map(document.getElementById("map"), options);
    coords.forEach(item => {
        const marker = new google.maps.Marker({
            position: item.coordinates,
            map,
            title: item.name,
            icon
        });
        const getInfoContent = () => {
            let content = `
                <img src='${item.img}' alt='info map'>
                <h3>${item.name}</h3>
                <p>${item.address}</p>`
            item.tel.forEach(element => {
                content += `<p>${element}</p>`
            })
            return content
        }
        const info = new google.maps.InfoWindow({
            content: getInfoContent()
        })
        marker.addListener('click', () => {
            info.open(map, marker);
        })
    })
}

let coords = [
    {
        id: "map_1",
        name: "Дворец Спорта",
        img: "./image/jpeg/marker-img-01.webp",
        coordinates: { lat: 49.96642598034989, lng: 36.32373518650829 },
        address: "пр. Московский 257,<br>возле выхода м. “Дворец Спорта”",
        tel: ["(063) 371-06-37", "(098) 036-59-41", "(099) 103-36-14"],
        schedule: "с 10 до 19 без выходных<br>с 10 до 16 в воскресенье"
    },
    {
        id: "map_2",
        name: "Гагарина",
        img: "./image/jpeg/marker-img-02.webp",
        coordinates: { lat: 49.98048820152708, lng: 36.24509717218532 },
        address: "пр. Гагарина 20, возле выхода м. “Гагарина”",
        tel: ["(093) 154-33-20", "(098) 551-44-04", "(095) 721-36-33"],
        schedule: "с 10 до 19 без выходных<br>с 10 до 17 в воскресенье"
    },
    {
        id: "map_3",
        name: "“КЛАСС” на Клочковской",
        img: "./image/jpeg/marker-img-03.webp",
        coordinates: { lat: 50.002744, lng: 36.219002 },
        address: "ул. Клочковская 104А, супермаркет “КЛАСС”",
        tel: ["(093) 185-18-89", "(097) 916-55-64", "(066) 788-93-55"],
        schedule: "с 10 до 20 без выходных"
    },
    {
        id: "map_4",
        name: "Салтовка",
        img: "./image/jpeg/marker-img-04.webp",
        coordinates: { lat: 50.00153188014247, lng: 36.34028096826544 },
        address: "ТРК “Украина”<br>пр. Тракторостроителей 59/56,<br>нулевой этаж",
        tel: ["(093) 725-10-50", "(067) 697-43-20", "(099) 024-93-11"],
        schedule: "с 10 до 20 без выходных"
    },
    {
        id: "map_5",
        name: "Метро Индустриальная",
        img: "./image/jpeg/marker-img-05.webp",
        coordinates: { lat: 49.946632, lng: 36.3995449 },
        address: "Метро Индустриальная<br>проспект Московский 293А<br>ТЦ “Авангард”, нулевой этаж",
        tel: ["(063) 600-68-02", "(098) 058-49-55", "(050) 967-66-69"],
        schedule: "с 10 до 19 без выходных<br>с 9 до 19 в субботу<br>с 9 до 17 в воскресенье"
    },
    {
        id: "map_6",
        name: "Центральный рынок",
        img: "./image/jpeg/marker-img-06.webp",
        coordinates: { lat: 49.99396318789528, lng: 36.22440027116391 },
        address: "ст.м. Центральный рынок<br>ул. Рождественская 33<br>правое крыло здания рынка",
        tel: ["(093) 341-59-90", "(098) 704-28-08", "(066) 490-60-44"],
        schedule: "с 8 до 17 вт-сб<br>с 8 до 16 в воскресенье<br>понедельник выходной"
    },
    {
        id: "map_7",
        name: "Холодная гора",
        img: "./image/jpeg/marker-img-07.webp",
        coordinates: { lat: 49.98495881112977, lng: 36.18701750926345 },
        address: "ст.м. Холодная гора<br>Полтавский шлях 142а (возле РОСТа)",
        tel: ["(073) 011-55-85", "(068) 101-46-33", "(066) 618-96-50"],
        schedule: "с 10 до 19 без выходных<br>с 10 до 17 в субботу<br>с 10 до 16 в воскресенье"
    },
    {
        id: "map_8",
        name: "Песочин",
        img: "./image/jpeg/marker-img-08.webp",
        coordinates: { lat: 49.962444954673806, lng: 36.09592251059324 },
        address: "“Мобиль” площадь Торговая 2/4",
        tel: ["(073) 022-19-37", "(068) 29-23-259", "(099) 98-40-796"],
        schedule: "с 9 до 18 без выходных<br>в воскресенье до 17"
    },
]