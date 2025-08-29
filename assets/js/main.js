//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
        
    } 
    else{
        nav.classList.remove("scroll-on");
    }

}

//nav hide

 let navBar = document.querySelectorAll('.nav-link');
 let navCollapse = document.querySelector('.navbar-collapse.collapse');
 navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove('show');
    });
});

//counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return; // prevent null error
    
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 0, 100, 8000);
  counter("count2", 0, 44, 9000);
  counter("count3", 0, 750, 9000);
  counter("count4" , 0, 400,8000);
});


