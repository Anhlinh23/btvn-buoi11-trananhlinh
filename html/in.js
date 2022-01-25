
/**
 * const change = document.getElementById("change");

let color = ["#f5e4e4","#f5ebcd","#e2eee2","#e8f0f0","#e8f0f0","#eae4d3","#e5e3df","#FF7F50","#FFA07A","#D8BFD8"]
let i = 0;

change.addEventListener("click", function(){

        i = 1 < color.length ? ++i : 0;
        document.querySelector("body").style.backgroundColor = color[i];
    })

 */


let btn = document.getElementById("btn");
btn.innerHTML = "0";

btn.addEventListener("click", function(){

        btn.innerHTML ++;

})