// $(document).ready(function() {



//Specify the slider's width (in pixels)
var sliderwidth="200px"
//Specify the slider's height
var sliderheight="450px"
//Specify the slider's slide speed (larger is faster 1-10)
var slidespeed=0
//configure background color:
slidebgcolor="#ffffff"
//Specify the slider's images
var leftrightslide=new Array()
var finalslide=''
for (i = 0; i < trending_organizations.length; i++) {
	leftrightslide[i] = '<a href=' + trending_organizations[i].url +'><img src=' + trending_organizations[i].pic+' border=0 height="200" width="200"></a>'
}
var copyspeed=slidespeed
leftrightslide='<nobr>'+leftrightslide.join('<br>')+'</nobr>'
var iedom=document.all||document.getElementById
if (iedom)
	document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+leftrightslide+'</span>')

document.write('<div style="width:25px" id="btn_up" class = "btn" width: 50px>&#x25B2</div>')
document.write('<div style="width:25px" id="btn_shadow_up" class = "btn" width: 50px>&#x25B2</div>')
var actualwidth=''
var cross_slide, ns_slide
var button_up = document.getElementById("btn_up");

button_up.addEventListener('mouseover', function(event) {
	copyspeed = 3;
});
button_up.addEventListener('mouseout', function(event) {
	copyspeed = 0;
	slidespeed = 0;
})

function fillup(){
	if (iedom){
		cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2
		cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3
		cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide
		actualheight=document.all? cross_slide.offsetHeight : document.getElementById("temp").offsetHeight
	}
	else if (document.layers){
		ns_slide=document.ns_slidemenu.document.ns_slidemenu2
		ns_slide2=document.ns_slidemenu.document.ns_slidemenu3
		ns_slide.document.write(leftrightslide)
		ns_slide.document.close()
		actualheight=ns_slide.document.width
		ns_slide2.document.write(leftrightslide)
		ns_slide2.document.close()
	}
	lefttime = setInterval("slideleft()", 30)
}

window.onload=fillup

function slideleft(){
	console.log(parseInt(cross_slide2.style.top));
	console.log(parseInt(cross_slide.style.top));
	console.log(actualheight);
	if (iedom){
		if (parseInt(cross_slide.style.top)>(actualheight*(-1)+8))
			cross_slide.style.top=parseInt(cross_slide.style.top)-copyspeed+"px"
		else
			cross_slide.style.top=parseInt(cross_slide2.style.top)+actualheight+"px"
		if (parseInt(cross_slide2.style.top)>(actualheight*(-1)+8))
			cross_slide2.style.top=parseInt(cross_slide2.style.top)-copyspeed+"px"
		else
			cross_slide2.style.top=parseInt(cross_slide.style.top)+actualheight+"px"
	}
	else if (document.layers){
		if (ns_slide.top>(actualheight*(-1)+8))
			ns_slide.top-=copyspeed
		else
			ns_slide.top=ns_slide2.top+actualheight
		if (ns_slide2.left>(actualheight*(-1)+8))
			ns_slide2.top-=copyspeed
		else
			ns_slide2.top=ns_slide.top+actualheight
	}
	if (parseInt(cross_slide2.style.top) > 0) {
		copyspeed = 0;
    //slidespeed = 0;
}
else if (parseInt(cross_slide2.style.top) < (-1) * 4 * actualheight / 5) {
	copyspeed = 0;
}

}

if (iedom||document.layers){
	with (document){
		document.write('<table id=slideshow border="15" cellspacing="0" cellpadding="10" borderColor= "#41b5d9"><td>')
		document.getElementById("slideshow").style.borderColor="41b5d9";
		if (iedom){
			write('<div style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden;background-color: #41b5d9">')
			write('<div style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';background-color:'+slidebgcolor+'" onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed">')
			write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>')
			write('<div id="test3" style="position:absolute;left:0px;top:-1016px"></div>')
			write('</div></div>')
		}
		else if (document.layers){
			write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu" bgColor='+slidebgcolor+'>')
			write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
			write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
			write('</ilayer>')
		}
		document.write('</td></table>')
		document.write('<div style="width:25px" id="btn_down" class = "btn" width: 50px>&#x25BC</div>')
		document.write('<div style="width:25px" id="btn_shadow_down" class = "btn" width: 50px>&#x25BC</div>')    
		var button_down = document.getElementById("btn_down");
		button_down.addEventListener('mouseover', function(event) {
			copyspeed = -3;      
		});
		button_down.addEventListener('mouseout', function(event) {
			copyspeed = 0;
			slidespeed = 0;
		})
	}
}

// });