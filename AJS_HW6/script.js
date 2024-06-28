
const url = "data.json";

async function fetchData(url1){
    try {
        const response = await fetch(url1);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener("DOMContentLoaded", async () => {    
    const data = await fetchData(url);
    const container = document.querySelector('.section_part_one_info');
    const arrCart = [];

    data.forEach(element => {
        container.insertAdjacentHTML('beforeend', `
            <article class="cart">            
            <div class="img_part_one">
                <img class="img_img_part_one" src="${element.img}" alt="">
                <div class="img_part_one-hover" >
                    <button class="btn_for_cart" btn-cart-id=${element.id}>Add to Cart</button>
                </div>
            </div>
                <div class="part_one_info_under_img">
                    <h4 class="h4_part_one">${element.title}</h4>
                    <p class="p_part_one">${element.description}</p>
                    <p class="price_part_one">$${element.price}</p>
                </div>                
            </article>
            `)
    });

    document.querySelectorAll('.btn_for_cart').forEach( (btn) =>{
    btn.addEventListener('click', () =>{
        const cartId = btn.getAttribute('btn-cart-id');         
        data.forEach(elem => {
            if(`${elem.id}` === cartId && !arrCart.includes(cartId)){            
                localStorage.setItem(`${elem.id}`, `${elem.title}`);
                const cartPage = document.querySelector('.buyer');                
                cartPage.insertAdjacentHTML('beforeend', `
                    <div class="card-for-cart on">
                    <h2 class="h2_cart">${elem.title}</h2>  
                    <p class="price_part_one">$${elem.price}</p> 
                    <div class="cart-btn">
                    <input type="number" value="1" min="1" max="10" />  
                    <button class="btn-del">X</button>  </div>                             
                    </div>`);
                };
            });
        arrCart.push(cartId);  
            document.querySelectorAll('.btn-del').forEach((btn) => {
                btn.addEventListener('click', () =>{
                    const divEl=document.querySelector('.card-for-cart');
                    
                    if (divEl.classList.contains('on')) {                       
                        divEl.remove();
                        }
                });
            });       
        });  
    });    
});








