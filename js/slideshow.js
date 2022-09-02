//轮播图
var aLi = document.querySelectorAll(".imgBox li");
var aSpan = document.querySelectorAll(".lineBar span");
var oImgbox = document.querySelector(".imgBox");
var aName = [];
var index = 0;

setColor();

for(var item of aLi){
	aName.push(item.classList[0]);
}

function nextPic() {
	aName.unshift(aName[5]);
	aName.pop();
	
	for (var i=0,len=aLi.length;i<len;i++){
		aLi[i].setAttribute("class",aName[i]);
	}
	
	index++;
	
	if(index>5)index=0;
	
	setColor();
}

function nowPic(){
	self.location.href="album.html"
}

function prePic() {
	aName.push(aName[0]);
	aName.shift();
	
	for (var i=0,len=aLi.length;i<len;i++){
		aLi[i].setAttribute("class",aName[i]);
	}
	
	index--;
	if(index<0)index=5;
	
	setColor();
}

function setColor() {
	for(var item of aSpan){
		item.style.backgroundColor="#ccc";
	}
	
	aSpan[index].style.backgroundColor = "#45c17c";
}
6
var eleList=["list1","list2","list3"];
var eleAct=["prePic","nowPic","nextPic"];

oImgbox.addEventListener("click",function (ev) {
	var ele = ev.target.parentNode;
	var eleName = ele.classList[0];
	window[eleAct[eleList.indexOf(eleName)]]();
})

setInterval("nextPic()",3000);