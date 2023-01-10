var h2 = document.querySelector('h2');
var text = h2.innerHTML;
text = text.toLowerCase();
text = text.replaceAll("chó", "mèo");
var firstletter = text[0].toUpperCase();
console.log(firstletter.concat(text.slice(1)));

function ham1(){
    console.log("ham1");
}

//Anomymous -> Hàm ẩn danh
var ham2 = function ham2(){
    console.log("ham2");
}

ham1();
ham2();