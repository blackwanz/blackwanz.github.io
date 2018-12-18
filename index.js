 $(document).ready(function() {
var x = "x" //inisialisasi x 
var o = "o" //inisialisai o
var count = 0; //inisialisasi count
var o_win = 0; //inisialisasi o_win
var x_win = 0; // inisialisasi x_win

$('#game li').click(function(){






 //jika memiliki 3 kelas beruntun/diagonal =0 maka 0 menang,
  if (  $("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') && $("#four").hasClass('o')
|| $("#five").hasClass('o') && $("#six").hasClass('o') && $("#seven").hasClass('o') && $("#eight").hasClass('o') 
|| $("#nine").hasClass('o') && $("#ten").hasClass('o') && $("#eleven").hasClass('o') && $("#twelve").hasClass('o') 
|| $("#thirteen").hasClass('o') && $("#fourteen").hasClass('o') && $("#fiveteen").hasClass('o') && $("#sixteen").hasClass('o') 
|| $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') && $("#thirteen").hasClass('o') 
|| $("#two").hasClass('o') && $("#six").hasClass('o') && $("#ten").hasClass('o') && $("#fourteen").hasClass('o') 
|| $("#three").hasClass('o') && $("#seven").hasClass('o') && $("#eleven").hasClass('o') && $("#fiveteen").hasClass('o')
|| $("#four").hasClass('o') && $("#eight").hasClass('o') && $("#twelve").hasClass('o') && $("#sixteen").hasClass('o')  
|| $("#one").hasClass('o') && $("#six").hasClass('o') && $("#eleven").hasClass('o') && $("#sixteen").hasClass('o')
|| $("#four").hasClass('o') && $("#seven").hasClass('o') && $("#ten").hasClass('o') && $("#thirteen").hasClass('o')

)
   {//alert o pemenang dan akan reset game
     alert('O has won the game. Start a new game')
     $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
   }
   // lainya jika memilii 3 kelas beruntun/diagonal =x maka x menang,
  else if (   $("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') && $("#four").hasClass('x')
|| $("#five").hasClass('x') && $("#six").hasClass('x') && $("#seven").hasClass('x') && $("#eight").hasClass('x') 
|| $("#nine").hasClass('x') && $("#ten").hasClass('x') && $("#eleven").hasClass('x') && $("#twelve").hasClass('x') 
|| $("#thirteen").hasClass('o') && $("#fourteen").hasClass('x') && $("#fiveteen").hasClass('o') && $("#sixteen").hasClass('x') 
|| $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') && $("#thirteen").hasClass('x') 
|| $("#two").hasClass('x') && $("#six").hasClass('x') && $("#ten").hasClass('x') && $("#fourteen").hasClass('x') 
|| $("#three").hasClass('x') && $("#seven").hasClass('x') && $("#eleven").hasClass('x') && $("#fiveteen").hasClass('x')
|| $("#four").hasClass('x') && $("#eight").hasClass('x') && $("#twelve").hasClass('x') && $("#sixteen").hasClass('x')  
|| $("#one").hasClass('x') && $("#six").hasClass('x') && $("#eleven").hasClass('x') && $("#sixteen").hasClass('x')
|| $("#four").hasClass('x') && $("#seven").hasClass('x') && $("#ten").hasClass('x') && $("#thirteen").hasClass('x')
)
  { // x pemenang  dan  game akan rese
   alert('X wins has won the game. Start a new game')
   $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')    
  }
  //lainnya jika count mencapai ==9 
  else if (count == 9)
  {//alert seri dan akan restart
    alert('Its a tie. It will restart.')
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
    count = 0
  }


//jika 
  else if ($(this).hasClass('disable'))
  {
    alert('Already selected')
  }

  else if (count%2 == 0)
  {
      count++
      $(this).text(o)
      $(this).addClass('disable o btn-primary')
        if (  $("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') && $("#four").hasClass('o')
|| $("#five").hasClass('o') && $("#six").hasClass('o') && $("#seven").hasClass('o') && $("#eight").hasClass('o') 
|| $("#nine").hasClass('o') && $("#ten").hasClass('o') && $("#eleven").hasClass('o') && $("#twelve").hasClass('o') 
|| $("#thirteen").hasClass('o') && $("#fourteen").hasClass('o') && $("#fiveteen").hasClass('o') && $("#sixteen").hasClass('o') 
|| $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') && $("#thirteen").hasClass('o') 
|| $("#two").hasClass('o') && $("#six").hasClass('o') && $("#ten").hasClass('o') && $("#fourteen").hasClass('o') 
|| $("#three").hasClass('o') && $("#seven").hasClass('o') && $("#eleven").hasClass('o') && $("#fiveteen").hasClass('o')
|| $("#four").hasClass('o') && $("#eight").hasClass('o') && $("#twelve").hasClass('o') && $("#sixteen").hasClass('o')  
|| $("#one").hasClass('o') && $("#six").hasClass('o') && $("#eleven").hasClass('o') && $("#sixteen").hasClass('o')
|| $("#four").hasClass('o') && $("#seven").hasClass('o') && $("#ten").hasClass('o') && $("#thirteen").hasClass('o')

)
        {
       alert('O wins')
       count = 0
       o_win++
$('#o_win').text(o_win)
        }
  }
   else  
  {
      count++
    $(this).text(x)
    $(this).addClass('disable x btn-info')
       if (
   $("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') && $("#four").hasClass('x')
|| $("#five").hasClass('x') && $("#six").hasClass('x') && $("#seven").hasClass('x') && $("#eight").hasClass('x') 
|| $("#nine").hasClass('x') && $("#ten").hasClass('x') && $("#eleven").hasClass('x') && $("#twelve").hasClass('x') 
|| $("#thirteen").hasClass('o') && $("#fourteen").hasClass('x') && $("#fiveteen").hasClass('o') && $("#sixteen").hasClass('x') 
|| $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') && $("#thirteen").hasClass('x') 
|| $("#two").hasClass('x') && $("#six").hasClass('x') && $("#ten").hasClass('x') && $("#fourteen").hasClass('x') 
|| $("#three").hasClass('x') && $("#seven").hasClass('x') && $("#eleven").hasClass('x') && $("#fiveteen").hasClass('x')
|| $("#four").hasClass('x') && $("#eight").hasClass('x') && $("#twelve").hasClass('x') && $("#sixteen").hasClass('x')  
|| $("#one").hasClass('x') && $("#six").hasClass('x') && $("#eleven").hasClass('x') && $("#sixteen").hasClass('x')
|| $("#four").hasClass('x') && $("#seven").hasClass('x') && $("#ten").hasClass('x') && $("#thirteen").hasClass('x')
)
        {
     alert('X wins')
     count = 0
     x_win++
     $('#x_win').text(x_win)
        }
  }

   });

    $("#reset").click(function () {
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
    count = 0

  });
});


