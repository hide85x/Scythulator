$(function () {
    $('.reset').click(function () {
        location.reload()
    })
    let wynik = $('.wynik'),
        gwiazdka = $('.gwi'),
        zasoby = $('.zas'),
        hajs = $('.haj'),
        terytorium = $('.ter')



    // gwiazdka  
    $('.btn-gwi').click(function () {
        if ($('.gwiazdka input:first-of-type').val() != "" && $('.poz').hasClass('active')) {
            console.log(parseInt(gwiazdka.val(), 10))
            $('.wynik-gwi').text(eval(a * parseInt(gwiazdka.val(), 10)))
            $('.gwiazdka i:first-of-type').addClass('fa-spin')
        } else if (!$('.poz').hasClass('active')) {
            alert('Wybierz jeden z poziomów popularności!')
        } else if ($('.gwiazdka input:first-of-type').val() == "") {
            alert('Należy wypełnić wszystkie pola i je podliczyć!')
        }

    })
    //zasoby
    $('.btn-zas').click(function () {
        if ($('.zasoby input:first-of-type').val() != "" && $('.poz').hasClass('active')) {
            $('.wynik-zas').text(eval(b * Math.floor(parseInt(zasoby.val(), 10) / 2)))
            $('.zasoby i:first-of-type').addClass('fa-spin')
        }else if (!$('.poz').hasClass('active')) {
            alert('Wybierz jeden z poziomów popularności!')
        } else if ($('.zasoby input:first-of-type').val() == "") {
            alert('Należy wypełnić wszystkie pola i je podliczyć!')
        }


    })
    //terytory
    $('.btn-ter').click(function () {

        if ($('.terytorium input:first-of-type').val() != "" && $('.poz').hasClass('active')) {
            $('.wynik-ter').text(eval(c * parseInt(terytorium.val(), 10)))
            $('.terytorium i:first-of-type').addClass('fa-spin')
        } else if (!$('.poz').hasClass('active')) {
            alert('Wybierz jeden z poziomów popularności!')
        } else if ($('.terytorium input:first-of-type').val() == "") {
            alert('Należy wypełnić wszystkie pola i je podliczyć!')
        }


    })
    //money
    $('.btn-haj').click(function () {
        if ($('.hajs input:first-of-type').val() != "" && $('.poz').hasClass('active')) {
            $('.wynik-haj').text(parseInt(hajs.val(), 10))
            $('.hajs i:first-of-type').addClass('fa-spin')
        } else if (!$('.poz').hasClass('active')) {
            alert('Wybierz jeden z poziomów popularności!')
        } else if ($('.hajs input:first-of-type').val() == "") {
            alert('Należy wypełnić wszystkie pola i je podliczyć!')
        }


    })
    //final
    $('.btn').click(function () {
        if ($('.wynik').text() == 'WYNIK') {
            alert('Podlicz pozostałe pola!')
        }
    })

    $('.btn-fin').click(function () {
        if ($('input').val() != "" && $('.poz').hasClass('active')) {
            let wynikHaj = parseInt($('.wynik-haj').text(), 10),
                wynikTer = parseInt($('.wynik-ter').text(), 10),
                wynikZas = parseInt($('.wynik-zas').text(), 10),
                wynikGwi = parseInt($('.wynik-gwi').text(), 10)
            console.log(wynikHaj, wynikGwi, wynikTer, wynikZas)
            $('.wynik-fin').text(eval(wynikTer + wynikZas + wynikGwi + wynikHaj))
        } else if (!$('.poz').hasClass('active')) {
            alert('Wybierz jeden z poziomów popularności!')
        } else if ($('input').val() == "") {
            alert('Należy wypełnić wszystkie pola i je podliczyć!')
        
        } else if ($('input').each(function(){if(!$(this).val()){
            return false
        }})){
            alert('shieeieieieieieiet')
        }

    })

/*
$('.btn-fin).click(function(){
    $('input).each(function(){
        if(!$(this).val()){
            alert('Wpisz coś durniu!')
        }
    })
})

*/

    // popularnosc
    $('.poz').click(function () {

        $(this).addClass('active').siblings().removeClass('active')

        setPopularity()
        console.log(a, b, c)
    })


    // funckja do ustawiania popularnosci
    function setPopularity() {

        if ($('.poz1').hasClass('active')) {
            return (a = 3, b = 2, c = 1)
        } else if ($('.poz2').hasClass('active')) {
            return (a = 4, b = 3, c = 2)
        } else if ($('.poz3').hasClass('active')) {
            return (a = 5, b = 4, c = 3)
        } else {
            return ('dupa')
        }
    }


})