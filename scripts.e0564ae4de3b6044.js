var TxtType=function(s,t,e){this.toRotate=t,this.el=s,this.loopNum=0,this.period=parseInt(e,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.toRotate[this.loopNum%this.toRotate.length];this.txt=t.substring(0,this.isDeleting?this.txt.length-1:this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,i=200-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout(function(){e.tick()},i)};