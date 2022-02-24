import Vue from "vue";

const menuItems = Vue.observable({
    sections: {
        'Бурегры': [
            {id: 1, name: 'JS Burger', price: 250, image: 'JS', count:0},
            {id: 2, name: 'Borsh Burger', price: 400, image: 'Borsh', count:0},
            {id: 3, name: 'Freckles Burger', price: 350, image: 'Freckles', count:0},
            {id: 4, name: 'Timon Burger', price: 150, image: 'Timon', count:0},
            {id: 5, name: 'React Burger', price: 300, image: 'React', count:0},
            {id: 6, name: 'Sun Burger', price: 200, image: 'Sun', count:0},
        ],
        'Закуски/напитки': [
            {id: 1, name: 'Coka', price: 50, image: 'Coka', count:0},
            {id: 2, name: 'Чайкофф', price: 70, image: 'Tea', count:0},
            {id: 3, name: 'Лукошко Фри', price: 75, image: 'Free', count:0},
            {id: 4, name: 'Нагиевцы', price: 100, image: 'Nag', count:0},
            {id: 5, name: 'Кофе', price: 150, image: 'Coffe', count:0},
            {id: 6, name: 'Гринч', price: 175, image: 'Grinch', count:0},
        ],
    },
    activeItem: null
})
export function changeActiveItem(id, name){
    menuItems.activeItem = menuItems.sections[name].find(item => item.id === id)
}
export  function closeCardProduct() {
    menuItems.activeItem = null
}

export function changeActiveItemCount(count){
    menuItems.activeItem.count +=count
}
export default menuItems