document.addEventListener('DOMContentLoaded', () => {
    let mattressList = [];
    let pillowList = [];
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
        const list = carouselName.querySelector('.ant-carousel-list')
        const fragment = document.createDocumentFragment();
        if(product === "mattress") {
            mattressList.forEach(item => {
                let tempNode = document.createElement('li');
                tempNode.className = 'ant-carousel-element';
                tempNode.innerHTML = `<div id=${item.id} class="card__wrapper">
                                    <h2 class="card__title">${item.name}</h2><img class="card__img"
                                    src="${item.imgPath}">
                                    <p class="price__wrapper">Цена: <span class="price">${item.price}</span></p>
                                    </div>`;
                fragment.appendChild(tempNode);
            })
            list.appendChild(fragment);
        } else if(product === "pillow") {
            pillowList.forEach(item => {
                let tempNode = document.createElement('li');
                tempNode.className = 'ant-carousel-element';
                tempNode.innerHTML = `<div id=${item.id} class="card__wrapper">
                                    <h2 class="card__title">${item.name}</h2><img class="card__img"
                                    src="${item.imgPath}">
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