const menu = [
    {
        id: 1,
        title: "Panquecas",
        category: "breakfast",
        price: 15.99,
        img: "./src/images/panquecas.jpg",
        desc: `Deliciosas panquecas,cobertas com calda caramelizada`
    },
    {
        id: 2,
        title: "Pão de Queijo",
        category: "breakfast",
        price: 2.99,
        img: "./src/images/pao-de-queijo.jpg",
        desc: `Pão de Queijo crocante por fora e macio por dentro`
    },
    {
        id: 3,
        title: "Strogonoff de Frango",
        category: "lunch",
        price: 19.99,
        img: "./src/images/estrogonofe.jpg",
        desc: `Strogonoff de frango, acompanhado de arroz e fritas`
    },
    {
        id: 4,
        title: "Galinhada",
        category: "lunch",
        price: 19.99,
        img: "./src/images/galinhada.jpg",
        desc: `Nossa deliciosa e tradicional galinhada`
    },
    {
        id: 5,
        title: "Feijoada",
        category: "lunch",
        price: 99.99,
        img: "./src/images/feijoada.jpg",
        desc: `Feijoada acompanhada de mais 5 acompanhamentos (Serve até 6 pessoas)`
    },
    {
        id: 6,
        title: "Filé com Fritas",
        category: "dinner",
        price: 24.99,
        img: "./src/images/file.jpg",
        desc: `Filé de primeira qualidade, acompanhado de batatas fritas deliciosas`
    },
    {
        id: 7,
        title: "Lasanha Bolonhesa",
        category: "dinner",
        price: 19.99,
        img: "./src/images/lasanha.jpg",
        desc: `Prato típico da culinária italiana, queridinho dos brasileiros.`
    },
    {
        id: 8,
        title: "Frango à parmegiana",
        category: "dinner",
        price: 24.99,
        img: "./src/images/frango.jpg",
        desc: `Frango grelhado à parmegiana, acompanhado de arroz e fritas`
    },
   
    {
        id: 9,
        title: "Refrigerante",
        category: "drinks",
        price: 5.99,
        img: "./src/images/refrigerante.jpg",
        desc: `Refrigerante gelado, acompanhado de gelo e limão`
    },
    {
        id: 10,
        title: "Sucos",
        category: "drinks",
        price: 15.99,
        img: "./src/images/suco.jpeg",
        desc: `Suco geladinho feito da polpa da fruta`
    },
    {
        id: 11,
        title: "Café",
        category: "drinks",
        price: 2.99,
        img: "./src/images/cafe.jpg",
        desc: `Café passado na hora, sem açúcar`
    },
    {
        id: 12,
        title: "Milkshake",
        category: "shakes",
        price: 2.99,
        img: "./src/images/shake.jpg",
        desc: `Delicioso Milkshake coberto com chantily (Disponível nos sabores: Chocolate, Morango e Caramelo)`
    },
    
]

const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')

//carregar itens
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu)
    displayMenuButtons()
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
  
          return `<article class="menu-item">
                      <img src=${item.img} alt=${item.title} class="photo">
                      <div class="item-info">
                          <header>
                              <h4>${item.title}</h4>
                              <h4 class="price">R$ ${item.price}</h4>
                          </header>
                          <p class="item-text">${item.desc}</p>
                      </div>
  
                  </article>`
      })
      displayMenu = displayMenu.join("")
      sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values,item) {
        if(!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    },['all'])
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("")
    container.innerHTML = categoryBtns
    const filterBtns = document.querySelectorAll('.filter-btn')
    
    // filtrar itens
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
         const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function(menuItem){
                if (menuItem.category === category) {
                 return menuItem
             }
         })
         if (category === 'all') {
            displayMenuItems(menu)
            } else {
             displayMenuItems(menuCategory)
            }
        })
    })
}