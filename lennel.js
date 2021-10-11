function mehet() {
    var pont = 0;
    var a = document.getElementById('tarsasag').value;
    if(a==1){
        pont+=1;
    }
    else if(a==2){
        pont+=2;
    }
    else if(a==3){
        pont+=3;
    }
    else if(a==4){
        pont+=4;
    }

    var b = document.getElementById('szemelyiseg').value;
    if(b==1){
        pont+=1;
    }
    else if(b==2){
        pont+=2;
    }
    else if(b==3){
        pont+=3;
    }

    var c = document.getElementById('szin').value;
    if(c==1){
        pont+=4;
    }
    else if(c==2){
        pont+=2;
    }
    else if(c==3){
        pont+=1;
    }
    else if(c==4){
        pont+=3;
    }

    var d = document.getElementById('allat').value;
    if(d==1){
        pont+=4;
    }
    else if(d==2){
        pont+=2;
    }
    else if(d==3){
        pont+=1;
    }
    else if(d==4){
        pont+=3;
    }

    var e = document.getElementById('kitarto').value;
    if(e==1){
        pont+=2;
    }
    else if(e==2){
        pont+=1;
    }
    else if(e==3){
        pont+=3;
    }


    if(pont == 5){
    alert("Naruto Uzumaki");
    }
    else if(pont>5 && pont<11){
        alert("Sasuke Uchiha");
    }
    else if(pont>10 && pont<16){
        alert("Sakura Haruno");
    }
    else if(pont<15){
        alert("Hatake Kakashi")
    }

}

