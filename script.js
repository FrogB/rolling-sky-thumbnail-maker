var currentUI = "normal";
var isimportedbg = 0;
var isimportedtn = 0;
var isimportedgp = 0;
var crowncount = 0;
var starcount = 1;
product = document.querySelector("canvas.product");
const inputtext6 = document.querySelector('input.textbox6');
const inputtext7 = document.querySelector('input.textbox7');

async function onOpen(){
	product.width = 1280;
	product.height = product.width * 9 / 16;
	await delay(50);
	onchange();
}

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
	product.width = 1280;
	product.height = product.width * 9 / 16;
	onchange();
}

window.onresize = reportWindowSize;

const fileInputbg = document.querySelector(".input_bg");
previewbg = document.querySelector(".previewbg img");
choosebgBtn = document.querySelector(".button_bg");
const fileInputtn = document.querySelector(".input_tn");
previewtn = document.querySelector(".previewtn img");
choosetnBtn = document.querySelector(".button_tn");
const fileInputgp = document.querySelector(".input_gp");
const previewgp = document.querySelector("#gpimg");
const choosegpBtn = document.querySelector(".button_gp");

labelbgexplain = document.getElementById('lablebgex');
labeltnexplain = document.getElementById('labletnex');
tnimgcode = document.getElementById('tnimgcode');

const loadImagebg = () => {
	let filebg = fileInputbg.files[0];
	if(!filebg) return;
	console.log(filebg);
	previewbg.src = URL.createObjectURL(filebg);
	labelbgexplain.innerHTML = '<font size="3" style="color:#888">Import done!</font>';
	isimportedbg = 1;
	
}

previewbg.onload = function() {
    if(this.naturalWidth / this.naturalHeight !=1) {
        previewbg.src = 'img.jpg'
        labelbgexplain.innerHTML = '<font size="3" style="color:red">Ratio not avalible, use photo with ratio 1:1</font>';
		isimportedbg = 0;
	}
	console.log(isimportedbg);
	onchange();
}

const loadImagegp = () => {

    let filegp = fileInputgp.files[0];
    if(!filegp) return;
    console.log(filegp);
    const gpURL = URL.createObjectURL(filegp);
    previewgp.src = gpURL;
    document.getElementById("lablegpex").innerHTML =
        '<font size="3" style="color:#888">Import done!</font>';
    isimportedgp = 1;
};

previewgp.onload = function() {
    onchange();
};

const loadImagetn = () => {
	let filetn = fileInputtn.files[0];
	if(!filetn) return;
	console.log(filetn);
	labeltnexplain.innerHTML = '<font size="3" style="color:#888">Import done!</font>';
	tnimgcode.innerHTML = '<img src="' + URL.createObjectURL(filetn) + '" width="255" height="400" alt="previewtn">';
	previewtn.src = URL.createObjectURL(filetn);
	isimportedtn = 1;
}

previewtn.onload = function() {
	onchange();
}

fileInputbg.addEventListener("change", loadImagebg);
fileInputtn.addEventListener("change", loadImagetn);
fileInputgp.addEventListener("change", loadImagegp);

choosebgBtn.addEventListener("click", () => fileInputbg.click());
choosetnBtn.addEventListener("click", () => fileInputtn.click());
choosegpBtn.addEventListener("click", () => fileInputgp.click());

const inputH = document.querySelector('input.sliderR');
const inputS = document.querySelector('input.sliderG');
const inputB = document.querySelector('input.sliderB');
const inputtext = document.querySelector('input.textbox');
const H11 = document.querySelector('input.H11');
const H12 = document.querySelector('input.H12');
const H13 = document.querySelector('input.H13');

function onInput() {
	inputB.style = 'background: linear-gradient(90deg, rgba(0,0,0,1) 0%, hsl('+inputH.value+','+inputS.value+'%,'+(100-inputS.value/2)+'%) 100%)';
	inputS.style = 'background: linear-gradient(90deg, hsl(0,0%,'+inputB.value+'%) 0%, hsl('+inputH.value+',100%,'+inputB.value/2+'%) 100%)';
	H11.value = inputH.value;
	H12.value = inputS.value;
	H13.value = inputB.value;
	var h1 = inputH.value/360;
	var s1 = inputS.value/100;
	var b1 = inputB.value/100;
	var l1 = (2 - s1) * b1 / 2;

    if (l1 != 0) {
        if (l1 == 1) {
            s1 = 0;
        } else if (l1 < 0.5) {
            s1 = s1 * b1 / (l1 * 2);
        } else {
            s1 = s1 * b1 / (2 - l1 * 2);
        }
    }
	inputtext.style = 'color:hsl('+h1*360+','+s1*100+'%,'+l1*100+'%)';
	onchange();
}

function ontype() {
	if(H11.value>360){
		H11.value = 360;
	}
	if(H11.value<0){
		H11.value = 0;
	}
	if(H12.value>100){
		H12.value = 100;
	}
	if(H12.value<0){
		H12.value = 0;
	}
	if(H13.value>100){
		H13.value = 100;
	}
	if(H13.value<0){
		H13.value = 0;
	}
	inputB.style = 'background: linear-gradient(90deg, rgba(0,0,0,1) 0%, hsl('+H11.value+','+H12.value+'%,'+(100-H12.value/2)+'%) 100%)';
	inputS.style = 'background: linear-gradient(90deg, hsl(0,0%,'+H13.value+'%) 0%, hsl('+H11.value+',100%,'+H13.value/2+'%) 100%)';
	inputH.value = H11.value;
	inputS.value = H12.value;
	inputB.value = H13.value;
	var h1 = H11.value/360;
	var s1 = H12.value/100;
	var b1 = H13.value/100;
	var l1 = (2 - s1) * b1 / 2;

    if (l1 != 0) {
        if (l1 == 1) {
            s1 = 0;
        } else if (l1 < 0.5) {
            s1 = s1 * b1 / (l1 * 2);
        } else {
            s1 = s1 * b1 / (2 - l1 * 2);
        }
    }
	inputtext.style = 'color:hsl('+h1*360+','+s1*100+'%,'+l1*100+'%)';
	onchange();
}

const inputH2 = document.querySelector('input.sliderR2');
const inputS2 = document.querySelector('input.sliderG2');
const inputB2 = document.querySelector('input.sliderB2');
const inputtext2 = document.querySelector('input.textbox2');
const inputtext3 = document.querySelector('input.textbox3');

function onInput2() {
	inputB2.style = 'background: linear-gradient(90deg, rgba(0,0,0,1) 0%, hsl('+inputH2.value+','+inputS2.value+'%,'+(100-inputS2.value/2)+'%) 100%)';
	inputS2.style = 'background: linear-gradient(90deg, hsl(0,0%,'+inputB2.value+'%) 0%, hsl('+inputH2.value+',100%,'+inputB2.value/2+'%) 100%)';
	H21.value = inputH2.value;
	H22.value = inputS2.value;
	H23.value = inputB2.value;
	var h2 = inputH2.value/360;
	var s2 = inputS2.value/100;
	var b2 = inputB2.value/100;
	var l2 = (2 - s2) * b2 / 2;

    if (l2 != 0) {
        if (l2 == 1) {
            s2 = 0;
        } else if (l2 < 0.5) {
            s2 = s2 * b2 / (l2 * 2);
        } else {
            s2 = s2 * b2 / (2 - l2 * 2);
        }
    }
	inputtext2.style = 'color:hsl('+h2*360+','+s2*100+'%,'+l2*100+'%)';
	inputtext3.style = 'color:hsl('+h2*360+','+s2*100+'%,'+l2*100+'%)';
	onchange();
}

function ontype2() {
	if(H21.value>360){
		H21.value = 360;
	}
	if(H21.value<0){
		H21.value = 0;
	}
	if(H22.value>100){
		H22.value = 100;
	}
	if(H22.value<0){
		H12.value = 0;
	}
	if(H23.value>100){
		H23.value = 100;
	}
	if(H23.value<0){
		H23.value = 0;
	}
	inputB2.style = 'background: linear-gradient(90deg, rgba(0,0,0,1) 0%, hsl('+H21.value+','+H22.value+'%,'+(100-H22.value/2)+'%) 100%)';
	inputS2.style = 'background: linear-gradient(90deg, hsl(0,0%,'+H23.value+'%) 0%, hsl('+H21.value+',100%,'+H23.value/2+'%) 100%)';
	var h2 = H21.value/360;
	var s2 = H22.value/100;
	var b2 = H23.value/100;
	var l2 = (2 - s2) * b2 / 2;

    if (l2 != 0) {
        if (l2 == 1) {
            s2 = 0;
        } else if (l2 < 0.5) {
            s2 = s2 * b2 / (l2 * 2);
        } else {
            s2 = s2 * b2 / (2 - l2 * 2);
        }
    }
	inputtext2.style = 'color:hsl('+h2*360+','+s2*100+'%,'+l2*100+'%)';
	inputtext3.style = 'color:hsl('+h2*360+','+s2*100+'%,'+l2*100+'%)';
	inputH2.value = H21.value;
	inputS2.value = H22.value;
	inputB2.value = H23.value;
	onchange();
}

crownimg1 = document.querySelector(".crown1 img");
button1stcrown = document.querySelector("button.crown1");
crownimg2 = document.querySelector(".crown2 img");
button2stcrown = document.querySelector("button.crown2");
crownimg3 = document.querySelector(".crown3 img");
button3stcrown = document.querySelector("button.crown3");
iscrowncheckbox = document.getElementById("cbx-46");


async function onclickcrown(i) {

    if(!iscrowncheckbox.checked){
	    if(i==4){
		    crowncount = 0;
			iscrowncheckbox.disabled = true;
		    document.getElementById("selectcrown").style.animationDirection = "reverse";
		    document.getElementById("selectcrown").style.animationName = "none";
	        requestAnimationFrame(() => {
		    document.getElementById("selectcrown").style.animationName = "crownui";
			});
		    document.getElementById("selectcrown").style.opacity = 0;
			iscrowncheckbox.disabled = false;
			
	    }
	}
	if(iscrowncheckbox.checked){
	    if(i==3){
	    	crownimg1.src = 'CrownOk.png';
		    crownimg2.src = 'CrownOk.png';
	    	crownimg3.src = 'CrownOk.png';
			crowncount = 3;
	    }
	    if(i==2){
		    crownimg1.src = 'CrownOk.png';
	    	crownimg2.src = 'CrownOk.png';
	    	crownimg3.src = 'CrownUn.png';
			crowncount = 2;
	    }
	    if(i==1){
			if(crowncount == 1){
				crownimg1.src = 'CrownUn.png';
	    	    crownimg2.src = 'CrownUn.png';
	    	    crownimg3.src = 'CrownUn.png';
			    crowncount = 0;
			}
			else{
	    	    crownimg1.src = 'CrownOk.png';
	    	    crownimg2.src = 'CrownUn.png';
	    	    crownimg3.src = 'CrownUn.png';
				crowncount = 1;
			}
	    }
		if(i==4){
	    crownimg1.src = 'CrownOk.png';
	    crownimg2.src = 'CrownOk.png';
	    crownimg3.src = 'CrownOk.png';
		crowncount = 3;
		iscrowncheckbox.disabled = true;
		document.getElementById("selectcrown").style.animationDirection = "normal";
		document.getElementById("selectcrown").style.animationName = "none";
	    requestAnimationFrame(() => {
		document.getElementById("selectcrown").style.animationName = "crownui";
		document.getElementById("selectcrown").style.opacity = 1;
		iscrowncheckbox.disabled = false;
	});
	    }
	}
	await delay(10);
	onchange();
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
	

button1stcrown.addEventListener("click",() => onclickcrown(1));
button2stcrown.addEventListener("click",() => onclickcrown(2));
button3stcrown.addEventListener("click",() => onclickcrown(3));
iscrowncheckbox.addEventListener("click",() => onclickcrown(4));

const inputH3 = document.querySelector('input.sliderR3');
const inputS3 = document.querySelector('input.sliderG3');
const inputB3 = document.querySelector('input.sliderB3');
const inputtext5 = document.querySelector('input.textbox5');

function onInput3() {
	inputB3.style = 'background: linear-gradient(90deg, rgba(0,0,0,1) 0%, hsl('+inputH3.value+','+inputS3.value+'%,'+(100-inputS3.value/2)+'%) 100%)';
	inputS3.style = 'background: linear-gradient(90deg, hsl(0,0%,'+inputB3.value+'%) 0%, hsl('+inputH3.value+',100%,'+inputB3.value/2+'%) 100%)';
	H31.value = inputH3.value;
	H32.value = inputS3.value;
	H33.value = inputB3.value;
	var h3 = inputH3.value/360;
	var s3 = inputS3.value/100;
	var b3 = inputB3.value/100;
	var l3 = (2 - s3) * b3 / 2;

    if (l3 != 0) {
        if (l3 == 1) {
            s3 = 0;
        } else if (l3 < 0.5) {
            s3 = s3 * b3 / (l3 * 2);
        } else {
            s3 = s3 * b3 / (2 - l3 * 2);
        }
    }
	inputtext5.style = 'color:hsl('+h3*360+','+s3*100+'%,'+l3*100+'%)';
	onchange();
}

function ontype3() {
	if(H31.value>360){
		H31.value = 360;
	}
	if(H31.value<0){
		H31.value = 0;
	}
	if(H32.value>100){
		H32.value = 100;
	}
	if(H32.value<0){
		H32.value = 0;
	}
	if(H33.value>100){
		H33.value = 100;
	}
	if(H33.value<0){
		H33.value = 0;
	}
	inputB3.style = 'background: linear-gradient(90deg, rgba(0,0,0,1) 0%, hsl('+H31.value+','+H32.value+'%,'+(100-H32.value/2)+'%) 100%)';
	inputS3.style = 'background: linear-gradient(90deg, hsl(0,0%,'+H33.value+'%) 0%, hsl('+H31.value+',100%,'+H33.value/2+'%) 100%)';
	inputtext5.style.style = 'color:hsl('+H31.value+','+H32.value+'%,'+((100-H32.value/2)*(H33.value/100))+'%)';
	inputH3.value = H31.value;
	inputS3.value = H32.value;
	inputB3.value = H33.value;
	onchange();
}

var ctx = product.getContext("2d");
var imgtrue = document.getElementById("bgimg");
var tum = document.getElementById("tnimg");
var debugxpos = document.getElementById("xpos");
var debugypos = document.getElementById("ypos");
var imgcrown1 = new Image;
imgcrown1.src = "CrownOk.png";
var imgcrown2 = new Image;
imgcrown2.src = "CrownOk.png";
var imgcrown3 = new Image;
imgcrown3.src = "CrownOk.png";
var img = new Image;
img.src = imgtrue.src;
var imgtn = new Image;
imgtn.src = previewtn.src;
var imggp = new Image;
imggp.src = isimportedgp ? previewgp.src : "GameplayFrame.png";
var diaR = new Image;
diaR.src = "Diamond_R.png";
var diaG = new Image;
diaG.src = "Diamond_G.png";
var diaB = new Image;
diaB.src = "Diamond_B.png";
var diaT = new Image;
diaT.src = "Diamond_T.png";
var dia = new Image;
dia.src = "Diamond.png";

UIchoosecheckbox = document.getElementById("UIchoosecheckbox");
lableUItype = document.getElementById("UIchoose");

function onchange(){
	
	product.getContext("2d").reset();
	
	if(currentUI === "levelList"){
		levellist();
		return;
	} else if(currentUI === "new"){
		newstyle();
		return;
	}
	
	ctx.filter = "blur(15px)";
	
	if(isimportedbg == 0){
		img.src = "Massif.png";
		ctx.drawImage(img,
	    img.naturalWidth*0.1, 0,
		img.naturalWidth*0.8, img.naturalWidth*9*0.8/16,
		0, 0,
		product.width, product.height);
	}
	if(isimportedbg == 1){
		img.src = imgtrue.src;
		ctx.drawImage(img,
	    img.naturalWidth*0.1, 0,
		img.naturalWidth*0.8, img.naturalWidth*9*0.8/16,
		0, 0,
		product.width, product.height);
	}
	
	
	ctx.drawImage(img,
	    img.naturalWidth*0.1, 0,
		img.naturalWidth*0.8, img.naturalWidth*9*0.8/16,
		0, 0,
		product.width, product.height);
	ctx.drawImage(img,
	    img.naturalWidth*0.1, 0,
		img.naturalWidth*0.8, img.naturalWidth*9*0.8/16,
		0, 0,
		product.width, product.height);
	
	ctx.filter = "none";
	
	ctx.globalAlpha = 0.2;
	ctx.fillStyle = "black";
    ctx.fillRect(0, 0, product.width, product.height);
	ctx.globalAlpha = 1;
	
	ctx.drawImage(img,
	    img.naturalWidth*0.338, img.naturalHeight*0.65,
		img.naturalWidth*0.324, img.naturalHeight*0.145,
		product.width*0.46, product.height*0.55,
		product.width*0.424, product.height*0.352);
	
	ctx.drawImage(img,
	    img.naturalWidth*0.338, img.naturalHeight*0.043,
		img.naturalWidth*0.324, img.naturalHeight*0.145,
		product.width*0.46, product.height*0.12,
		product.width*0.424, product.height*0.352);
		
	ctx.globalAlpha = 0.23;
	ctx.fillStyle = "black";
    ctx.fillRect(0, 0, product.width, product.height);
	ctx.globalAlpha = 1;
	
	if(isimportedtn == 0){
		imgtn.src = "world1.png";
		ctx.drawImage(imgtn,
	    0, 0,
		imgtn.naturalWidth, imgtn.naturalHeight,
		product.width*0.13, product.height*0.12,
		product.height*51/80 *0.78, product.height *0.78);
	}
	if(isimportedtn == 1){
		imgtn.src = tum.src;
		ctx.drawImage(imgtn,
	    0, 0,
		imgtn.naturalWidth, imgtn.naturalHeight,
		product.width*0.13, product.height*0.12,
		product.height*51/80 *0.78, product.height *0.78);
	}

	ctx.drawImage(imgtn,
	    0, 0,
		imgtn.naturalWidth, imgtn.naturalHeight,
		product.width*0.13, product.height*0.12,
		product.height*51/80 *0.78, product.height *0.78);
	
	var productlvlname = inputtext.value;
	
	if (productlvlname == ""){
	    productlvlname = 'Massif';
	}
	
	ctx.textAlign = 'center';
	var fontsizepx = product.height*1.30*(1/productlvlname.length)
	if(productlvlname.length<10){
		fontsizepx = product.height*1.3*(1/12);
	}
	ctx.font = fontsizepx+"px Sen-Bold";
	var h1 = H11.value/360;
	var s1 = H12.value/100;
	var b1 = H13.value/100;
	var l1 = (2 - s1) * b1 / 2;

    if (l1 != 0) {
        if (l1 == 1) {
            s1 = 0;
        } else if (l1 < 0.5) {
            s1 = s1 * b1 / (l1 * 2);
        } else {
            s1 = s1 * b1 / (2 - l1 * 2);
        }
    }
	ctx.fillStyle = "hsl("+h1*360+','+s1*100+'%,'+l1*100+"%)";
	var textxpos = product.width*0.46 + product.width*0.424/2;
	var textypos = (product.height*0.12 + product.height*0.305/2)+fontsizepx/2;
	
	if(iscrowncheckbox.checked){
		if(crowncount==3){
	        imgcrown1.src = "CrownOk.png";
	        imgcrown2.src = "CrownOk.png";
	        imgcrown3.src = "CrownOk.png";
		}
		else if(crowncount==2){
	        imgcrown1.src = "CrownOk.png";
	        imgcrown2.src = "CrownOk.png";
	        imgcrown3.src = "CrownUn.png";
		}
		else if(crowncount==1){
	        imgcrown1.src = "CrownOk.png";
	        imgcrown2.src = "CrownUn.png";
	        imgcrown3.src = "CrownUn.png";
		}
		else if(crowncount==0){
	        imgcrown1.src = "CrownUn.png";
	        imgcrown2.src = "CrownUn.png";
	        imgcrown3.src = "CrownUn.png";
		}
		else{
			imgcrown1.src = "CrownUn.png";
	        imgcrown2.src = "CrownUn.png";
	        imgcrown3.src = "CrownUn.png";
		}
		ctx.drawImage(imgcrown1,
	        0, 0,
		    imgcrown1.naturalWidth, imgcrown1.naturalHeight,
		    product.width*0.562, product.height*0.30,
		    product.width*0.068, product.width*0.068);
		ctx.drawImage(imgcrown2,
	        0, 0,
		    imgcrown2.naturalWidth, imgcrown2.naturalHeight,
		    textxpos - (product.width*0.07/2), product.height*0.30,
		    product.width*0.068, product.width*0.068);
		ctx.drawImage(imgcrown3,
	        0, 0,
		    imgcrown3.naturalWidth, imgcrown3.naturalHeight,
		    textxpos - (product.width*0.07/2) - product.width*0.562 + textxpos - (product.width*0.07/2), product.height*0.30,
		    product.width*0.068, product.width*0.068);
		textypos = (product.height*0.12 + product.height*0.18/2)+fontsizepx/2;
	}
    ctx.fillText(productlvlname, textxpos, textypos);
	ctx.fillStyle = "black";
	
	var productpercent = inputtext5.value+"%";
	
	var h3 = inputH3.value/360;
	var s3 = inputS3.value/100;
	var b3 = inputB3.value/100;
	var l3 = (2 - s3) * b3 / 2;

    if (l3 != 0) {
        if (l3 == 1) {
            s3 = 0;
        } else if (l3 < 0.5) {
            s3 = s3 * b3 / (l3 * 2);
        } else {
            s3 = s3 * b3 / (2 - l3 * 2);
        }
    }
	if (productpercent == "%"){
	    productpercent = '100%';
	}
	var fontsizepx2 = product.height*0.155;
	ctx.font = fontsizepx2+"px Sen-Bold";
	ctx.globalAlpha = 0.3;
	ctx.fillText(productpercent, textxpos+product.width*0.003, product.height*0.708);
	ctx.globalAlpha = 1;
	ctx.fillStyle = 'hsl('+h3*360+','+s3*100+'%,'+l3*100+'%)';
	ctx.fillText(productpercent, textxpos, product.height*0.70);
	
	var h2 = H21.value/360;
	var s2 = H22.value/100;
	var b2 = H23.value/100;
	var l2 = (2 - s2) * b2 / 2;

    if (l2 != 0) {
        if (l2 == 1) {
            s2 = 0;
        } else if (l2 < 0.5) {
            s2 = s2 * b2 / (l2 * 2);
        } else {
            s2 = s2 * b2 / (2 - l2 * 2);
        }
    }
	


	var r, g, b;

    if(s2 == 0){
        r = g = b = l2; // achromatic
    }
	else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
        var p = 2 * l2 - q;
        r = hue2rgb(p, q, h2 + 1/3);
        g = hue2rgb(p, q, h2);
        b = hue2rgb(p, q, h2 - 1/3);
    }
	var DiaCount = inputtext2.value;
	var MaxCount = inputtext3.value;
	var diaxpos = product.width*0.54;
	var diaypos = product.height*0.76;
	var diacountxpos = product.width*0.695;
	var diacountypos = product.height*0.86;
	var maxcountxpos = product.width*0.695;
	var maxcountypos = product.height*0.86;
	
	if(DiaCount == ""){
		DiaCount = "20";
	}
	if(MaxCount == ""){
		MaxCount = "20";
	}
	
	ctx.textAlign = 'right';
	var fontsizepx3 = product.height*0.125;
	ctx.font = fontsizepx3+"px Sen-Bold";
	ctx.fillStyle = 'hsl('+h2*360+','+s2*100+'%,'+l2*100+'%)';
	ctx.fillText(DiaCount, diacountxpos, diacountypos);
	ctx.textAlign = 'left';
	var fontsizepx4 = product.height*0.08;
	ctx.font = fontsizepx4+"px Sen-Bold";
	ctx.fillText("/"+MaxCount, maxcountxpos, maxcountypos);
	
	
	if(DiaCount<10){
		diaxpos = product.width*0.58;
	}
	
	ctx.imageSmoothingEnabled = false;
	
	ctx.drawImage(diaT,
	    0, 0,
		diaT.naturalWidth, diaT.naturalHeight,
		diaxpos, diaypos,
		product.width*0.06, product.width*0.06);
		
	ctx.globalCompositeOperation = 'screen';	
	
	ctx.globalAlpha = r;
	ctx.drawImage(diaR,
	    0, 0,
		diaR.naturalWidth, diaR.naturalHeight,
		diaxpos, diaypos,
		product.width*0.06, product.width*0.06);
		
	ctx.globalAlpha = g;
	ctx.drawImage(diaG,
	    0, 0,
		diaG.naturalWidth, diaG.naturalHeight,
		diaxpos, diaypos,
		product.width*0.06, product.width*0.06);
		
	ctx.globalAlpha = b;
	ctx.drawImage(diaB,
	    0, 0,
		diaB.naturalWidth, diaB.naturalHeight,
		diaxpos, diaypos,
		product.width*0.06, product.width*0.06);
}
var levellistbg = new Image;
levellistbg.src = "levellistbg.png";

var star = [];

for(let i = 0; i < 6; i++){
    star[i] = new Image();
    star[i].src = "star.png";
}



function levellist(){
	
var dx = debugxpos.value/1000;
var dy = debugypos.value/1000;
	
	ctx.globalAlpha = 1;
	ctx.fillStyle = "black";
    ctx.fillRect(0, 0, product.width, product.height);
	ctx.globalAlpha = 1;
	
	ctx.drawImage(levellistbg,
	    0, 0,
		levellistbg.naturalWidth, levellistbg.naturalHeight,
		product.width*0.19275, product.height*0.0625,
		product.width*0.6117, product.height*0.873611);
		
	if(isimportedtn == 0){
		imgtn.src = "world1.png";
		ctx.drawImage(imgtn,
	    0, 0,
		imgtn.naturalWidth, imgtn.naturalHeight,
		product.width*0.19275, product.height*0.0625,
		product.height*513/800 *0.873611, product.height *0.873611);
	}
	if(isimportedtn == 1){
		imgtn.src = tum.src;
		ctx.drawImage(imgtn,
	    0, 0,
		imgtn.naturalWidth, imgtn.naturalHeight,
		product.width*0.19275, product.height*0.0625,
		product.height*513/800 *0.873611, product.height *0.873611);
	}

	ctx.drawImage(imgtn,
	    0, 0,
		imgtn.naturalWidth, imgtn.naturalHeight,
		product.width*0.19275, product.height*0.0625,
		product.height*513/800 *0.873611, product.height *0.873611);
		
		var productlvlname = inputtext.value;
	
	if (productlvlname == ""){
	    productlvlname = 'Massif';
	}
	
	ctx.textAlign = 'center';
	var fontsizepx = product.height*0.9*(1/productlvlname.length)
	if(productlvlname.length<10){
		fontsizepx = product.height*0.9*(1/12);
	}
	ctx.font = fontsizepx+"px Sen-Bold";
	ctx.fillStyle = "white";
	ctx.fillText(productlvlname, product.width*0.655, product.height*0.18);
	
	
	
	for (let j = 0; j < starcount; j++){
    
	var star = [];
    star[j] = new Image;
    star[j].src = "star.png";
	
	var xpos = j*product.width*0.033 + product.width*0.035;
	
	ctx.drawImage(star[j],
	    0, 0,
		star[j].naturalWidth, star[j].naturalHeight,
		product.width*0.527 + xpos, product.height*0.328,
		product.width*0.031, product.width *0.031);
    }
	
	var productlvlno1 = inputtext6.value;
	var productlvlno2 = inputtext7.value;
	
	if(productlvlno1 == ""){productlvlno1="10";}
	if(productlvlno2 == ""){productlvlno2="10";}
	
	var productlvlno = productlvlno1+"/"+productlvlno2;
	ctx.textAlign = 'right';
	fontsizepx = product.height*0.06;
	ctx.font = fontsizepx+"px Sen-Bold";
	ctx.fillStyle = "rgb(103,199,229)";
	ctx.fillText(productlvlno, product.width*0.796, product.height*0.913);
	
	if(iscrowncheckbox.checked){
		if(crowncount==3){
	        imgcrown1.src = "CrownOk.png";
	        imgcrown2.src = "CrownOk.png";
	        imgcrown3.src = "CrownOk.png";
		}
		else if(crowncount==2){
	        imgcrown1.src = "CrownOk.png";
	        imgcrown2.src = "CrownOk.png";
	        imgcrown3.src = "CrownUn.png";
		}
		else if(crowncount==1){
	        imgcrown1.src = "CrownOk.png";
	        imgcrown2.src = "CrownUn.png";
	        imgcrown3.src = "CrownUn.png";
		}
		else if(crowncount==0){
	        imgcrown1.src = "CrownUn.png";
	        imgcrown2.src = "CrownUn.png";
	        imgcrown3.src = "CrownUn.png";
		}
		else{
			imgcrown1.src = "CrownUn.png";
	        imgcrown2.src = "CrownUn.png";
	        imgcrown3.src = "CrownUn.png";
		}
		ctx.drawImage(imgcrown1,
	        0, 0,
		    imgcrown1.naturalWidth, imgcrown1.naturalHeight,
		    product.width*0.55, product.height*0.433,
		    product.width*0.061, product.width*0.061);
		ctx.drawImage(imgcrown2,
	        0, 0,
		    imgcrown2.naturalWidth, imgcrown2.naturalHeight,
		    product.width*0.62, product.height*0.433,
		    product.width*0.061, product.width*0.061);
		ctx.drawImage(imgcrown3,
	        0, 0,
		    imgcrown3.naturalWidth, imgcrown3.naturalHeight,
		    product.width*0.69, product.height*0.433,
		    product.width*0.061, product.width*0.061);
			
		}
			
	var diaxpos = product.width*0.564;
	var diaypos = product.height*0.521;
	if(iscrowncheckbox.checked){
		diaypos = product.height*0.557;
	}
	var dianoxpos = product.width*0.621;
	var dianoypos = product.height*0.592;
	if(iscrowncheckbox.checked){
		dianoypos = product.height*0.629;
	}
	var perxpos = product.width*0.658;
	var perypos = product.height*0.714;
	if(iscrowncheckbox.checked){
		perypos = product.height*0.751;
	}
		
	ctx.drawImage(dia,
	    0, 0,
		dia.naturalWidth, dia.naturalHeight,
		diaxpos, diaypos,
		product.width*0.05, product.width*0.05);
		
	var productdiano = inputtext2.value;
	var productmaxno = inputtext3.value;
	
	if(productdiano == ""){productdiano="20";}
	if(productmaxno == ""){productmaxno="20";}
	
	var productdiamond = productdiano+"/"+productmaxno;
	ctx.textAlign = 'left';
	fontsizepx = product.height*0.076;
	ctx.font = fontsizepx+"px Sen-Bold";
	ctx.fillStyle = "rgb(181,231,248)";
	if(productdiano == productmaxno){ctx.fillStyle = "rgb(49,52,104)";}
	ctx.fillText(productdiamond, dianoxpos, dianoypos);
	
	var productpercent = inputtext5.value+"%";
	
	if(productpercent == "%"){productpercent="100%";}
	
	ctx.textAlign = 'center';
	fontsizepx = product.height*0.115;
	ctx.font = fontsizepx+"px Sen-Bold";
	ctx.fillStyle = "rgb(184,224,249)";
	if(productpercent == "100%"){ctx.fillStyle = "rgb(127,65,215)";}
	ctx.fillText(productpercent, perxpos, perypos);
}

function newstyle(){

    // Canvas dimensions
    const W = product.width;
    const H = product.height;

	// --------------------------------------------------
	// CREATING A PANEL BORDER GRADIENT
	// Shared by all three panels
	// --------------------------------------------------

	const panelRGB1 = HSBtoRGB(
		document.getElementById("newH1").value,
		document.getElementById("newS1").value,
		document.getElementById("newB1").value
	);

	const panelRGB2 = HSBtoRGB(
		document.getElementById("newH2").value,
		document.getElementById("newS2").value,
		document.getElementById("newB2").value
	);


	// Vertical gradient across the entire canvas
	const panelBorderGradient = ctx.createLinearGradient(
		0,
		0,
		0,
		H
	);

	panelBorderGradient.addColorStop(
		0,
		`rgb(${panelRGB1[0]}, ${panelRGB1[1]}, ${panelRGB1[2]})`
	);

	panelBorderGradient.addColorStop(
		1,
		`rgb(${panelRGB2[0]}, ${panelRGB2[1]}, ${panelRGB2[2]})`
	);

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";

    // --------------------------------------------------
	// BACKGROUND
	// --------------------------------------------------

	let backgroundImage;

	if(isimportedbg == 1){

		// Imported background
		backgroundImage = previewbg;

	}
	else{

		// Default background
		img.src = "Massif.png";
		backgroundImage = img;

	}

	if(
		backgroundImage &&
		backgroundImage.naturalWidth > 0 &&
		backgroundImage.naturalHeight > 0
	){

		const imageRatio =
			backgroundImage.naturalWidth /
			backgroundImage.naturalHeight;

		const canvasRatio = W / H;

		let drawW;
		let drawH;

		// Cover the whole canvas
		if(imageRatio > canvasRatio){

			drawH = H;
			drawW = H * imageRatio;

		}
		else{

			drawW = W;
			drawH = W / imageRatio;

		}

		// --------------------------------------------------
		// BLURRED BACKGROUND
		// --------------------------------------------------

		ctx.save();

		ctx.filter = "blur(1px)";

		ctx.drawImage(
			backgroundImage,
			(W - drawW) / 5,
			(H - drawH) / 5,
			drawW,
			drawH
		);

		ctx.restore();


		// --------------------------------------------------
		// DARKEN BACKGROUND
		// --------------------------------------------------

		ctx.save();

		ctx.globalAlpha = 0.45;
		ctx.fillStyle = "black";

		ctx.fillRect(
			0,
			0,
			W,
			H
		);

		ctx.restore();

	}


    // --------------------------------------------------
	// RIGHT-SIDE BACKGROUND IMAGE
	// --------------------------------------------------

	ctx.save();

	ctx.beginPath();

	ctx.moveTo(W * 0.745, 0);
	ctx.lineTo(W, 0);
	ctx.lineTo(W, H);
	ctx.lineTo(W * 0.66, H);

	ctx.closePath();

	ctx.clip();

	// Use imported background if available
	const rightImage = isimportedtn ? previewtn : imgtn;

	if (
		rightImage.naturalWidth > 0 &&
		rightImage.naturalHeight > 0
	) {

		// Fixed display size for the right-side image.
		// This stays the same regardless of the imported image dimensions.
		const iw = W * 0.39;
		const ih = H * 1;

		const imageRatio = rightImage.naturalWidth / rightImage.naturalHeight;
		const targetRatio = iw / ih;

		let sx, sy, sw, sh;

		if (imageRatio > targetRatio) {
			sh = rightImage.naturalHeight;
			sw = sh * targetRatio;
			sx = (rightImage.naturalWidth - sw) / 2;
			sy = 0;
		} else {
			sw = rightImage.naturalWidth;
			sh = sw / targetRatio;
			sx = 0;
			sy = (rightImage.naturalHeight - sh) / 2;
		}

		ctx.drawImage(
			rightImage,
			sx,
			sy,
			sw,
			sh,
			W - iw * 0.92,
			(H - ih) / 2,
			iw,
			ih
		);
	}

	ctx.restore();


	// --------------------------------------------------
	// SEPARATOR
	// --------------------------------------------------

	ctx.beginPath();

	ctx.moveTo(W * 0.745, 0);
	ctx.lineTo(W * 0.752, 0);
	ctx.lineTo(W * 0.662, H);
	ctx.lineTo(W * 0.655, H);

	ctx.closePath();

	ctx.fillStyle = panelBorderGradient;
	ctx.fill();

	// --------------------------------------------------
	// TOP LEFT LEVEL PANEL
	// --------------------------------------------------

	ctx.save();

	ctx.beginPath();

	ctx.moveTo(W * 0.05, H * 0.06);
	ctx.lineTo(W * 0.36, H * 0.06);
	ctx.lineTo(W * 0.34, H * 0.325);
	ctx.lineTo(W * 0.05, H * 0.325);
	ctx.closePath();

	// Fill panel using the top-center of the background
	ctx.save();

	ctx.clip();

	const panelImage = isimportedbg == 1 ? previewbg : img;

	const panelW = W * 0.31;
	const panelH = H * 0.265;

	const panelRatio = panelW / panelH;

	// Change this to control zoom
	const zoom = 4.5;

	// Keep the source crop at the same aspect ratio as the panel
	const cropH = panelImage.naturalHeight * 0.50 / zoom;
	const cropW = cropH * panelRatio;

	// Center the crop horizontally
	const cropX = (panelImage.naturalWidth - cropW) / 2;

	// Start from the top of the background
	const cropY = panelImage.naturalHeight * 0.05;

	ctx.drawImage(
		panelImage,

		// SOURCE CROP
		cropX,
		cropY,
		cropW,
		cropH,

		// PANEL
		W * 0.05,
		H * 0.06,
		panelW,
		panelH
	);

	ctx.globalAlpha = 0.45;
	ctx.fillStyle = "black";

	ctx.fillRect(
		W * 0.05,
		H * 0.06,
		W * 0.31,
		H * 0.265
	);

	ctx.globalAlpha = 1;

	ctx.restore();

	ctx.lineWidth = W * 0.006;
	ctx.strokeStyle = panelBorderGradient;
	ctx.stroke();

	ctx.restore();

    // --------------------------------------------------
	// TOP LEFT LEVEL NAME
	// --------------------------------------------------

	let productlvlname = inputtext.value;

	if(productlvlname == ""){
		productlvlname = "Massif";
	}

	// Convert H/S/B to HSL
	let h1 = H11.value / 360;
	let s1 = H12.value / 100;
	let b1 = H13.value / 100;

	let l1 = (2 - s1) * b1 / 2;

	if(l1 != 0){

		if(l1 == 1){
			s1 = 0;
		}
		else if(l1 < 0.5){
			s1 = s1 * b1 / (l1 * 2);
		}
		else{
			s1 = s1 * b1 / (2 - l1 * 2);
		}
	}

	const levelColor =
		"hsl(" +
		(h1 * 360) + "," +
		(s1 * 100) + "%," +
		(l1 * 100) + "%)";

	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	// --------------------------------------------------
	// TITLE POSITION / SIZE
	// --------------------------------------------------

	const levelNameX = W * 0.205;

	// Available width inside the left panel
	const levelNameMaxWidth = W * 0.30;

	// Normal title size
	let levelNameFontSize = H * 0.085;

	// If crowns are enabled, leave room for the crown row
	const titleMaxHeight = iscrowncheckbox.checked
		? H * 0.125
		: H * 0.20;
	
	// --------------------------------------------------
	// FONT SIZE BASED ON NAME LENGTH
	// --------------------------------------------------

	const nameLength = productlvlname.length;

	// Names up to 10 characters keep the normal size
	if(nameLength > 10){

		levelNameFontSize =
			H * 0.085 * (10 / nameLength);

	}


	// --------------------------------------------------
	// AUTOMATIC TITLE WRAPPING
	// --------------------------------------------------

	ctx.font = "bold " + levelNameFontSize + "px Sen-Bold";

	// First try the complete title on one line
	let titleLines = [productlvlname];


	// If the title is too wide, try splitting it into two lines
	if(ctx.measureText(productlvlname).width > levelNameMaxWidth){

		let words = productlvlname.split(" ");

		if(words.length > 1){

			let bestLine1 = "";
			let bestLine2 = "";
			let bestDifference = Infinity;

			for(let i = 1; i < words.length; i++){

				let line1 = words.slice(0, i).join(" ");
				let line2 = words.slice(i).join(" ");

				let width1 = ctx.measureText(line1).width;
				let width2 = ctx.measureText(line2).width;

				// Ignore splits where either line is too wide
				if(width1 <= levelNameMaxWidth &&
				width2 <= levelNameMaxWidth){

					let difference = Math.abs(width1 - width2);

					if(difference < bestDifference){

						bestDifference = difference;
						bestLine1 = line1;
						bestLine2 = line2;
					}
				}
			}

			if(bestLine1 != ""){
				titleLines = [bestLine1, bestLine2];
			}
		}
	}


	// --------------------------------------------------
	// IF STILL TOO WIDE → SHRINK THE FONT
	// --------------------------------------------------

	if(titleLines.length == 1){

		while(
			ctx.measureText(titleLines[0]).width > levelNameMaxWidth &&
			levelNameFontSize > H * 0.040
		){

			levelNameFontSize -= H * 0.005;

			ctx.font =
				"bold " +
				levelNameFontSize +
				"px Sen-Bold";
		}
	}
	else{

		// Make sure both lines fit comfortably
		while(
			(
				ctx.measureText(titleLines[0]).width > levelNameMaxWidth ||
				ctx.measureText(titleLines[1]).width > levelNameMaxWidth
			) &&
			levelNameFontSize > H * 0.040
		){

			levelNameFontSize -= H * 0.0035;

			ctx.font =
				"bold " +
				levelNameFontSize +
				"px Sen-Bold";
		}
	}

	// --------------------------------------------------
	// FINAL WIDTH SAFETY CHECK
	// --------------------------------------------------

	while(
		ctx.measureText(titleLines[0]).width > levelNameMaxWidth &&
		levelNameFontSize > H * 0.040
	){
		levelNameFontSize -= H * 0.003;

		ctx.font =
			"bold " +
			levelNameFontSize +
			"px Sen-Bold";
	}

	if(titleLines.length == 2){

		while(
			(
				ctx.measureText(titleLines[0]).width > levelNameMaxWidth ||
				ctx.measureText(titleLines[1]).width > levelNameMaxWidth
			) &&
			levelNameFontSize > H * 0.040
		){
			levelNameFontSize -= H * 0.002;

			ctx.font =
				"bold " +
				levelNameFontSize +
				"px Sen-Bold";
		}
	}


	// --------------------------------------------------
	// TITLE VERTICAL POSITION
	// --------------------------------------------------

	let lineHeight = levelNameFontSize * 0.90;

	let levelNameY;

	if(iscrowncheckbox.checked){

		// Title stays above the crowns
		if(titleLines.length == 1){

			levelNameY = H * 0.135;

		}
		else{

			// Two-line title gets slightly more room
			levelNameY = H * 0.125;
		}

	}
	else{

		// No crowns → title centered vertically in the panel
		if(titleLines.length == 1){

			levelNameY = H * 0.195;

		}
		else{

			levelNameY = H * 0.195;
		}
	}


	// --------------------------------------------------
	// COLORED GLOW
	// --------------------------------------------------

	ctx.save();

	ctx.shadowColor = levelColor;
	ctx.shadowBlur = H * 0.035;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;

	ctx.fillStyle = levelColor;


	// One line
	if(titleLines.length == 1){

		ctx.fillText(
			titleLines[0],
			levelNameX,
			levelNameY
		);

	}


	// Two lines
	else{

		ctx.fillText(
			titleLines[0],
			levelNameX,
			levelNameY - lineHeight / 2
		);

		ctx.fillText(
			titleLines[1],
			levelNameX,
			levelNameY + lineHeight / 2
		);

	}

	ctx.restore();


	// --------------------------------------------------
	// CROWNS
	// --------------------------------------------------

	if(iscrowncheckbox.checked){

		if(crowncount == 3){

			imgcrown1.src = "CrownOk.png";
			imgcrown2.src = "CrownOk.png";
			imgcrown3.src = "CrownOk.png";

		}
		else if(crowncount == 2){

			imgcrown1.src = "CrownOk.png";
			imgcrown2.src = "CrownOk.png";
			imgcrown3.src = "CrownUn.png";

		}
		else if(crowncount == 1){

			imgcrown1.src = "CrownOk.png";
			imgcrown2.src = "CrownUn.png";
			imgcrown3.src = "CrownUn.png";

		}
		else{

			imgcrown1.src = "CrownUn.png";
			imgcrown2.src = "CrownUn.png";
			imgcrown3.src = "CrownUn.png";

		}


		// Slightly bigger crowns
		const crownSize = H * 0.095;

		// Keep them close together
		const crownY = H * 0.195;

		ctx.drawImage(
			imgcrown1,
			W * 0.120,
			crownY,
			crownSize,
			crownSize
		);

		ctx.drawImage(
			imgcrown2,
			W * 0.177,
			crownY,
			crownSize,
			crownSize
		);

		ctx.drawImage(
			imgcrown3,
			W * 0.235,
			crownY,
			crownSize,
			crownSize
		);
	}

	// --------------------------------------------------
	// TOP RIGHT STAT PANEL
	// --------------------------------------------------

	ctx.save();

	ctx.beginPath();

	ctx.moveTo(W * 0.39, H * 0.06);
	ctx.lineTo(W * 0.685, H * 0.06);
	ctx.lineTo(W * 0.665, H * 0.325);
	ctx.lineTo(W * 0.37, H * 0.325);
	ctx.closePath();

	// Fill panel using the bottom-center of the background
	ctx.save();

	ctx.clip();

	const rightPanelImage = isimportedbg == 1 ? previewbg : img;

	const rightPanelW = W * 0.315;
	const rightPanelH = H * 0.265;

	const rightPanelRatio = rightPanelW / rightPanelH;

	// Same zoom as left panel
	const rightZoom = 4.5;

	// Keep source crop at the same aspect ratio as panel
	const rightCropH =
		rightPanelImage.naturalHeight * 0.50 / rightZoom;

	const rightCropW =
		rightCropH * rightPanelRatio;

	// Center the crop horizontally
	const rightCropX =
		(rightPanelImage.naturalWidth - rightCropW) / 2;

	// Start from the BOTTOM of the background
	const rightCropY =
		rightPanelImage.naturalHeight - rightCropH;

	ctx.drawImage(
		rightPanelImage,

		// SOURCE CROP
		rightCropX,
		rightCropY,
		rightCropW,
		rightCropH,

		// PANEL
		W * 0.37,
		H * 0.06,
		rightPanelW,
		rightPanelH
	);

	// Tint
	ctx.globalAlpha = 0.45;
	ctx.fillStyle = "black";

	ctx.fillRect(
		W * 0.37,
		H * 0.06,
		rightPanelW,
		rightPanelH
	);

	ctx.globalAlpha = 1;

	ctx.restore();

	ctx.lineWidth = W * 0.006;
	ctx.strokeStyle = panelBorderGradient;
	ctx.stroke();

	ctx.restore();

	// --------------------------------------------------
	// PERCENTAGE
	// --------------------------------------------------

	let productpercent = inputtext5.value;

	if(productpercent == ""){
		productpercent = "100";
	}

	productpercent += "%";

	// Convert percentage HSB values to HSL
	let h3 = H31.value / 360;
	let s3 = H32.value / 100;
	let b3 = H33.value / 100;

	let l3 = (2 - s3) * b3 / 2;

	if(l3 != 0){
		if(l3 == 1){
			s3 = 0;
		}
		else if(l3 < 0.5){
			s3 = s3 * b3 / (l3 * 2);
		}
		else{
			s3 = s3 * b3 / (2 - l3 * 2);
		}
	}

	const percentageColor =
		"hsl(" +
		(h3 * 360) + "," +
		(s3 * 100) + "%," +
		(l3 * 100) + "%)";

	ctx.save();

	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	ctx.font = "bold " + (H * 0.122) + "px Sen-Bold";

	// --------------------------------------------------
	// SHADOW
	// --------------------------------------------------

	ctx.globalAlpha = 0.35;
	ctx.fillStyle = "rgba(0, 0, 0, 0.8)";

	ctx.fillText(
		productpercent,
		W * 0.527 + W * 0.004,
		H * 0.140 + H * 0.006
	);

	// --------------------------------------------------
	// MAIN TEXT
	// --------------------------------------------------

	ctx.globalAlpha = 1;
	ctx.fillStyle = percentageColor;

	ctx.fillText(
		productpercent,
		W * 0.527,
		H * 0.140
	);

	ctx.restore();


	// --------------------------------------------------
	// DIAMONDS
	// --------------------------------------------------

	let DiaCount = inputtext2.value;
	let MaxCount = inputtext3.value;

	if(DiaCount == ""){
		DiaCount = "20";
	}

	if(MaxCount == ""){
		MaxCount = "20";
	}


	// --------------------------------------------------
	// CONVERT GEM HSB → HSL
	// --------------------------------------------------

	let h2 = H21.value / 360;
	let s2 = H22.value / 100;
	let b2 = H23.value / 100;

	let l2 = (2 - s2) * b2 / 2;

	if(l2 != 0){
		if(l2 == 1){
			s2 = 0;
		}
		else if(l2 < 0.5){
			s2 = s2 * b2 / (l2 * 2);
		}
		else{
			s2 = s2 * b2 / (2 - l2 * 2);
		}
	}


	// --------------------------------------------------
	// CONVERT HSL → RGB
	// --------------------------------------------------

	let r, g, b;

	if(s2 == 0){

		r = g = b = l2;

	}
	else{

		const hue2rgb = function(p, q, t){

			if(t < 0) t += 1;
			if(t > 1) t -= 1;

			if(t < 1/6)
				return p + (q - p) * 6 * t;

			if(t < 1/2)
				return q;

			if(t < 2/3)
				return p + (q - p) * (2/3 - t) * 6;

			return p;
		};

		let q =
			l2 < 0.5
				? l2 * (1 + s2)
				: l2 + s2 - l2 * s2;

		let p = 2 * l2 - q;

		r = hue2rgb(p, q, h2 + 1/3);
		g = hue2rgb(p, q, h2);
		b = hue2rgb(p, q, h2 - 1/3);
	}


	// --------------------------------------------------
	// DIAMOND
	// --------------------------------------------------

	const diamondSize = H * 0.082;

	ctx.save();

	// Completely isolate diamond from previous effects
	ctx.globalAlpha = 1;
	ctx.globalCompositeOperation = "source-over";

	ctx.shadowColor = "rgba(0,0,0,0)";
	ctx.shadowBlur = 0;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;

	ctx.filter = "none";

	// Base diamond
	ctx.drawImage(
		diaT,
		W * 0.437,
		H * 0.218,
		diamondSize,
		diamondSize
	);

	// RGB color layers
	ctx.globalCompositeOperation = "screen";

	ctx.globalAlpha = r;

	ctx.drawImage(
		diaR,
		W * 0.437,
		H * 0.218,
		diamondSize,
		diamondSize
	);

	ctx.globalAlpha = g;

	ctx.drawImage(
		diaG,
		W * 0.437,
		H * 0.218,
		diamondSize,
		diamondSize
	);

	ctx.globalAlpha = b;

	ctx.drawImage(
		diaB,
		W * 0.437,
		H * 0.218,
		diamondSize,
		diamondSize
	);

	ctx.restore();


	// --------------------------------------------------
	// DIAMOND COUNT
	// --------------------------------------------------

	ctx.textAlign = "left";
	ctx.fillStyle =
		"hsl(" +
		(h2 * 360) + "," +
		(s2 * 100) + "%," +
		(l2 * 100) + "%)";

	// Current diamonds (left side) - bigger, shifted right and up
	ctx.font = "bold " + (H * 0.095) + "px Sen-Bold";

	const diamondTextX = W * 0.492;
	const diamondTextY = H * 0.27;

	ctx.fillText(
		DiaCount,
		diamondTextX,
		diamondTextY
	);

	// Maximum diamonds (/20) - stays in its current position
	const diaCountWidth = ctx.measureText(DiaCount).width;

	ctx.font = "bold " + (H * 0.06) + "px Sen-Bold";

	ctx.fillText(
		"/" + MaxCount,
		W * 0.494 + diaCountWidth,
		H * 0.279
	);

	// --------------------------------------------------
	// MAIN THUMBNAIL PANEL
	// --------------------------------------------------

	ctx.save();

	ctx.beginPath();

	ctx.moveTo(W * 0.05, H * 0.385);
	ctx.lineTo(W * 0.66, H * 0.385);
	ctx.lineTo(W * 0.62, H * 0.94);
	ctx.lineTo(W * 0.05, H * 0.94);

	ctx.closePath();
	ctx.clip();


	// --------------------------------------------------
	// CHOOSE IMAGE
	// --------------------------------------------------

	let mainImage;

	if(isimportedgp == 1){
		mainImage = previewgp;
	}
	else{
		mainImage = imggp;
	}


	// --------------------------------------------------
	// DRAW IMAGE
	// --------------------------------------------------

	if(
		mainImage &&
		mainImage.naturalWidth > 0 &&
		mainImage.naturalHeight > 0
	){

		const panelX = W * 0.055;
		const panelY = H * 0.385;
		const panelW = W * 0.605;
		const panelH = H * 0.555;

		const imageRatio =
			mainImage.naturalWidth /
			mainImage.naturalHeight;

		const panelRatio =
			panelW /
			panelH;

		let drawW;
		let drawH;

		if(imageRatio > panelRatio){

			drawH = panelH;
			drawW = drawH * imageRatio;

		}
		else{

			drawW = panelW;
			drawH = drawW / imageRatio;

		}

		ctx.drawImage(
			mainImage,
			panelX + (panelW - drawW) / 2,
			panelY + (panelH - drawH) / 2,
			drawW,
			drawH
		);
	}

	ctx.restore();


    // --------------------------------------------------
    // THUMBNAIL BORDER
    // --------------------------------------------------

    ctx.beginPath();

    ctx.moveTo(W * 0.05, H * 0.385);
    ctx.lineTo(W * 0.66, H * 0.385);
    ctx.lineTo(W * 0.62, H * 0.94);
    ctx.lineTo(W * 0.05, H * 0.94);
    ctx.closePath();

    ctx.lineWidth = W * 0.006;
    ctx.strokeStyle = panelBorderGradient;
    ctx.stroke();


	// --------------------------------------------------
	// NEW LABEL
	// --------------------------------------------------

	if(showNewTag.checked){

		// --------------------------------------------------
		// OUTER WHITE BORDER
		// --------------------------------------------------

		ctx.save();

		ctx.beginPath();

		ctx.moveTo(W * 0.045, H * 0.375);
		ctx.lineTo(W * 0.185, H * 0.375);
		ctx.lineTo(W * 0.175, H * 0.480);
		ctx.lineTo(W * 0.045, H * 0.480);
		ctx.closePath();

		ctx.fillStyle = "white";
		ctx.fill();

		// --------------------------------------------------
		// INNER DARK PANEL
		// --------------------------------------------------

		ctx.beginPath();

		ctx.moveTo(W * 0.052, H * 0.385);
		ctx.lineTo(W * 0.178, H * 0.385);
		ctx.lineTo(W * 0.169, H * 0.470);
		ctx.lineTo(W * 0.052, H * 0.470);
		ctx.closePath();

		ctx.globalCompositeOperation = "add";
		ctx.globalAlpha = 0.7;
		ctx.fillStyle = "#10243a";
		ctx.fill();
		ctx.globalAlpha = 1;

		// --------------------------------------------------
		// INNER BLUE-GRAY BORDER
		// --------------------------------------------------

		ctx.lineWidth = W * 0.003;

		ctx.strokeStyle = "#7fa6c4";

		ctx.stroke();

		// --------------------------------------------------
		// NEW TEXT
		// --------------------------------------------------

		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		ctx.font = "bold " + (H * 0.075) + "px Sen-Bold";

		// White center
		ctx.fillStyle = "white";

		ctx.fillText(
			"NEW",
			W * 0.112,
			H * 0.427
		);

		ctx.restore();

	}


	// --------------------------------------------------
	// STAR RATING
	// --------------------------------------------------

	const starSize = H * 0.075;

	// Starting position = bottom-left star
	const starStartX = W * 0.570;
	const starStartY = H * 0.835;

	// How far each star moves
	const starXSpacing = W * 0.0065;   // move right
	const starYSpacing = H * 0.087;    // move up


	// --------------------------------------------------
	// COLORED GRADIENT OVERLAY
	// --------------------------------------------------

	ctx.save();

	// Gradient position / size
	const gradientX = W * 0.5565;
	const gradientY = H * 0.390;

	const gradientWidth = W * 0.1;
	const gradientHeight = H * 0.5446;


	// --------------------------------------------------
	// SLANTED SHAPE
	// --------------------------------------------------

	ctx.beginPath();

	ctx.moveTo(
		gradientX + gradientWidth * 0.38,
		gradientY
	);

	ctx.lineTo(
		gradientX + gradientWidth,
		gradientY
	);

	ctx.lineTo(
		gradientX + gradientWidth * 0.62,
		gradientY + gradientHeight
	);

	ctx.lineTo(
		gradientX,
		gradientY + gradientHeight
	);

	ctx.closePath();

	ctx.clip();


	// --------------------------------------------------
	// GET GRADIENT COLORS
	// --------------------------------------------------

	const rgb1 = HSBtoRGB(
		document.getElementById("gradientH1").value,
		document.getElementById("gradientS1").value,
		document.getElementById("gradientB1").value
	);

	const rgb2 = HSBtoRGB(
		document.getElementById("gradientH2").value,
		document.getElementById("gradientS2").value,
		document.getElementById("gradientB2").value
	);


	// --------------------------------------------------
	// GRADIENT
	// --------------------------------------------------

	const gradient = ctx.createLinearGradient(
		gradientX,
		gradientY + gradientHeight,
		gradientX,
		gradientY
	);

	gradient.addColorStop(
		0,
		`rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})`
	);

	gradient.addColorStop(
		1,
		`rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`
	);


	// --------------------------------------------------
	// DRAW
	// --------------------------------------------------

	ctx.globalCompositeOperation = "add";
	ctx.globalAlpha = 0.65;

	ctx.fillStyle = gradient;

	ctx.fillRect(
		gradientX,
		gradientY,
		gradientWidth,
		gradientHeight
	);

	ctx.restore();


	// --------------------------------------------------
	// STARS
	// --------------------------------------------------

	ctx.save();

	ctx.filter = "brightness(0) invert(1)";

	// Small soft glow
	ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
	ctx.shadowBlur = H * 0.018;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;

	// Draw stars diagonally: ↗
	for(let i = 0; i < starcount; i++){

		const starX = starStartX + (i * starXSpacing);
		const starY = starStartY - (i * starYSpacing);

		if(star[i] && star[i].naturalWidth > 0){

			ctx.drawImage(
				star[i],
				starX,
				starY,
				starSize,
				starSize
			);

		}
	}

	ctx.restore();


	// --------------------------------------------------
	// LEVEL DISPLAY
	// --------------------------------------------------

	if(showLevelText.checked){

		let levelNumber = inputtext6.value;

		if(levelNumber === ""){
			levelNumber = "1";
		}

		ctx.save();

		ctx.textAlign = "left";
		ctx.textBaseline = "bottom";

		const levelFontSize = H * 0.09;
		ctx.font = "bold " + levelFontSize + "px Sen-Bold";

		const levelText = "Lv." + levelNumber;

		const levelX = W * 0.075;
		const levelY = H * 0.92;

		// --------------------------------------------------
		// SAME GRADIENT COLORS AS STAR OVERLAY
		// --------------------------------------------------

		const rgb1 = HSBtoRGB(
			document.getElementById("gradientH1").value,
			document.getElementById("gradientS1").value,
			document.getElementById("gradientB1").value
		);

		const rgb2 = HSBtoRGB(
			document.getElementById("gradientH2").value,
			document.getElementById("gradientS2").value,
			document.getElementById("gradientB2").value
		);

		// Gradient follows the height of the text
		const levelGradient = ctx.createLinearGradient(
			levelX,
			levelY - levelFontSize,
			levelX,
			levelY
		);

		levelGradient.addColorStop(
			0,
			`rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`
		);

		levelGradient.addColorStop(
			1,
			`rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})`
		);

		// --------------------------------------------------
		// GRADIENT OUTLINE / GLOW
		// --------------------------------------------------

		ctx.lineWidth = H * 0.018;

		ctx.lineJoin = "round";
		ctx.lineCap = "round";

		ctx.strokeStyle = levelGradient;

		ctx.strokeText(
			levelText,
			levelX,
			levelY
		);

		// --------------------------------------------------
		// WHITE CENTER
		// --------------------------------------------------

		ctx.fillStyle = "white";

		ctx.fillText(
			levelText,
			levelX,
			levelY
		);

		ctx.restore();
	}


    // Reset canvas state
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";
}

function onStarGradientColorChange() {

	// ------------------------------------------
	// Gradient Color 1
	// ------------------------------------------

	const h1 = document.getElementById("gradientH1").value;
	const s1 = document.getElementById("gradientS1").value;
	const b1 = document.getElementById("gradientB1").value;

	document.getElementById("gradientH1Num").value = h1;
	document.getElementById("gradientS1Num").value = s1;
	document.getElementById("gradientB1Num").value = b1;


	// ------------------------------------------
	// Gradient Color 2
	// ------------------------------------------

	const h2 = document.getElementById("gradientH2").value;
	const s2 = document.getElementById("gradientS2").value;
	const b2 = document.getElementById("gradientB2").value;

	document.getElementById("gradientH2Num").value = h2;
	document.getElementById("gradientS2Num").value = s2;
	document.getElementById("gradientB2Num").value = b2;


	// Redraw thumbnail
	onTypeInfo();
}

function onPanelGradientChange(type, color) {

	if(type !== "new"){
		return;
	}

	// ------------------------------------------
	// Panel Gradient Color 1
	// ------------------------------------------

	const h1 = document.getElementById("newH1").value;
	const s1 = document.getElementById("newS1").value;
	const b1 = document.getElementById("newB1").value;

	document.getElementById("panelGradientH1Num").value = h1;
	document.getElementById("panelGradientS1Num").value = s1;
	document.getElementById("panelGradientB1Num").value = b1;


	// ------------------------------------------
	// Panel Gradient Color 2
	// ------------------------------------------

	const h2 = document.getElementById("newH2").value;
	const s2 = document.getElementById("newS2").value;
	const b2 = document.getElementById("newB2").value;

	document.getElementById("panelGradientH2Num").value = h2;
	document.getElementById("panelGradientS2Num").value = s2;
	document.getElementById("panelGradientB2Num").value = b2;


	// Redraw
	onTypeInfo();
}

function getpos(){
	console.log(debugxpos.value/1000+" "+debugypos.value/1000);
	
}

function onTypeInfo(){
	if(inputtext2.value>99){
		inputtext2.value = "99";
	}
	if(inputtext2.value<0){
		inputtext2.value = "0";
	}
	if(inputtext2.value != ""){
	    inputtext2.value = Math.round(inputtext2.value);
	}
	if(inputtext3.value>99){
		inputtext3.value = "99";
	}
	if(inputtext3.value<0){
		inputtext3.value = "0";
	}
	if(inputtext3.value != ""){
	    inputtext3.value = Math.round(inputtext3.value);
	}
	if(inputtext5.value>100){
		inputtext5.value = "100";
	}
	if(inputtext5.value<0){
		inputtext5.value = "0";
	}
	if(inputtext5.value != ""){
	    inputtext5.value = Math.round(inputtext5.value);
	}
		if(inputtext6.value>999){
		inputtext6.value = "999";
	}
	if(inputtext6.value<0){
		inputtext6.value = "0";
	}
	if(inputtext6.value != ""){
	    inputtext6.value = Math.round(inputtext6.value);
	}
	if(inputtext7.value>99){
		inputtext7.value = "99";
	}
	if(inputtext7.value<0){
		inputtext7.value = "0";
	}
	if(inputtext7.value != ""){
	    inputtext7.value = Math.round(inputtext7.value);
	}
	onchange();
}

var uibuttons = document.querySelectorAll(".ui-button");

uibuttons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectUI(button.dataset.ui);
    });
});

async function selectUI(ui) {

    currentUI = ui;

    uibuttons.forEach(function(button) {
        button.classList.toggle(
            "active",
            button.dataset.ui === currentUI
        );
    });

    document.getElementById("showcase").style.animationName = "none";

    requestAnimationFrame(() => {
        document.getElementById("showcase").style.animationName = "changeui";
    });

    onchange();
}

var starbtns = [
starbtn1 = document.getElementById("star1"),
starbtn2 = document.getElementById("star2"),
starbtn3 = document.getElementById("star3"),
starbtn4 = document.getElementById("star4"),
starbtn5 = document.getElementById("star5"),
starbtn6 = document.getElementById("star6")]

async function onsetdif(e){
		for(let x=0;x<6;x++){
		    starbtns[x].style.filter = "brightness(150%) saturate(0)";
		    starbtns[x].addEventListener("mouseover", function() {
                starbtns[x].style.filter = "brightness(120%) saturate(0)";
            });
		    starbtns[x].addEventListener("mouseout", function() {
                starbtns[x].style.filter = "brightness(150%) saturate(0)";
            });
		}
		for(let y=0;y<e;y++){
				    starbtns[y].style.filter = "brightness(150%)";
		    starbtns[y].addEventListener("mouseover", function() {
                starbtns[y].style.filter = "brightness(120%)";
            });
		    starbtns[y].addEventListener("mouseout", function() {
                starbtns[y].style.filter = "brightness(150%)";
            });
		}
		starcount = e;
		onchange();
}

// Custom and new stuff goes here

function HSBtoRGB(h, s, b) {

	h = Number(h);
	s = Number(s) / 100;
	b = Number(b) / 100;

	const k = n => (n + h / 60) % 6;
	const f = n => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));

	return [
		Math.round(f(5) * 255),
		Math.round(f(3) * 255),
		Math.round(f(1) * 255)
	];
}

const downloadButton = document.getElementById("downloadBtn");
downloadButton.addEventListener("click", function () {

    // Make sure product exists and is actually a canvas
    if (!product) {
        console.error("Canvas 'product' does not exist.");
        return;
    }

    if (!(product instanceof HTMLCanvasElement)) {
        console.error("product exists, but it is not a canvas:", product);
        return;
    }

    console.log("Canvas found:", product);
    console.log("Canvas size:", product.width, "x", product.height);

    try {
        // Convert canvas to data URL
        const dataURL = product.toDataURL("image/png");

        console.log("Canvas successfully converted to PNG.");

        // Convert the data URL to a Blob
        const parts = dataURL.split(",");
        const byteString = atob(parts[1]);

        const mime = parts[0].match(/:(.*?);/)[1];

        const buffer = new ArrayBuffer(byteString.length);
        const bytes = new Uint8Array(buffer);

        for (let i = 0; i < byteString.length; i++) {
            bytes[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([buffer], { type: mime });

        // Create temporary URL
        const url = URL.createObjectURL(blob);

        // Create download link
        const link = document.createElement("a");
        link.href = url;
        link.download = "RollingSkyThumbnail.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up
        setTimeout(function () {
            URL.revokeObjectURL(url);
        }, 1000);

    } catch (error) {
        console.error("Failed to create/download canvas image:", error);
    }
});

const showLevelText = document.getElementById("showLevelText");

showLevelText.addEventListener("change", function () {
    onchange();
});

const showNewTag = document.getElementById("showNewTag");

showNewTag.addEventListener("change", function () {
    onchange();
});
