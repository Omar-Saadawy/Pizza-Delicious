$(document).ready(function () {

    'use strict';

    var img1    = $("#show1"),
        img2    = $("#show2"),
        img3    = $("#show3"),
        img4    = $("#show4"),
        img5    = $("#show5"),
        img6    = $("#show6"),
        img7    = $("#show7"),

        hide1   = $("#hide1"),
        hide2   = $("#hide2"),
        hide3   = $("#hide3"),
        hide4   = $("#hide4"),
        hide5   = $("#hide5"),
        hide6   = $("#hide6"),
        hide7   = $("#hide7"),

        cont1   = $("#cont1"),
        cont2   = $("#cont2"),
        cont3   = $("#cont3"),
        cont4   = $("#cont4"),
        cont5   = $("#cont5"),
        cont6   = $("#cont6"),
        cont7   = $("#cont7"),

        foto1   = $("#foto1"),
        foto2   = $("#foto2"),
        foto3   = $("#foto3"),
        foto4   = $("#foto4"),

        search1 = $("#search1"),
        search2 = $("#search2"),
        search3 = $("#search3"),
        search4 = $("#search4"),

        bx1     = $("#bx1"),
        bx2     = $("#bx2"),
        bx3     = $("#bx3"),
        bx4     = $("#bx4"),
        bx5     = $("#bx5"),
        bx6     = $("#bx6"),
        bx7     = $("#bx7"),
        
        button  = $(".clearfix .buttons .col-md-12 button");

        cont1.hover(
        function (){
            bx1.css({"background-color":"#f8b500","transform":"rotate(135deg)","border":"1px solid #fac464"}),
            hide1.css("transform","rotate(-135deg)"),
            img1.addClass("hide"),
            hide1.removeClass("hide")
        }, function (){
            bx1.css({"background-color":"rgba(0,0,0,0)","transform":"rotate(0deg)","border":"1px solid #5c3d03"}),
            hide1.css("transform","rotate(0deg)"),
            hide1.addClass("hide"),
            img1.removeClass("hide")
        })

        cont2.hover(
            function (){
                bx2.css({"background-color":"#f8b500","transform":"rotate(135deg)","border":"1px solid #fac464"}),
                hide2.css("transform","rotate(-135deg)"),
                img2.addClass("hide"),
                hide2.removeClass("hide")
            }, function (){
                bx2.css({"background-color":"rgba(0,0,0,0)","transform":"rotate(0deg)","border":"1px solid #5c3d03"}),
                hide2.css("transform","rotate(0deg)"),
                hide2.addClass("hide"),
                img2.removeClass("hide")
            })


        cont3.hover(
            function (){
                bx3.css({"background-color":"#f8b500","transform":"rotate(135deg)","border":"1px solid #fac464"}),
                hide3.css("transform","rotate(-135deg)"),
                img3.addClass("hide"),
                hide3.removeClass("hide")
            }, function (){
                bx3.css({"background-color":"rgba(0,0,0,0)","transform":"rotate(0deg)","border":"1px solid #5c3d03"}),
                hide3.css("transform","rotate(0deg)"),
                hide3.addClass("hide"),
                img3.removeClass("hide")
            })







           // fotos
            // first one
            foto1.hover(
                function(){
                    search1.removeClass("hide").addClass("show")
                },function(){
                    search1.addClass("hide").removeClass("show")
                }
            )
            search1.hover(
                function(){
                    search1.removeClass("hide").addClass("show")
                },function(){
                    search1.addClass("hide").removeClass("show")
                }
            )
                // second one
            foto2.hover(
                function(){
                    search2.removeClass("hide").addClass("show")
                },function(){
                    search2.addClass("hide").removeClass("show")
                }
            )
            search2.hover(
                function(){
                    search2.removeClass("hide").addClass("show")
                },function(){
                    search2.addClass("hide").removeClass("show")
                }
            )
            // third one
            foto3.hover(
                function(){
                    search3.removeClass("hide").addClass("show")
                },function(){
                    search3.addClass("hide").removeClass("show")
                }
            )
            search3.hover(
                function(){
                    search3.removeClass("hide").addClass("show")
                },function(){
                    search3.addClass("hide").removeClass("show")
                }
            )
            // fourth one    
            foto4.hover(
                function(){
                    search4.removeClass("hide").addClass("show")
                },function(){
                    search4.addClass("hide").removeClass("show")
                }
            )
            search1.hover(
                function(){
                    search1.removeClass("hide").addClass("show")
                },function(){
                    search1.addClass("hide").removeClass("show")
                }
            )




            // second rotation    



            cont4.hover(
                function(){
                    bx4.css({"background-color":"#fac464","transform":"rotate(135deg)","border":"1px solid #fac464"}),
                    hide4.css("transform","rotate(-135deg)"),
                    img4.addClass("hide"),
                    hide4.removeClass("hide")
                }, function(){
                    bx4.css({"background-color":"rgba(0,0,0,0)","transform":"rotate(0deg)","border":"1px solid #fac464"}),
                    hide4.css("transform","rotate(0deg)"),
                    hide4.addClass("hide"),
                    img4.removeClass("hide")
                })

            cont5.hover(
                function(){
                    bx5.css({"background-color":"#fac464","transform":"rotate(135deg)","border":"1px solid #fac464"}),
                    hide5.css("transform","rotate(-135deg)"),
                    img5.addClass("hide"),
                    hide5.removeClass("hide")
                }, function(){
                    bx5.css({"background-color":"rgba(0,0,0,0)","transform":"rotate(0deg)","border":"1px solid #fac464"}),
                    hide5.css("transform","rotate(0deg)"),
                    hide5.addClass("hide"),
                    img5.removeClass("hide")
                })

            cont6.hover(
                function(){
                    bx6.css({"background-color":"#fac464","transform":"rotate(135deg)","border":"1px solid #fac464"}),
                    hide6.css("transform","rotate(-135deg)"),
                    img6.addClass("hide"),
                    hide6.removeClass("hide")
                }, function(){
                    bx6.css({"background-color":"rgba(0,0,0,0)","transform":"rotate(0deg)","border":"1px solid #fac464"}),
                    hide6.css("transform","rotate(0deg)"),
                    hide6.addClass("hide"),
                    img6.removeClass("hide")
                })

            cont7.hover(
                function(){
                    bx7.css({"background-color":"#fac464","transform":"rotate(135deg)","border":"1px solid #fac464"}),
                    hide7.css("transform","rotate(-135deg)"),
                    img7.addClass("hide"),
                    hide7.removeClass("hide")
                }, function(){
                    bx7.css({"background-color":"rgba(0,0,0,0)","transform":"rotate(0deg)","border":"1px solid #fac464"}),
                    hide7.css("transform","rotate(0deg)"),
                    hide7.addClass("hide"),
                    img7.removeClass("hide")
                })
                    

                $(".num").counterUp({delay:10, time:1000});


                button.click(function(){
                    $(this).addClass("active");
                    $(".buttons").find("button").not($(this)).removeClass("active");
                    $(".tabbs").find(".row").not($(this).data('order')).addClass("d-none");
                    $($(this).data('order')).removeClass("d-none")
                });



  });