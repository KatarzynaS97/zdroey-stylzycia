function obliczBMI() {
    let waga = document.getElementById("waga").value;
    let wzrost = document.getElementById("wzrost").value;
    let wynik = document.getElementById("wynik_bmi");

    let bmi = Math.round(waga / (wzrost * wzrost) * 10000);

    if (bmi < 18.5) {
        wynik.innerHTML = "<div class='TwojeBMI'>Twoje BMI wynosi: </div>" + "<div class='wynikBMI'" + bmi + "</div>" + " <div class='opisBMI'>Jesteś wychudzony. Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety</div>";
    }
    else if (bmi < 25) {
        wynik.innerHTML = "<div class='TwojeBMI'>Twoje BMI wynosi: </div>" + "<div class='wynikBMI'" + bmi + "</div>" + "<div class='opisBMI'> Prawidlowamasa ciała. Dbaj o bogatą w warzywa i owoce dietę oraz codzienną dawkę sportu, aby utrzymać dobrą formę.</div>";
    }
    else if (bmi <= 30) {
        wynik.innerHTML = "<div class='TwojeBMI'>Twoje BMI wynosi: </div>" + "<div class='wynikBMI_nadwaga'" + bmi + "</div>" + " <div class='opisBMI'> <b>Masz nadwagę.</b> Masa ciała jest zbyt wysoka. Rozważ konsultację lekarską i modyfikację stylu życia.</div>";
    }
    else if (bmi < 35) {
        wynik.innerHTML = "<div class='TwojeBMI'>Twoje BMI wynosi: </div>" + "<div class='wynikBMI_otylosc'" + bmi + "</div>" + " <div class='opisBMI'> Otyłość I stopnia.Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość I stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.</div>";
    }
    else if (bmi < 40) {
        wynik.innerHTML = "<div class='TwojeBMI'>Twoje BMI wynosi: </div>" + "<div class='wynikBMI_otylosc'" + bmi + "</div>" + " <div class='opisBMI'> Otyłość II stopnia. Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość II stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.</div>";
    }
    else if (bmi >= 40) {
        wynik.innerHTML = "<div class='TwojeBMI'>Twoje BMI wynosi: </div>" + "<div class='wynikBMI_otylosc'" + bmi + "</div>" + " <div class='opisBMI'>Otyłość III stopnia Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość III stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Być może konieczne będzie wprowadzenie leczenia farmakologicznego. Wdrażając zmiany i przestrzegając zaleceń lekarza, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.</div>";
    }
    else if (waga == 0 || wzrost == 0) {
        wynik.innerHTML = "<div class='TwojeBMI'>Wartości nie mogą być równe  0 </div>";
    }


}

function wyczysc() {
    let waga = document.getElementById("waga");
    let wzrost = document.getElementById("wzrost");

    waga.value = " ";
    wzrost.value = " ";

}


jQuery(function ($) {
    //zresetuj scrolla
    $.scrollTo(0);

    $('.scrollup').click(function () { $.scrollTo($('body'), 100); });

}

);

//pokaż podczas przewijania 
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
}

);
/*jQuery(function ($) {
    $.scrollTo(0);

    $('.scrollup_kalkulator').click(function () { $.scrollTo($('body'), 100); });

}

);

$(window).scroll(function () {
    if ($(this).scrollTop() > 10) $('.scrollup_kalkulator').fadeIn();
    else $('.scrollup_kalkulator').fadeOut();
}



);
jQuery(function ($) {
    $.scrollTo(0);

    $('.scrollup_piramida').click(function () { $.scrollTo($('body'), 100); });

}

);

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) $('.scrollup_piramida').fadeIn();
    else $('.scrollup_piramida').fadeOut();
}



);*/
