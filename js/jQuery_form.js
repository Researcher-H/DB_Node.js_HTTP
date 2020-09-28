//ミスのチェックをするための変数です。
//true = ミスがある false = ミスがない
//letはvarのような変数を定義する記述ですが、varより呼び出せる場所が限られます。
let mailmiss = "true";
let namemiss = "true";
  
//フォームで入力した内容を入れておく箱です。
let mailarea = "";
let namearea = "";
let textboxarea = "";
  
//確認ボタンを押した時の処理です。
$(".submitarea").click(function(){

    //エラーメッセージを一旦削除
    $(".missmailbox").text("");
    $(".missnamebox").text("");
          
    //エラーの確認変数を一旦trueにリセット
    mailmiss = "true";
    namemiss = "true";

    //それぞれの入力内容を変数に格納。
    mailarea = $("input[name='mailarea']").val();
    namearea = $("input[name='namedata']").val();
    textboxarea = $("textarea[name='textboxdata']").val();
      
    //入力内容にエラーがないかを確認するバリデーションチェックです。
    if(!mailarea){
        //もし、mailareaに何も入っていなかったら、下記のメッセージがmissmailboxに入ります。
        $(".missmailbox").text("メールアドレスが入力されていません。");   
    }else if(mailarea.match(/.+@.+\..+/)==null){
        //もし、mailareaに入力された内容がメールアドレスじゃなければ、下記のメッセージ。
        //「/.+@.+\..+/」は正規表現と言われ、これでメールアドレスの形を確認しています。
        $(".missmailbox").text("メールアドレスの形式が間違っています。");
    }else{
        //もし、特にミスがなければ、falseになります。
        //確認項目がすべてfalseの場合にのみ、メールが送信されます。
        mailmiss = "false";
    };
          
    if(!namearea){
        //もし、namedataに何も入っていなかったら、下記のメッセージがnamemissに入ります。
        $(".missnamebox").text("お名前が入力されていません。");   
    }else{
        //もし、特にミスがなければ、falseになります。
        //確認項目がすべてfalseの場合にのみ、メールが送信されます。
        namemiss = "false";
    };
          
    //名前にもメールにもエラーがない場合、確認画面に変化させます。
    if(mailmiss == "false" && namemiss == "false"){ 
        //各内容確認エリアに入力内容を挿入。
        $(".mailareaConfirmation").text(mailarea);
        $(".namedataConfirmation").text(namearea);
        $(".textboxdataConfirmation").text(textboxarea);    
  
        //フォーム類と確認ボタンを一旦削除。
        //deleteareaは要素を消すためのCSS。
        //CSSの内容は直接CSSを確認してください。
        $(".mailarea").addClass("delatearea");
        $(".namearea").addClass("delatearea");
        $(".textboxdata").addClass("delatearea");
        $(".makesurebox").addClass("delatearea");
          
        //戻る&送信ボタンを表示。
        $(".backandsendbox").removeClass("delatearea");
              
    };
          
});
      
//戻るボタンをクリックした時の処理です。
$(".backBtnArea").click(function(){
  
    //各内容確認エリアの入力内容を一旦削除。
    $(".mailareaConfirmation").text("");
    $(".namedataConfirmation").text("");
    $(".textboxdataConfirmation").text("");
          
    //クラスdelateareaを解除してフォーム類を表示。
    $(".mailarea").removeClass("delatearea");
    $(".namearea").removeClass("delatearea");
    $(".textboxdata").removeClass("delatearea");
    $(".makesurebox").removeClass("delatearea");
          
    //戻る&送信ボタンを消す。
    $(".backandsendbox").addClass("delatearea");
          
});
      
//送信ボタンをクリックした時の処理です。
$(".sendBtnArea").click(function(){ 
    //ajaxを使ってPHPにデータを送信します。
    //メールはPHPなどのバックエンド側の言語でしか送れません。
    //よって、jsからPHPにデータを渡す必要があります。
    //下記はデータをPHPに投げる時の1セットだと思ってください。
    $.ajax({
        type: 'POST',
        dataType:'json',
        //こちらでデータをmail.phpに投げます。
        url:'functions/mail.php',
        data:{
            //入力データを送信します。
            //ひとまず、左右どちらも入力内容が入った変数名で統一してください。
            mailarea:mailarea,
            namearea:namearea,
            textboxarea:textboxarea,
        },
        success:function(data) {
            //成功したらPHPから返された値がdataから取得できます。
            //今回は、送信完了メッセージが入っています。
            //詳しくはPHPファイルを確認してみてください。
            //alertで送信完了メッセージを出します。
            alert(data)
            //フォームのトップページにリダイレクトします。
            location.href = "./";
        },
        error:function(XMLHttpRequest, textStatus, errorThrown) {
            //何かエラーが起きたらalertでエラーを表示させます。
            alert(errorThrown);
        }
    }); 
});