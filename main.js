var image=[""];
function images(i, where) {
    this.newImageTop = document.createElement("img");
    this.newImageTop.setAttribute("src", ".\\images\\CW18-" + (i + 1) + ".jpg");
    this.newImageTop.srcs = "CW18-" + (i + 1) + ".jpg";
    if(i==1){
        this.newImageTop.style.left="200px";
    }else if(i==2){
        this.newImageTop.style.top="200px";
    }else if(i==3){
        this.newImageTop.style.top="200px";
        this.newImageTop.style.left="200px";
    }
    image[i]=this.newImageTop;
    
    document.getElementsByClassName(where)[0].appendChild(this.newImageTop);
}
function onLoad() {
    document.getElementsByClassName("mainarea")[0].addEventListener("click", function (event) {
        clickDetected(event);
    });
    for (var i = 0; i < 4; i++) {
        var newImage = new images(i, "mainarea");
    }
    var newImage=new images(i, "outside");
}

function clickDetected(events){
    if(events.target.tagName=="IMG"){
        rotateClockWise()
    }else{
        swap5thAnd4th();
        rotateAntiClockWise();
    }
}
function rotateAntiClockWise(){
    var temp=image[0].src;
    image[0].src=image[1].src;
    image[1].src=image[3].src;
    image[3].src=image[2].src;
    image[2].src=temp;
}
function rotateClockWise(){
    var temp=image[1].src;
    image[1].src=image[0].src;
    image[0].src=image[2].src;
    image[2].src=image[3].src;
    image[3].src=temp;
}
function swap5thAnd4th(){
    temp=image[2].src;
    image[2].src=document.getElementsByClassName("outside")[0].children[0].src;
    document.getElementsByClassName("outside")[0].children[0].src=temp;
}