let productList

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
            pillowList = data.pillowList;
            init("pillow");
        })
    fetch('./data/comment.json')
        .then((response) => {
            return response.json();
        })
        .catch(() => console.error('expansion did not find'))
        .then((data) => {
            commentList = data.commentList;
            init("comment");
        })

    const togglChooseSize = () => {
        document.querySelector('.form__choose-size').classList.toggle('form__choose-size_hidden');
    }

    const closeModal = () => {
        let choose = document.querySelector('.form__choose-size') || null;
        document.querySelector('.order__form').reset();
        document.querySelector('.form__info').innerHTML = '';
        document.querySelector('.form__description').innerHTML = '';
        choose ? document.querySelector('.choose-wrapper').innerHTML = '' : null;
        document.getElementById('order__modal').classList.add('modal__conteiner_hidden');
        document.getElementById('cross').removeEventListener('click', closeModal);
        document.body.style.overflowY = 'auto';
    }

    const showModal = (id) => {
        createModal(id);
        document.getElementById('order__modal').classList.remove('modal__conteiner_hidden');
        document.getElementById('cross').addEventListener('click', closeModal);
        if (id.substring(0, 4) === "matt") {
            document.querySelector('.choose-size__btn > span').addEventListener('click', togglChooseSize)
        }
        document.body.style.overflowY = 'hidden';
    }
    const createCards = (product) => {
        const carouselName = document.getElementById(product);
        const list = carouselName.querySelector('.ant-carousel-list');
        if (product !== 'comment') {
            list.addEventListener('click', (event) => {
                showModal(event.target.id);
            })
        }
        const fragment = document.createDocumentFragment();
        if (product === "mattress") {
            mattressList.forEach(item => {
                let tempNode = document.createElement('li');
                tempNode.className = 'ant-carousel-element';
                tempNode.innerHTML = `<div class="card__wrapper">
                                    <h2 class="card__title">${item.name}</h2>
                                    <img id=${item.id} class="card__img" src="${item.imgPath}" alt="Mattress image">
                                    <p class="price__wrapper">Цена: <span class="price">${item.price}</span></p>
                                    </div>`;
                fragment.appendChild(tempNode);
            })
            list.appendChild(fragment);
        } else if (product === "pillow") {
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
        } else if (product === "comment") {
            commentList.forEach(item => {
                let tempNode = document.createElement('li');
                tempNode.className = 'ant-carousel-element comment-carousel-element';

                let content = '<div class="card__wrapper comment__wrapper"><div class="star-wrapper">';
                for (let i = 0; i < item.stars; i++) {
                    content += `<svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M22.1783 8.40121L15.4182 7.41874L12.3962 1.2923C12.3137 1.12456 12.1779 0.98877 12.0102 
                    0.906232C11.5895 0.698556 11.0783 0.87162 10.868 1.2923L7.84601 7.41874L1.08589 8.40121C0.899513 
                    8.42784 0.729111 8.5157 0.598648 8.64883C0.440926 8.81094 0.354013 9.02903 0.357009 9.25519C0.360004 
                    9.48135 0.452662 9.69707 0.614623 9.85494L5.50566 14.6235L4.35013 21.357C4.32303 21.5136 4.34037 
                    21.6747 4.40017 21.822C4.45996 21.9693 4.55983 22.0969 4.68845 22.1903C4.81707 22.2837 4.96929 
                    22.3392 5.12785 22.3505C5.28641 22.3618 5.44497 22.3285 5.58554 22.2543L11.6321 19.0752L17.6787 
                    22.2543C17.8438 22.3421 18.0355 22.3714 18.2192 22.3395C18.6824 22.2596 18.994 21.8203 18.9141 
                    21.357L17.7586 14.6235L22.6496 9.85494C22.7827 9.72448 22.8706 9.55408 22.8972 9.3677C22.9691 
                    8.90176 22.6443 8.47044 22.1783 8.40121Z" fill="#FFF500" />
                </svg>`;
                }
                for (let i = 0; i < (5 - item.stars); i++) {
                    content += `<svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M22.1783 8.40121L15.4182 7.41874L12.3962 1.2923C12.3137 1.12456 12.1779 0.98877 12.0102 
                    0.906232C11.5895 0.698556 11.0783 0.87162 10.868 1.2923L7.84601 7.41874L1.08589 8.40121C0.899513 
                    8.42784 0.729111 8.5157 0.598648 8.64883C0.440926 8.81094 0.354013 9.02903 0.357009 9.25519C0.360004 
                    9.48135 0.452662 9.69707 0.614623 9.85494L5.50566 14.6235L4.35013 21.357C4.32303 21.5136 4.34037 
                    21.6747 4.40017 21.822C4.45996 21.9693 4.55983 22.0969 4.68845 22.1903C4.81707 22.2837 4.96929 
                    22.3392 5.12785 22.3505C5.28641 22.3618 5.44497 22.3285 5.58554 22.2543L11.6321 19.0752L17.6787 
                    22.2543C17.8438 22.3421 18.0355 22.3714 18.2192 22.3395C18.6824 22.2596 18.994 21.8203 18.9141 
                    21.357L17.7586 14.6235L22.6496 9.85494C22.7827 9.72448 22.8706 9.55408 22.8972 9.3677C22.9691 
                    8.90176 22.6443 8.47044 22.1783 8.40121Z" fill="#DCDCDC" />
                </svg>`
                }
                content += `</div>
                <h2 class="comment__name">${item.name}</h2>
                <p class="comment__text">${item.description}</p>
                </div>`
                tempNode.innerHTML = content
                fragment.appendChild(tempNode);
            })
            list.appendChild(fragment);
        }
    }

    const createModal = (productId) => {
        const actionForm = document.querySelector('.order__form'); /* Form для указания адреса */

        const infoBlock = document.querySelector('.form__info');
        const descriptionBlock = document.querySelector('.form__description');

        let product,
            structure = "",
            chooseSize = "",
            descriptionText = "";

        if (productId.substring(0, 4) === "matt") {
            product = 'mattress';
            productList = mattressList.filter(item => item.id === productId)[0];
        } else if (productId.substring(0, 4) === "pill") {
            product = 'pillow';
            productList = pillowList.filter(item => item.id === productId)[0];
        }
        productList.structure.forEach(item => {
            structure += `<li>${item}</li>`
        })
        let contentInfo = `
        <img src="${productList.imgPath}" alt="${product} image" class="info__img">
            <div class="info__list-wrapper">
            <p class="info__caption">Состав:</p>
            <ul class="info__list">
                ${structure}
            </ul>
            </div>
        `
        if (product === 'mattress') {
            contentInfo += `
            <div class="info__propert-wrapper">
                <p class="info__caption">Высота:</p>
                <p class="info__propert">${productList.height}.</p>
                <p class="info__caption">Жесткость: </p>
                <p class="info__propert">${productList.hardness}</p>
            </div>
            <p class="info__addtext">${productList.addText}</p>`;

            chooseSize = `
            <div class="choose-wrapper">
            <div class="choose-size__btn"><span>Выбрать размер</span></div>
            <div class="form__choose-size form__choose-size_hidden">
                    <div class="choose-size__wrapper">`;

            productList.sizePrice.forEach((item, index) => {
                if (index == 0) {
                    chooseSize += `
                <input id="check0${index}" 
                type="radio" name="size" 
                value="${item.size}" 
                class="order__check"
                onclick="setPrice('${item.size}')" 
                checked>
                <label for="check0${index}" class="order__label">${item.size}</label>`
                } else {
                    chooseSize += `
                    <input id="check0${index}" 
                    type="radio" name="size" 
                    value="${item.size}" 
                    class="order__check"
                    onclick="setPrice('${item.size}')">
                    <label for="check0${index}" class="order__label">${item.size}</label>`
                }
            })
            chooseSize += `
            <input class="form-input" type="text" name="custom-size" placeholder="Написать размер">
            </div></div></div>`;
        }

        infoBlock.innerHTML = contentInfo;

        productList.description.forEach(item => {
            descriptionText += `<p class="order__text">${item}</p>`
        })
        let contentDescription = `
                    <h1 class="order__title">${productList.name}</h1>
                    ${descriptionText}
                    <p class="order__price">Цена: ${productList.price}</p>
                    <button type="submit" class="order__submit">Заказать</button>
        `
        descriptionBlock.innerHTML = contentDescription;
        descriptionBlock.insertAdjacentHTML('afterend', chooseSize);
    }
    const init = (product) => {
        createCards(product);
        new Ant(product);
    }
})

const setPrice = (size) => {
    let newPrice = productList.sizePrice.find(item => item.size === size).price;
    document.querySelector('p.order__price').innerText = `Цена: ${newPrice}`
}