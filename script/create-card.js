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

    const createCards = (product) => {
        const carouselName = document.getElementById(product);
        const list = carouselName.querySelector('.ant-carousel-list');
        list.addEventListener('click', (event) => {
            console.log(event.target.id)
        })
        const fragment = document.createDocumentFragment();
        if (product === "mattress") {
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
                tempNode.className = 'ant-carousel-element';

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
    const init = (product) => {
        createCards(product);
        new Ant(product);
    }
})