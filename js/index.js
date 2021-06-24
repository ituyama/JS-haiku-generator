//キャンバスに画像を描画する
function loadImage(id) {
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

function drawText(canvas_id, kami, naka, simo, name) {


    var canvas = document.getElementById(canvas_id);

    var img = canvas.getContext('2d');





    var kami = document.getElementById(kami);
    var naka = document.getElementById(naka);
    var simo = document.getElementById(simo);
    var name = document.getElementById(name);
    var kaminoku = kami.value
    var nakanoku = naka.value
    var simonoku = simo.value
    var namae = name.value



    //文字のスタイルを指定
    img.font = '65px fonts';
    img.fillStyle = '#404040';
    //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
    img.textBaseline = 'center';
    img.textAlign = 'center';
    //座標を指定して文字を描く（座標は画像の中心に）


    //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter


    var kamix = 450;
    var kamiy = 150;
    var nakax = 320;
    var nakay = 200;
    var simox = 190;
    var simoy = 350;
    var namex = 90;
    var namey = 550;

    tategaki(img, kaminoku, kamix, kamiy)
    tategaki(img, nakanoku, nakax, nakay)
    tategaki(img, simonoku, simox, simoy)
    tategaki(img, namae, namex, namey)
    let link = document.getElementById('hiddenLink')
    link.href = canvas.toDataURL()

    document.getElementById('canvasImage').src = canvas.toDataURL()

    link.click()


}
var tategaki = function (context, text, x, y) {
    var textList = text.split('\n');
    var lineHeight = context.measureText("あ").width;
    textList.forEach(function (elm, i) {
        Array.prototype.forEach.call(elm, function (ch, j) {
            context.fillText(ch, x - lineHeight * i, y + lineHeight * j);
        });
    });
};



window.addEventListener('load', function () {
    if (window.name != "any") {

        location.reload();
        window.name = "any";
    } else {
        window.name = "";
    }
});



function saveCanvas(saveType) {
    var imageType = "image/png";
    var fileName = "haik.png";
    if (saveType === "jpeg") {
        imageType = "image/jpeg";
        fileName = "sample.jpg";
    }
    var canvases = document.getElementById("preview");
    // base64エンコードされたデータを取得 「data:image/png;base64,iVBORw0k～」
    var base64 = canvases.toDataURL(imageType);
    // base64データをblobに変換
    var blob = Base64toBlob(base64);
    // blobデータをa要素を使ってダウンロード
    saveBlob(blob, fileName);
}
// Base64データをBlobデータに変換
function Base64toBlob(base64) {
    // カンマで分割して以下のようにデータを分ける
    // tmp[0] : データ形式（data:image/png;base64）
    // tmp[1] : base64データ（iVBORw0k～）
    var tmp = base64.split(',');
    // base64データの文字列をデコード
    var data = atob(tmp[1]);
    // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
    var mime = tmp[0].split(':')[1].split(';')[0];
    //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
    var buf = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
        buf[i] = data.charCodeAt(i);
    }
    // blobデータを作成
    var blob = new Blob([buf], {
        type: mime
    });
    return blob;
}

// 画像のダウンロード
function saveBlob(blob, fileName) {
    var url = (window.URL || window.webkitURL);
    // ダウンロード用のURL作成
    var dataUrl = url.createObjectURL(blob);
    // イベント作成
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    // a要素を作成
    var ass = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    // ダウンロード用のURLセット
    ass.href = dataUrl;
    // ファイル名セット
    ass.download = fileName;
    // イベントの発火
    ass.dispatchEvent(event);
}