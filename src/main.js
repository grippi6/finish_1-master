import {createApp, ref} from 'vue'
import App from './App.vue'
import '../src/assets/Main.css'
import router from './router'
// <---


export const Pizzes = ref([]);


let id = 0;
export let Count = 0;
// export const idBasket = ref(id);
export function addPizza(name, title,price,imageUrl) {
    Pizzes.value.push({name, title, price,imageUrl, id: id++});
    Count++;
}
export function getCount(){
    if(Count>=0){
        console.log(Count);
        return Count;
    }
    else{
        console.error("Count < 0");
    }
}



export function DroppPizza(id){

    try {
        let index = Number(id);
        let pizza = {};
        Pizzes.value.forEach(element => {
            if(element.id == index)
            {
                pizza = element;
            }
        });
        return pizza;
    } catch(error) {
        console.log("ERROR " + error);
    }
}

export function removePizza(id) {
    Pizzes.value.forEach(element => {
        if(element.id === id){
                  Pizzes[element.id] = null;
        }
    });
}
// export function togglePizza(Pizzas) {
//     Pizzas.value.done = !Pizzas.value.done;
// }
// export function clearPizza() {
//     Pizzas.value = [];
// }


createApp(App).use(router).mount('#app')


