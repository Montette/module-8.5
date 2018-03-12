var button = document.getElementById("button");

button.addEventListener("click", function(){
    var base = document.getElementById("triangleBase").value;
    var height = document.getElementById("triangleHeight").value;
    var result = document.getElementById("resultValue");
    
    var area = base * height / 2;
    
    if (isNaN(area)){
        result.innerHTML = "Please, enter the correct data";
    } else {
        result.innerHTML = area + " cm <sup>2</sup>";
    };
    
});