function show_result(){
    let c = document.querySelector("#c").value;
    let mt = document.querySelector ("#mt").value;
    let ph = document.querySelector ("#ph").value;
    let ja = document.querySelector ("#ja").value;
    let csa = document.querySelector ("#csa").value;
    let js = document.querySelector ("#js").value;
    let eng = document.querySelector ("#eng").value;


    let to = parseFloat(c) + parseFloat(mt) + parseFloat(ph) + parseFloat(ja) + parseFloat(csa) + parseFloat(js) + parseFloat(eng)

    document.querySelector(".to").innerHTML = to;

    let per = (to*100)/500;
    if(per >= 90){
        document.querySelector(".Gra").innerHTML = "a+";
    }
    else if(per >= 80){
        document.querySelector(".Gra").innerHTML = "a";
    }
    else if(per >= 70){
        document.querySelector(".Gra").innerHTML = "-a";
    }
    else if(per >= 60){
        document.querySelector(".Gra").innerHTML = "b";
    }
    else if(per >= 50){
        document.querySelector(".Gra").innerHTML = "c";
    }
    else if(per >= 33){
        document.querySelector(".Gra").innerHTML = "d";
    }
    else if(per <= 32){
        document.querySelector(".Gra").innerHTML = "Fail";
    }

    document.querySelector(".per").innerHTML = per;

    if (per> 32){
        document.querySelector(".result h2").innerHTML = "You are Pass";
    }




}