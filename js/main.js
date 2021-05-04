


// タイトル付箋
jQuery(function(){
  // jQuery('.appear').hover(function(){
      jQuery('.main-title').stop(true).animate( { width: 'toggle' }, 2000 );
      // $(".main-text").css({
        // display:block,
      });
 
// 落ちてくるアイコン

$(".animate__animated").waypoint({
  handler(direction) {
    if (direction === 'down') {
      // let isAnimate=$(this).data("animate");
      
      $(this.element).addClass("animate__bounceInDown");
      $(this.element).addClass("static");
      this.destroy();
    }
  },
      
  offset: '100%',
});


// 予約
$(function(){
  $(".datepicker").pickadate();
});
$('#time').pickatime({
  format: 'HH:i', // 24時間表記
  interval: 30,   // 表示間隔
  min: [10,00],   // 予約開始時間
  max: [20,00]    // 予約終了時間 
});
$('#submit').click(onClickSubmit);


// デフォルト予約人数
$(".people1").addClass("active");
let people1=$(".people1").text();
$(".real-text").val(people1);



// 人数選択
$(function(){
  
  $('.people').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });
  $(".people1").addClass("active");
});

$(".people").on("click",function(){
 
  let people=$(this).text();
  $(".real-text").val(people);
  
});


//予約ボタン押下処理
function onClickSubmit(){
// 人数の値を取得
  
  $('#submit_result').remove();
    var date = $('#date').val();
    var time = $('#time').val();
    var person=$(".real-text").val();

    if(date!='' && time !='' && person !=''){

        // TODO 予約をサーバに送信
        // params={};
        // prams.date=date;
        // params.time=time;
        // $.post("hoge.php",params,function(data){
            // ここにサーバ送信後の処理結果を書く
        // });

        //予約完了メッセージ
        $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p><strong>'+date+"の"+time+"、"+person+"名様で"+'</strong><br>予約を受け付けました。<br>ありがとうございます！</p></div>');            

    }else{
        //予約失敗メッセージ
        $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>予約日・予約時間を選択してください。</p></div>');            
    }
}

// スライダー

$(function(){

  $(document).ready(function(){ 
  
  $('.slider-wrapper').slick({
    autoplay:true,
    autoplaySpeed:3000,
     dots:true,
  });  
   });
  });

  // ページトップボタン
$(window).scroll(function () {
  var now = $(window).scrollTop();
  if (now > 1700) {
    $('.page-top').fadeIn("slow");
  } else {
    $('.page-top').fadeOut('slow');
  }
});


// #スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){ 
    var speed = 700; 
    var href= $(this).attr("href"); 
    var target = $(href == "#" || href == "" ? 'html' : href); 
    var position = target.offset().top; 
    $("html, body").animate({scrollTop:position}, speed, "swing"); 
    return true; 
  });
});
