$(document).ready(() => {


    $('.fa-hamburger').click((e)=>{
        $(e.target).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    })

    $('nav ul li a').click(()=>{
        $('.fa-hamburger').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    })

    $('.dot1').click(()=>{
        $('.vid1').css('display','block');
        $('.vid2').css('display','none');
        $('.vid3').css('display','none');
    })
    $('.dot2').click(()=>{
        $('.vid2').css('display','block');
        $('.vid3').css('display','none');
        $('.vid1').css('display','none');
    })
    $('.dot3').click(()=>{
       $('.vid3').css('display','block')  ;
       $('.vid1').css('display','none');
        $('.vid2').css('display','none');
    })

    $(window).on('scroll load', ()=>{
        if($(window).scrollTop() > 10) {
            $('#header').addClass('header-active');
        }else {
            $('#header').removeClass('header-active');
        }
    })
    $('submitButton').on('click', () => {
        console.log("hello world")
    })


              })