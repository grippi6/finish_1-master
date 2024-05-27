
<script >


export default{


}


</script>

<template>





    <header>        
     <div class="header-items__logo">
            <router-link :to="{name:'home'}" class="logo"><img src="../assets/img/logo.png" alt="Logo"></router-link>
            <div class='header-item_logo'>
                <div class='header-item_logo-1'>
                        <img src="../assets/img/MarkerMap.png" id="marker" alt="marker map">
                        <p><span>Томск</span> пр. Комсомольский 53</p>
                </div>
                <div class='header-item_logo-2'>
                    <div>
                        <img src="../assets/img/call.png" alt="call" id="call" >
                        <p>(3822) 67-95-85</p>
                    </div>
                    <div>
                        <img alt="email" src="../assets/img/email.png" id="email">
                        <p>elpro@shop.ru</p>
                    </div>
                </div>
                <div class="header-search">
                    <input class="header-input_search" type="text" placeholder="Поиск">
                     <button class="header-btn_search">
                        <img class="search" src="../assets/img/search.png" alt="search">
                     </button>
                </div>
            </div>
    </div>

<div class="wrapper">
    <div class="header-items__info">
        <button class="btn-header_info">Обратная связь</button> 
            <router-link :to="{name:'bascet'}" id="bascet">
                <p class="bascet-counter">{{0}}</p>
            </router-link>
            
            <div class="header-bascet_info">
              <p>Корзина</p>
              <p>{{0}} ₽</p>
            </div>
    </div>
</div>
    </header>

    
</template>


<style scoped>
header{
    width: 100%;
    height: 206px;
    border-bottom: 1px solid rgba(5, 204, 232, 1);
    background-color: rgba(5, 204, 232, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.wrapper{
    position: relative;
    flex-wrap: wrap;
}


.header-items__logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: 5em;
    color:#2044A3;
   
}


.logo{
    margin-right: 20px;
}

.header-item_logo-1 {
    margin-bottom: 10px;
}

.header-item_logo-2{
    margin-bottom: 12px;
}

.header-item_logo-1, .header-item_logo-2 ,
.header-item_logo-2 div {
    display: flex;
    flex-direction: row;
} 
.header-item_logo-2 div:first-child{
    margin-right: 15px;
}

.header-item_logo-1 > p> span {
   margin-right: 10px;
   margin-left: 2px;
}



#marker{
    width: 11.43px;
    height: 17.4px;
    margin-right: 10px;
}


#call{
    width: 15.30px;
    height: 20px;
    margin-right: 10px;
}

.header-item_logo-1{
    display: flex;
    flex-direction: row;
} 

#email{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.header-search{
display: flex;
flex-direction: row;
align-items: center;
}

.header-input_search {
width: 25em;
height: 36px;
border: none;
padding-left: 10px;
}
.header-btn_search{
    width: 36px;
   height: 36px;
   border: none;
   background: rgba(32, 68, 163, 1);
}

.header-items__info{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btn-header_info{
    background-color: red;
   background: rgba(32, 68, 163, 1);
   width: 150px;
   height: 30px;
   margin-right: 3em;
   color: white;
}
.header-bascet_info p:first-child {
margin-bottom: 10px;
}

.header-bascet_info p:last-child{
    font-size: 18px;
    color:#2044A3;
}

#bascet{
    width: 51px;
    height: 49px;
    background: none;
    background-image: url('../assets/img/icon-cart.jpg');
    margin-right: 20px;
    border: none;
   cursor: pointer;
}

.bascet-counter{
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 20px;
    right: 95px;
    background: rgba(32, 68, 163, 1);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
}
</style>