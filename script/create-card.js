document.addEventListener('DOMContentLoaded', () => {
    let mattressList = [];
    let pillowList = [];
    let commentList = [];

    
    fetch('./data/mattress.json')
        .then((response) => {
            return response.json();
        })
        .catch(() => console.error('expansion did not find'))
        .then((data) => {
            mattressList = data.mattressList;
            init("mattress");
        })
    fetch('./data/pillow.json')
        .then((response) => {
            return response.json();
        })
        .catch(() => console.error('expansion did not find'))
        .then((data) => {
            pillowList = data.mattressList;
            init("pillow");
        })

    const createCards = (product) => {
        const carouselName = document.getElementById(product);
        const list = carouselName.querySelector('.ant-carousel-list');
        list.addEventListener('click', (event) => {
            console.log(event.target.id)
        })
        const fragment = document.createDocumentFragment();
        if(product === "mattress") {
            mattressList.forEach(item => {
                let tempNode = document.createElement('li');
                tempNode.className = 'ant-carousel-element';
                tempNode.innerHTML = `<div class="card__wrapper">
                                    <h2 class="card__title">${item.name}</h2>
                                    <img id=${item.id} class="card__img" src="${item.imgPath}">
                                    <p class="price__wrapper">Цена: <span class="price">${item.price}</span></p>
                                    </div>`;
                fragment.appendChild(tempNode);
            })
            list.appendChild(fragment);
        } else if(product === "pillow") {
            pillowList.forEach(item => {
                let tempNode = document.createElement('li');
                tempNode.className = 'ant-carousel-element';
                tempNode.innerHTML = `<div class="card__wrapper pillow-card">
                <h2 class="card__title">${item.tradeMark}</h2>
                <p class="card__size">${item.size[0]} <span>x</span> ${item.size[1]} <span>x</span> ${item.size[2]}</p>
                <img id=${item.id} class="card__img" src="${item.imgPath}" alt="Pillow image">
                <h2 class="card__name">${item.name}</h2>
                <p class="price__wrapper">Цена: <span class="price">${item.price}</span></p>
            </div>`;
                fragment.appendChild(tempNode);
            })
            list.appendChild(fragment);
        }
    }
    const init = (product) => {
        createCards(product);
        new Ant(product);
    }
})