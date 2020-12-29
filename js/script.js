
$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
     
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    },1250,'swing');
   
    e.preventDefault();
   });


    // parallax
    

     // jumbotron
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

   
      
    
            $('.jumbotron img').css({
                'transform' : 'translate(0px, '+ wScroll/6+'%)'
        });
        $('.jumbotron h1').css({
            'transform' : 'translate(0px, '+ wScroll/3+'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5+'%)'
    });

    //about
    if(wScroll > $('.about').offset().top - 200 ){
        $('.about .kemem').each(function(i){
    
            setTimeout(function(){
              $('.about .kemem').eq(i).addClass('kememMuncul');
    
            }, 300 * i );
          
        });
    
    
    }

  //skill
  if(wScroll > $('.skill').offset().top - 200 ){
    $('.skill .skills__data').each(function(i){

        setTimeout(function(){
          $('.skill .skills__data').eq(i).addClass('skillMuncul');

        }, 200 * i );

    });


       
    }

    // work

    if(wScroll > $('.work').offset().top - 200 ){
        $('.work .thumbnail').each(function(i){

            setTimeout(function(){
              $('.work .thumbnail').eq(i).addClass('muncul');

            }, 200 * i );

        });


       
    }

    // contact
    if(wScroll > $('.contact').offset().top - 200 ){
        $('.contact .lontong').each(function(i){

            setTimeout(function(){
              $('.contact .lontong').eq(i).addClass('lontongMuncul');

            }, 200 * i );

        });


       
    }


});