let canvas= document.querySelector(".canvas");

let canvasContext= canvas.getContext("2d");
canvas.width=512;

canvas.height=512;

let img4x4=getJson('https://raw.githubusercontent.com/BMapps/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json');
let img32=getJson('https://raw.githubusercontent.com/BMapps/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json');
let img=new Image();
img.src=('https://raw.githubusercontent.com/BMapps/tasks/master/tasks/stage-2/codejam-canvas/data/image.png');





async function draw(img ){ 
    let height=img.length;
    let width=img[0].length;
    let heightStep=parseFloat(window.getComputedStyle(canvas, null).getPropertyValue("height"))/height;
    let widthStep=parseFloat(window.getComputedStyle(canvas, null).getPropertyValue("width"))/width;
    for (let i=0; i< width;i++){
        for (let j=0;j<height;j++){
            canvasContext.fillStyle= getColor(img[i][j]);
            canvasContext.fillRect(i*widthStep,j*heightStep,widthStep,heightStep);
        }
    }
    

}
function drawImg(){
    canvasContext.drawImage(img, 0, 0, 512, 512);
}

function getColor(color){
    if ( color instanceof Array){
        return 'rgba('+color.toString()+')';
    }
    return "#"+color;
}

async function getJson(url){
    return await fetch(url);
    //let data= await res;   
    return res;
}

let button4x4 =document.querySelector(".button-4x4");
let button32x32 =document.querySelector(".button-32x32");
let buttonImg =document.querySelector(".button-img");

button4x4.addEventListener("click", ()=>{
    if (img4x4 instanceof Array ) draw(img4x4);
    else img4x4.then(result =>result.json()).then(result=> {draw(result); img4x4=result;});
});
button32x32.addEventListener("click", ()=>{
    if (img32 instanceof Array ) draw(img32);
    else img32.then(result =>result.json()).then(result=> {draw(result); img32=result;});
});
buttonImg.addEventListener("click", ()=>{
    drawImg();
});

