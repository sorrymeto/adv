// JavaScript Document
$(document).ready(function(){
		/*--------banner 图片轮换---------------- */
	var x1=-1,x=0;
	var banners=$(".images");
	var nots=$(".nots");
	var timer=null;
    function ChangeBannerL(x1,x,b,n){
			  b.removeClass("banner-active").removeClass("activer").removeClass("activel").removeClass("next-left").removeClass("next-right");
			  b.eq(x1).addClass("activel");
			  b.eq(x).addClass("next-left");
			  n.removeClass("nots-active");
			  n.eq(x).addClass("nots-active");  		
		}
		
	function ChangeBannerR(x1,x,b,n){
		  b.removeClass("banner-active").removeClass("active").removeClass("activer").removeClass("activel").removeClass("next-left").removeClass("next-right");
			  b.eq(x1).addClass("activer");
			  b.eq(x).addClass("next-right");
		  n.removeClass("nots-active");
		  n.eq(x).addClass("nots-active");  		
		}
	 function ChangeBannerLi(x1,x,b,n){
		 b.removeClass("banner-active").removeClass("activer").removeClass("activel").removeClass("next-left").removeClass("next-right");
			  b.eq(x1).addClass("activel");
			  b.eq(x).addClass("next-left");
			  n.removeClass("some-class-active");
			  n.eq(x).addClass("some-class-active");  		
		}
		
		
		 timer=setInterval(function(){
			   x1=x;
			   x++;
			   if(x1>3){x1=0;}
			   if(x>3){x=0;}
			  ChangeBannerL(x1,x,banners,nots);
			  },5000)
			  
			  
	$(".to-prav").click(function(){
		   clearInterval(timer);
		    x1=x;
		   x++;
		   if(x1>3){x1=0;}
		   if(x>3){x=0;}
		   ChangeBannerL(x1,x,banners,nots);
		  timer=setInterval(function(){
			    x1=x;
			   x++;
			   if(x1>3){x1=0;}
			   if(x>3){x=0;}
			  ChangeBannerL(x1,x,banners,nots);
			  },5000)
		})
	
		
		
		
		
	$(".to-next").click(function(){ 
		  clearInterval(timer);
		   x1=x;
		  x++;
		  if(x1>3){x1=0;}
		  if(x>3){x=0;}
		  ChangeBannerR(x1,x,banners,nots);
		  timer=setInterval(function(){
			 x1=x;
			 x++;
			 if(x1>3){x1=0;}
			 if(x>3){x=0;}
			ChangeBannerR(x1,x,banners,nots);
			},5000)
		})		  
	
	nots.click(function(){
		   clearInterval(timer);
		   x1=x;
		   x=$(this).index();
		 
		   if(x1>3){x1=0;}
		   if(x>3){x=0;}
		  nots.removeClass("nots-active");
		  nots.eq(x).addClass("nots-active");
		  if(x1<x){ChangeBannerL(x1,x,banners,nots);}else{ChangeBannerR(x1,x,banners,nots);}
		  
		  timer=setInterval(function(){
			   x1=x;
			   x++;
			   
			   if(x1>3){x1=0;}
			   if(x>3){x=0;}
			  ChangeBannerL(x1,x,banners,nots);
			  },5000)
		})
		
		
		
		
		/*----------------------------------------index-case-----------------------------------*/
		var lis=$(".some-class").find("li");
		var case_box=$(".cases-box");	
		lis.hover( function(){
			var i=$(this).index();
			$(".line-active").css("left",20*i+"%")
			},function(){
		     var i=$(".some-class-active").index();
			$(".line-active").css("left",20*i+"%")
				})
		lis.click( function(){
			 x1=$(".some-class-active").index();
			 x=$(this).index(); 
			 
			 if(x1>4){x1=0;}
			 if(x>4){x=0;}
			ChangeBannerLi(x1,x,case_box,lis);
			 $(".line-active").css("left",20*x+"%");
				})
		
		
	$(window).scroll(function(){
		
		if($(window).innerWidth()>1024){
			if($(document).scrollTop()>$(".about").offset().top-$(window).innerHeight()){
			  $(".about").css({"background-position-y":-($(document).scrollTop()-$(".about").offset().top+$(window).innerHeight())*0.3+'px'})
			}
		  }
		
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
})