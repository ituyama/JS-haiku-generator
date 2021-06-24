//キャンバスに画像を描画する
function loadImage(id)
{
	//画像を読み込んでImageオブジェクトを作成する
	var image = new Image();
	image.src = './img/backs.png';
	image.onload = (function () {
		//画像ロードが完了してからキャンバスの準備をする
		var haik = document.getElementById(id);
		var img = haik.getContext('2d');
		//キャンバスのサイズを画像サイズに合わせる
		haik.width = image.width;
		haik.height = image.height;
		//キャンバスに画像を描画（開始位置0,0）
		img.drawImage(image, 0, 0);
        
	});
}
//キャンバスに文字を描く

function drawText(canvas_id, kami,naka,simo,name)
{
    
    
	var canvas = document.getElementById(canvas_id);

	var img = canvas.getContext('2d');
    var names = canvas.getContext('2d');
    

 

	var kami = document.getElementById(kami);
    var naka = document.getElementById(naka);
    var simo = document.getElementById(simo);
    var name = document.getElementById(name);
    var kaminoku =kami.value
    var nakanoku =naka.value
    var simonoku =simo.value
    var namae =name.value

  

	//文字のスタイルを指定
	img.font = '65px fonts';
	img.fillStyle = '#404040';
	//文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
	img.textBaseline = 'center';
	img.textAlign = 'center';
	//座標を指定して文字を描く（座標は画像の中心に）



    names.font = '65px fonts';
	names.fillStyle = '#404040';
  
	//文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter


    var kamix =450;
    var kamiy =150;
    var nakax =320;
    var nakay =200;
    var simox =190;
    var simoy =350;
    var namex =90;
    var namey =550;
    
    tategaki(img,kaminoku,kamix,kamiy)
    tategaki(img,nakanoku,nakax,nakay)
    tategaki(img,simonoku,simox,simoy)
    tategaki(names,namae,namex,namey)
    let link = document.getElementById('hiddenLink')
    link.href = canvas.toDataURL()
  
    document.getElementById('canvasImage').src = canvas.toDataURL()
  
    link.click()
  
	
}
var tategaki = function(context, text, x, y) {
    var textList = text.split('\n');
    var lineHeight = context.measureText("あ").width;
    textList.forEach(function(elm, i) {
      Array.prototype.forEach.call(elm, function(ch, j) {
        context.fillText(ch, x-lineHeight*i, y+lineHeight*j);
      });
    });
  };
