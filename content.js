window.onload = function () {
    //表示
    let body = document.querySelector("body");
    let element = document.createElement("img");
    element.src = chrome.runtime.getURL("images/image.png");
    element.className = "addPoint";
    body.appendChild(element);

    
    //位置調整
    let video = document.getElementsByClassName("video-stream html5-main-video");
    
    let width = parseInt(video[0].style.width);
    let height = parseInt(video[0].style.height);

    let left = width/2 + 24;
    let top = height/2 + 80;
    
    document.getElementsByClassName("addPoint")[0].style.left = left + "px";
    document.getElementsByClassName("addPoint")[0].style.top = top + "px";


}




window.addEventListener('resize', function(){
    //ウィンドウ幅変更時、位置調整
    let video = document.getElementsByClassName("video-stream html5-main-video");
    
    let width = parseInt(video[0].style.width);
    let height = parseInt(video[0].style.height);

    let left = width/2 + 24;
    let top = height/2 + 80;
    
    document.getElementsByClassName("addPoint")[0].style.left = left + "px";
    document.getElementsByClassName("addPoint")[0].style.top = top + "px";
});







