(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,a,r){},QfWi:function(e,a,r){"use strict";r.r(a);var t=r("GaZT"),n={div:document.querySelector(".view"),interfaceValueCurrentNumber:document.querySelector(".value__current-number"),interfaceValueSurfaceArea:document.querySelector(".value__surface-area"),btnShapesNumber:document.querySelector(".shapes-number"),btnGravitiValue:document.querySelector(".graviti-value"),interfaceValueNumberSecond:document.querySelector('[data-name="number-second"]'),interfaceValueGraviti:document.querySelector('[data-name="graviti-value"]')},s=n.interfaceValueNumberSecond,i=n.btnGravitiValue,o=n.interfaceValueGraviti;n.btnShapesNumber.addEventListener("click",(function(e){var a=e.target.dataset.action;"shapes-number__increment"===a&&(u+=1);if("shapes-number__decrement"===a){if(0===u)return;u-=1}return s.innerHTML=u})),i.addEventListener("click",(function(e){var a=e.target.dataset.action;"gravity-value__increment"===a&&(h+=1);if("gravity-value__decrement"===a){if(1===h)return;h-=1}return o.innerHTML=h}));var u=1,h=1;var c=n.interfaceValueCurrentNumber,p=n.interfaceValueSurfaceArea,l=0,f=0,d=function(){function e(){}var a=e.prototype;return a.destroyShapes=function(e){c.innerHTML=l-=1,f-=this.shapes.surfaceArea,p.innerHTML=Math.floor(f),this.shapes.destroy(!0),clearInterval(e)},a.loweringShapes=function(){var e=this;c.innerHTML=l+=1,f+=this.shapes.surfaceArea,p.innerHTML=Math.floor(f);var a=setInterval((function(){e.shapes.y=e.shapes.y+h,e.shapes.y>500&&e.destroyShapes(a)}),50);this.shapes.on("click",(function(r){e.destroyShapes(a)}))},a.setRandomColor=function(){for(var e="0x",a=0;a<6;a+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},a.setRandomShapes=function(){var e=Math.floor(7*Math.random())+1;if(1===e){return this.shapes.surfaceArea=50*Math.PI*20,this.shapes.drawEllipse(0,0,50,20)}if(2===e){return this.shapes.surfaceArea=Math.PI*Math.pow(32,2),this.shapes.drawCircle(0,0,32)}if(3===e){return this.shapes.surfaceArea=1.12*Math.pow(60,2),this.shapes.drawStar(0,0,5,60)}if(4===e){return this.shapes.surfaceArea=Math.pow(50,2),this.shapes.drawRect(0,0,50,50)}return 5===e?(this.shapes.surfaceArea=2048,this.shapes.drawPolygon([-32,64,32,64,0,0])):6===e?(this.shapes.surfaceArea=512+Math.pow(32,2),this.shapes.drawPolygon([-32,32,32,32,32,-32,-32,-32,-64,0])):7===e?(this.shapes.surfaceArea=512+Math.pow(32,2)+512,this.shapes.drawPolygon([-64,0,-32,32,32,32,64,0,32,-32,-32,-32])):void 0},e}();r("bTU4");function v(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a}var b=n.div,w=new t.a({width:1100,height:400,backgroundColor:5124144}),m=function(e){function a(){var a,r,n,s;return a=e.call(this)||this,r=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a),n="bgshapes",s=new t.b,n in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s,a}v(a,e);var r=a.prototype;return r.createApp=function(){return b.appendChild(w.view)},r.createBackBackground=function(){this.bgshapes.lineStyle(0,16777215,1),this.bgshapes.beginFill(0,16777215,1),this.bgshapes.drawRect(0,0,1100,400),this.bgshapes.endFill(),w.stage.addChild(this.bgshapes),this.bgshapes.interactive=!0},a}(d),y=function(e){function a(a){var r,n=a.x,s=a.y;return(r=e.call(this)||this).shapes=new t.b,r.shapes.lineStyle(0,16777215,1),r.shapes.beginFill(r.setRandomColor()),r.setRandomShapes(),r.shapes.endFill(),r.shapes.x=n,r.shapes.y=s,r.shapes.interactive=!0,r.shapes.buttonMode=!0,r.shapes.surfaceArea,w.stage.addChild(r.shapes),r.loweringShapes(),r}return v(a,e),a}(m),g=(r("L1EO"),new m);g.createApp(),g.createBackBackground(),g.bgshapes.on("click",(function(e){var a=e.data.global;new y(a)})),setInterval((function(){for(var e=1;e<=u;e+=1)new y({x:200+Math.floor(800*Math.random()),y:-50})}),1e3)},bTU4:function(e,a,r){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.fb26bb81d1ba7219966b.js.map