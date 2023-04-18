// header
let textname = document.getElementById('textname');
let baner1 = document.getElementById('baner1');
let baner2 = document.getElementById('baner2');
let baner3 = document.getElementById('baner3');
let loadingline1 = document.getElementById('loadingline1');
// sale
let salepic = document.getElementById('saledoor-pic');
let salecontent = document.getElementById('sale-content');
//service
let servicepic = document.getElementById('servicedoor-pic');
let servicecontent = document.getElementById('service-content');
//body
let bodypic = document.getElementById('bodydoor-pic');
let bodycontent = document.getElementById('body-content');
window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    // header
    textname.style.marginTop = value * 1.0 + 'px';
    baner1.style.marginRight = value * 0.5 + 'px';
    baner2.style.marginBottom = value * 1.5 + 'px';
    baner3.style.marginLeft = value * 0.5 + 'px';
    loadingline1.style.width = value * 4.0 + 'px';
    // sale
    salepic.style.left = value * 0.032 + '%';
    salecontent.style.right = value * 0.032 + '%';
    //service
    servicepic.style.right = value * 0.03 + '%';
    servicecontent.style.left = value * 0.015 + '%';
    //body
    bodypic.style.left = value * 0.024 + '%';
    bodycontent.style.right = value * 0.024 + '%';
    breakmove(value);
})
// function break move
function breakmove(valuescroll) {
    if (valuescroll > 316) {
      salepic.style.left = 10 + '%';
      salecontent.style.right = 10 + '%';
      if (valuescroll > 600) {
        servicepic.style.right = 18 + '%';
        servicecontent.style.left = 9 + '%';
        if (valuescroll > 968) {
          bodypic.style.left = 23 + '%';
          bodycontent.style.right = 23 + '%';
        }
      }
    }
    return
 }
