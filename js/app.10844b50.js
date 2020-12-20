(function(t){function i(i){for(var s,o,r=i[0],p=i[1],h=i[2],c=0,d=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(t[s]=p[s]);l&&l(i);while(d.length)d.shift()();return n.push.apply(n,h||[]),e()}function e(){for(var t,i=0;i<n.length;i++){for(var e=n[i],s=!0,r=1;r<e.length;r++){var p=e[r];0!==a[p]&&(s=!1)}s&&(n.splice(i--,1),t=o(o.s=e[0]))}return t}var s={},a={app:0},n=[];function o(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)o.d(e,s,function(i){return t[i]}.bind(null,s));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/vue-partivleground/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],p=r.push.bind(r);r.push=i,r=r.slice();for(var h=0;h<r.length;h++)i(r[h]);var l=p;n.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"2e88":function(t,i,e){"use strict";e("8930")},3056:function(t,i,e){},"4fb3":function(t,i,e){"use strict";e("3056")},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("7a23"),a=Object(s["c"])("div",{id:"intro"},[Object(s["c"])("h1",null,"Particleground"),Object(s["c"])("p",null,"A Vue components for snazzy background particle systems")],-1);function n(t,i,e,n,o,r){var p=Object(s["f"])("Partivleground");return Object(s["d"])(),Object(s["b"])(p,{"line-color":"#fff","dot-color":"#fff",class:"partivleground"},{default:Object(s["g"])((function(){return[a]})),_:1})}var o={class:"vue-pg"},r={class:"vue-pg__content"};function p(t,i,e,a,n,p){return Object(s["d"])(),Object(s["b"])("div",o,[Object(s["c"])("div",r,[Object(s["e"])(t.$slots,"default")])])}e("a9e3"),e("a434"),e("ac1f"),e("466d");var h=e("d4ec"),l=e("bee2"),c=(e("cb29"),e("b680"),function(){function t(i){switch(Object(h["a"])(this,t),this.parent=i,this.stackPos=null,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*this.parent.canvas.width),y:Math.ceil(Math.random()*this.parent.canvas.height)},this.speed={},this.parent.options.directionX){case"left":this.speed.x=+(-this.parent.options.maxSpeedX+Math.random()*this.parent.options.maxSpeedX-this.parent.options.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*this.parent.options.maxSpeedX+this.parent.options.minSpeedX).toFixed(2);break;default:this.speed.x=+(-this.parent.options.maxSpeedX/2+Math.random()*this.parent.options.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?this.parent.options.minSpeedX:-this.parent.options.minSpeedX;break}switch(this.parent.options.directionY){case"up":this.speed.y=+(-this.parent.options.maxSpeedY+Math.random()*this.parent.options.maxSpeedY-this.parent.options.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*this.parent.options.maxSpeedY+this.parent.options.minSpeedY).toFixed(2);break;default:this.speed.y=+(-this.parent.options.maxSpeedY/2+Math.random()*this.parent.options.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?this.parent.options.minSpeedY:-this.parent.options.minSpeedY;break}}return Object(l["a"])(t,[{key:"updatePosition",value:function(){var t,i,e=window.innerWidth,s=window.innerHeight;if(this.parent.options.parallax){if(this.parent.orientationSupport&&!this.parent.isDesktop){var a=(e-0)/60;t=(this.parent.tiltX- -30)*a+0;var n=(s-0)/60;i=(this.parent.tiltY- -30)*n+0}else t=this.parent.mouseX,i=this.parent.mouseY;this.parallaxTargX=(t-e/2)/(this.parent.options.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(i-s/2)/(this.parent.options.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var o=this.parent.$wrap.offsetWidth,r=this.parent.$wrap.offsetHeight;switch(this.parent.options.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=o-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>o&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>o||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x);break}switch(this.parent.options.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=r-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>r&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>r||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y);break}this.position.x+=this.speed.x,this.position.y+=this.speed.y}},{key:"draw",value:function(){this.parent.ctx.beginPath(),this.parent.ctx.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,this.parent.options.particleRadius/2,0,2*Math.PI,!0),this.parent.ctx.closePath(),this.parent.ctx.fill(),this.parent.ctx.beginPath();for(var t=this.parent.particles.length-1;t>this.stackPos;t--){var i=this.parent.particles[t],e=this.position.x-i.position.x,s=this.position.y-i.position.y,a=Math.sqrt(e*e+s*s).toFixed(2);a<this.parent.options.proximity&&(this.parent.ctx.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),this.parent.options.curvedLines?this.parent.ctx.quadraticCurveTo(Math.max(i.position.x,i.position.x),Math.min(i.position.y,i.position.y),i.position.x+i.parallaxOffsetX,i.position.y+i.parallaxOffsetY):this.parent.ctx.lineTo(i.position.x+i.parallaxOffsetX,i.position.y+i.parallaxOffsetY))}this.parent.ctx.stroke(),this.parent.ctx.closePath()}},{key:"setStackPos",value:function(t){this.stackPos=t}}]),t}()),d=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(h["a"])(this,t),this.isDesktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.orientationSupport=!!window.DeviceOrientationEvent,this.options=Object.assign({minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5},e),this.mouseX=0,this.mouseY=0,this.tiltX=0,this.tiltY=0,this.particles=[],this.$wrap=i,this.init()}return Object(l["a"])(t,[{key:"init",value:function(){var t=this;this.canvas=document.createElement("canvas"),this.canvas.className="vue-pg__canvas",this.canvas.style.display="block",this.$wrap.insertBefore(this.canvas,this.$wrap.firstChild),this.ctx=this.canvas.getContext("2d"),this.styleCanvas(),window.addEventListener("resize",(function(){t.resizeHandler()}));for(var i=Math.round(this.canvas.width*this.canvas.height/this.options.density),e=0;e<i;e++){var s=new c(this,{},this);s.setStackPos(e),this.particles.push(s)}document.addEventListener("mousemove",(function(i){t.mouseX=i.pageX,t.mouseY=i.pageY}),!1),this.orientationSupport&&!this.isDesktop&&window.addEventListener("deviceorientation",(function(i){console.log(i),t.tiltY=Math.min(Math.max(-i.beta,-30),30),t.tiltX=Math.min(Math.max(-i.gamma,-30),30)}),!0),this.draw()}},{key:"styleCanvas",value:function(){this.canvas.width=this.$wrap.offsetWidth,this.canvas.height=this.$wrap.offsetHeight,this.ctx.fillStyle=this.options.dotColor,this.ctx.strokeStyle=this.options.lineColor,this.ctx.lineWidth=this.options.lineWidth}},{key:"resizeHandler",value:function(){this.styleCanvas();for(var t=this.particles.length-1;t>=0;t--)(this.particles[t].position.x>this.canvas.width||this.particles[t].position.y>this.canvas.height)&&this.particles.splice(t,1);var i=Math.round(this.canvas.width*this.canvas.height/this.options.density);if(i>this.particles.length)while(i>this.particles.length){var e=new c(this,{},this);this.particles.push(e)}else i<this.particles.length&&this.particles.splice(i);for(var s=this.particles.length-1;s>=0;s--)this.particles[s].setStackPos(s)}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.particles.length;t++)this.particles[t].updatePosition();for(var i=0;i<this.particles.length;i++)this.particles[i].draw(this.ctx,this.particles);window.requestAnimationFrame(this.draw.bind(this))}}]),t}(),f={props:{dotColor:{type:String,default:"#000"},lineColor:{type:String,default:"#666666"},lineWidth:{type:Number,default:1},density:{type:Number,default:1e4}},mounted:function(){var t=this;this.$nextTick((function(){console.log(t.$props);var i={};for(var e in t.$props)i[e]=t.$props[e];new d(t.$el,i)}))}};e("2e88");f.render=p;var u=f,x={name:"App",components:{Partivleground:u}};e("4fb3");x.render=n;var v=x;Object(s["a"])(v).mount("#app")},8930:function(t,i,e){}});
//# sourceMappingURL=app.10844b50.js.map