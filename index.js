function converter(){
    let gram = document.getElementById("grams").value;
    if(gram==""){
        alert("Insert any number first!!");
    }
    document.getElementById("KG").innerHTML = gram / 1000+"KG";
   
}