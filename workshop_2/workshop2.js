const reverse =(str) => {
        if(!str) {
            return str;
        }
        else{
            return str.split("").reverse().join("");
        }
    }
    var name=reverse("Oussama");
    console.log(name) 