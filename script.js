const pictures = [
    {
        'id': '0001',
        'url': 'tree',
        'title': 'Tree'
    },
    {
        'id': '0002',
        'url': 'cards',
        'title': 'Cards'
    },
    {
        'id': '0003',
        'url': 'spaceship',
        'title': 'Spaceship'
    },
    {
        'id': '0004',
        'url': 'mic',
        'title': 'Mic'
    },
    {
        'id': '0005',
        'url': 'notebook',
        'title': 'Notebook'
    },
    {
        'id': '0006',
        'url': 'tablevase',
        'title': 'Vase'
    },
    {
        'id': '0007',
        'url': 'calendar',
        'title': 'Calendar'
    },
    {
        'id': '0008',
        'url': 'moon',
        'title': 'Moon'
    },
    {
        'id': '0009',
        'url': 'candle',
        'title': 'Candle'
    },
    {
        'id': '0010',
        'url': 'chair',
        'title': 'Chair'
    }
]
const imageContainer = document.getElementById('image-container')

function setAttributes(element, attributes) {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPics() {
    pictures.forEach((picture) => {
        const item = document.createElement('a')
        setAttributes(item, {
            href: 'img/'+picture.id+picture.url+'.png',
            target: '_blank'
        })

        const image = document.createElement('img')
        setAttributes(image, {
            src: 'img/'+picture.id+picture.url+'.png',
            alt: picture.title,
            title: picture.title
        })

        item.appendChild(image)
        imageContainer.appendChild(item)
    })
}

// On load
displayPics()