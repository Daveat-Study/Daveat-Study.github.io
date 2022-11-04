jQuery(function(){
    
    $(function(){
        $("#hide").click(
            function(){
                $("img").hide();
            }
        )
    }) // លាក់

    $(function(){
        $("#show").click(
            function(){
                $("img").show();
            }
        )
    }) // បង្ហាញ

    $(function(){
        $("#toggleHS").click(
            function(){
                $("img").toggle();
            }
        )
    }) // លាក់ឬបង្ហាញ អាស្រ័យលើស្ថានភាព

    $(function(){
        $("#fadeOut").click(
            function(){
                $("img").fadeOut(50000);
            }
        )
    }) // បន្ថយភាពច្បាស់

    $(function(){
        $("#fadeIn").click(
            function(){
                $("img").fadeIn(50000);
            }
        )
    }) // បន្ថែមភាពច្បាស់

    $(function(){
        $("#fadeIO").click(
            function(){
                $("img").fadeToggle(50000);
            }
        )
    }) // បន្ថយឬភាពច្បាស់

    $(function(){
        $("#fadeIo").click(
            function(){
                $("img").fadeTo(50000);
            }
        )
    }) // កំណត់ភាពច្បាស់ត្រឹម%

    $(function(){
        $("#slideUp").click(
            function(){
                $("img").slideUp(50000);
            }
        )
    }) // ម៊ូររូបភាពទុក

    $(function(){
        $("#slideDown").click(
            function(){
                $("img").slideDown(50000);
            }
        )
    }) // លារូបភាពវិញ

    $(function(){
        $("#slideUD").click(
            function(){
                $("img").slideToggle(50000);
            }
        )
    }) // ម៊ូរឬលារូបភាពវិញ
})