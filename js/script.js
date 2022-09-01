var slid = false;

window.onload = function () {
	$(".loading").remove();
	animater("body");
	$(".layer1").addClass('active');
	setTimeout(function() {
		$(".owl-item .slid").removeClass('rmar');
		$(".owl-item .slid").removeClass('lmar');
		slid = true;
	}, 3000);
}

$(document).ready(function (e) {
	if($('*').is('#center')) {
		$('body').slidepage(".pimp", ".centerstr", ".layer");
	}
	var owl = $(".contslid");
	owl.owlCarousel({
		center: true,
		items:1,
		loop:true,
		margin:0,
		mouseDrag:false,
		touchDrag:false,
	});

	owl.on('mousewheel', function (e) {
		if(slid){
			e = window.event;
			if (e.deltaY>0) {
				owl.trigger('next.owl', 600);
				slid = false;
			} else {
				owl.trigger('prev.owl', 600);
				slid = false;
			}
		}
		e.preventDefault();
	});

	window.onkeydown = window.onkeyup = window.onkeypress = handle;
	function handle(e) {
		if (slid){
			if (e.keyCode==39){
				owl.trigger('next.owl', 600);
				slid = false;
			}
			if(e.keyCode==37){
				owl.trigger('prev.owl', 600);
				slid = false;
			}
		}
	}
	$(".leftz").click(function() {
		if (slid){
			owl.trigger('prev.owl', 600);
			slid = false;
		}
	});
	$(".rightz").click(function() {
		if (slid){
			owl.trigger('next.owl', 600);
			slid = false;
		}
	});

	owl.on('translate.owl.carousel', function(event) {
		var item = event.item.index;
		item = item + 1;
		var iteml = 0;
		if(item==7){
			iteml=3;
		}
		if(item==2){
			iteml=6;
		}
		$(".owl-item .slid").addClass('min');
		$(".owl-item:nth-child("+item+") .slid").removeClass('min');
		$(".owl-item:nth-child("+iteml+") .slid").removeClass('min');

		iteml = 0;
	})
	owl.on('translated.owl.carousel', function(event) {
		slid = true;
	})

})


function animater(obj) {
	$(obj).find('*[an]').each(function() {
		var arr = $(this).attr("an");
		arr = arr.split(",");
		var anim = arr[0];
		var zaderj = Number(arr[1]);
		var ch = $(this).children('*').length;
		if(anim=="menu"){
			$(this).each(function() {
				var time = 300
				var str = "menuh 0.3s linear both";
				animation(this,str,time)
			})
			$(this).find('a').each(function(index) {
				var time = 300
				var str = "menup 0.3s linear both";
				animation(this,str,time)
			})
		}
		if(anim=="textp"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 500+(zad*1000);
				var str = "textp 0.5s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="linep"){
			$(this).children('i').each(function(index) {
				var zad = ((index/ch)+zaderj)/1.5;
				var time = 1000+(zad*1000);
				var str = "linep 1s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="fonp"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 1000+(zad*1000);
				var str = "fonp 1s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="chisla"){
			$(this).children('div').each(function(index) {
				var zad = ((index/ch)+zaderj)/1.2;
				var time = 1000+(zad*1000);
				$(this).children('span,i').each(function(index) {
					var str = "chisla 1s ease-out "+zad+"s both";
					animation(this,str,time)
				})
			})
		}
		if(anim=="fonp_c"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 3500+(zad*1000);
				var str = "fonp_c 3.5s ease-out "+zad+"s both";
				animation(this,str,time,true)
			})
		}
		if(anim=="linep_c"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 3500+(zad*1000);
				var str = "linep_c 3.5s ease-out "+zad+"s both";
				animation(this,str,time,true)
			})
		}
		if(anim=="textp_c"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 3500+(zad*1000);
				var str = "textp_c 3.5s ease-out "+zad+"s both";
				animation(this,str,time,true)
			})
		}
		if(anim=="chisla_c"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 2500+(zad*1000);
				var str = "chisla_c 2.5s linear "+zad+"s both";
				animation(this,str,time,true)
			})
			$(this).children('div').each(function(index) {
				$(this).children('span').each(function(index) {
					var zad = ((index/18)+zaderj);
					var time = 1000+(zad*1000);
					var str = "chisla_c_span 1s linear "+zad+"s alternate both";
					animation(this,str,time,true)
				})
				$(this).children('i').each(function(index) {
					var zad = ((index/18)+zaderj);
					var time = 1000+(zad*1000);
					var str = "chisla_c_i 1s linear "+zad+"s alternate both";
					animation(this,str,time,true)
				})
			})
		}
		if(anim=="slid"){
			$(this).children('.kvad').each(function() {
				var zad = zaderj;
				var time = 2000+(zad*1000);
				var str = "kvad_slid 1s linear "+zad+"s both";
				animation(this,str,time)
			})
			$(this).children('.text').each(function() {
				var zad = zaderj+1;
				var time = 1000+(zad*1000);
				var str = "text_slid 1s ease-out "+zad+"s both";
				animation(this,str,time)
			})
			$(this).find('.photo img').each(function() {
				var zad = zaderj+2;
				var time = 1000+(zad*1000);
				var str = "photo_slid 1s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="fonload"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 500+(zad*1000);
				var str = "fonload 0.5s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="home"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 500+(zad*1000);
				var str = "home 0.5s ease-out "+zad+"s both";
				animation(this,str,time)
			})
			$(this).find('span').each(function() {
				var zad = zaderj+0.5;
				var time = 500+(zad*1000);
				var str = "home_span 0.5s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="menukn"){
			$(this).children('span').each(function(index) {
				var zad = ((index/ch)+zaderj)/2;
				var time = 600+(zad*1000);
				var str = "menukn 0.5s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="num"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 600+(zad*1000);
				var str = "num 0.5s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="textdec"){
			$(this).children('span').each(function(index) {
				var zad = ((index/ch)+zaderj);
				var time = 600+(zad*1000);
				var str = "textdec 0.5s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
		if(anim=="opac"){
			$(this).each(function() {
				var zad = zaderj;
				var time = 1000+(zad*1000);
				var str = "opac 1s ease-out "+zad+"s both";
				animation(this,str,time)
			})
		}
	});
}

function animation(obj,str,tim,rem){
	$(obj).css({animation:str});
	setTimeout(function() {
		if(!rem){
			$(obj).removeAttr('style')
		}
	}, tim);
}

function menu() {
	if ($('.menu').css("display") == "none") {
		$('.menu').css({
			"display": "block"
		});
		animater(".menu");
		$('.menukn').addClass("active");
		$('.slider').addClass("bl");
		$('.centerstr').addClass("bl");
		$('.decor').addClass("opac");
	}else{
		$('.menu').css({
			"display": "none"
		});
		$('.menukn').removeClass("active");
		$('.slider').removeClass("bl");
		$('.centerstr').removeClass("bl");
		$('.decor').removeClass("opac");
	}
}

var blackvar = true;

function blackp() {
	if(blackvar){
		if ($('.blackp').css("display") == "none") {
			$('.blackp').css({
				"display": "block"
			});
			animater(".blackp");
			blackvar = false;
			setTimeout(function() {
				blackvar = true;
				anf();
			}, 4700);
		}else{
			animater(".blackp");
			blackvar = false;
			setTimeout(function() {
				$(".blackp").find('*').removeAttr('style');
				blackvar = true;
				anf();
				$('.blackp').css({
					"display": "none"
				});
			}, 3700);
		}
	}
}

function anf(){
	$('.blackp').find('*[an]').each(function(index) {
		if($(this).attr("an")=="fonp,0"){
			$(this).attr("an","fonp_c,0");
		}else{
			if($(this).attr("an")=="fonp_c,0"){
				$(this).attr("an","fonp,0");
			}
		}
		if($(this).attr("an")=="linep,1.5"){
			$(this).attr("an","linep_c,0");
		}else{
			if($(this).attr("an")=="linep_c,0"){
				$(this).attr("an","linep,1.5");
			}
		}
		if($(this).attr("an")=="textp,2.5"){
			$(this).attr("an","textp_c,0");
		}else{
			if($(this).attr("an")=="textp_c,0"){
				$(this).attr("an","textp,2.5");
			}
		}
		if($(this).attr("an")=="chisla,3.5"){
			$(this).attr("an","chisla_c,0");
		}else{
			if($(this).attr("an")=="chisla_c,0"){
				$(this).attr("an","chisla,3.5");
			}
		}
	})
}