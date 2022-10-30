/*ーーーーーーー表示/非表示変更ーーーーーーー*/

document.getElementById("hide").onclick = function(){
    //非表示ボタン
    chrome.tabs.query({active: true, lastFocusedWindow:true}, tabs => {
        BtnPut(tabs, 0);      
      });
};


document.getElementById("show").onclick = function(){
    //表示ボタン
    chrome.tabs.query({active: true, lastFocusedWindow:true}, tabs => {
        BtnPut(tabs, 1);       
      });
};




function BtnPut(tabs, state){
    chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: BtnAction,
        args: [state]
    });
}



function BtnAction(state){

    if(state == 0){
        document.getElementsByClassName("addPoint")[0].style.visibility = "hidden";
    }else{
        document.getElementsByClassName("addPoint")[0].style.visibility = "visible";
    }
}





/*ーーーーーーー不透明度変更ーーーーーーー*/


OpacitySlider = document.getElementById("opacity");
window.onload = () =>{
    OpacitySlider.addEventListener('input', Opacity);
}


function OpacityChange(value){
    document.getElementsByClassName("addPoint")[0].style.opacity = value;
}



function Opacity(){
    chrome.tabs.query({active: true, lastFocusedWindow:true}, tabs => {
        chrome.scripting.executeScript({

            target: {tabId: tabs[0].id},
            func: OpacityChange,
            args: [OpacitySlider.value]
        });      
    });

}







