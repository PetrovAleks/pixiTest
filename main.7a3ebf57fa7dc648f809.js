(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,a,r){},QfWi:function(e,a,r){"use strict";r.r(a);var t=r("GaZT"),n=(r("L1EO"),r("RtS0"),r("D/wG"),r("3dw1"),{div:document.querySelector(".view"),interfaceValueCurrentNumber:document.querySelector(".value__current-number"),interfaceValueSurfaceArea:document.querySelector(".value__surface-area"),btnShapesNumber:document.querySelector(".shapes-number"),btnGravitiValue:document.querySelector(".graviti-value"),interfaceValueNumberSecond:document.querySelector('[data-name="number-second"]'),interfaceValueGraviti:document.querySelector('[data-name="graviti-value"]')});function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var o=n.interfaceValueCurrentNumber,s=n.interfaceValueSurfaceArea,u=n.interfaceValueNumberSecond,c=n.interfaceValueGraviti,l=function(){function e(e,a){i(this,"shapesPerSec",1),i(this,"gravitiValue",1),i(this,"counterShapes",0),i(this,"surfaceAreaValue",0),i(this,"app",null),i(this,"APP_SIZE",null),this.app=e,this.APP_SIZE=a,this.shapesPerSec,this.gravitiValue,this.counterShapes,this.surfaceAreaValue}var a=e.prototype;return a.createShape=function(e){var a=e.x,r=e.y,n=new t.b;return n.lineStyle(0,16777215,1),n.beginFill(this.getRandomColor()),this.setRandomShapes(n),n.endFill(),n.x=a,n.y=r,n.interactive=!0,n.buttonMode=!0,n.show=!0,this.app.stage.addChild(n)},a.getRandomPosition=function(e,a){return{x:e+Math.floor(Math.random()*a),y:0}},a.getRandomColor=function(){for(var e="0x",a=0;a<6;a+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},a.setRandomShapes=function(e){switch(Math.floor(6*Math.random()+1)){case 1:return e.name="circle",e.surfaceArea=2*Math.PI*32,e.drawCircle(0,0,32);case 2:return e.name="ellipse",e.surfaceArea=2*Math.PI*50,e.drawEllipse(0,0,50,25);case 3:return e.name="star",e.surfaceArea=1.12*Math.pow(60,2),e.drawStar(0,0,5,60);case 4:return e.name="rect",e.surfaceArea=Math.pow(50,2),e.drawRect(0,0,50,50);case 5:return e.name="triangle",e.surfaceArea=2048,e.drawPolygon([-32,64,32,64,0,0]);case 6:return e.name="pentagon",e.surfaceArea=512+Math.pow(32,2),e.drawPolygon([-32,32,32,32,32,-32,-32,-32,-64,0]);case 7:return e.name="hexagon",e.surfaceArea=512+Math.pow(32,2)+512,e.drawPolygon([-64,0,-32,32,32,32,64,0,32,-32,-32,-32])}},a.setGravityValue=function(e){"gravity-value__increment"===e.target.dataset.action&&(this.gravitiValue+=1),"gravity-value__decrement"===e.target.dataset.action&&this.gravitiValue>1&&(this.gravitiValue-=1)},a.setNumberShapes=function(e){var a,r;"shapes-number__increment"===e.target.dataset.action&&(this.shapesPerSec+=1),"shapes-number__decrement"===(null==(a=e.target)||null==(r=a.dataset)?void 0:r.action)&&this.shapesPerSec>1&&(this.shapesPerSec-=1)},a.initStageBackground=function(){var e=this.APP_SIZE,a=e.BOARD_WIDTH,r=e.BOARD_HEUGHT,n=new t.b;return n.lineStyle(0,16777215,1),n.beginFill(0,16777215,1),n.drawRect(0,0,a,r),n.endFill(),n.interactive=!0,this.app.stage.addChild(n)},a.destroyShape=function(e){var a=this.APP_SIZE,r=(a.BOARD_WIDTH,a.BOARD_HEUGHT),t=a.MAX_SHAPE_SIZE;e.position.y>r+t&&e.clear(),e.position.y===r+t&&(this.counterShapes-=1,this.surfaceAreaValue-=e.surfaceArea,this.showCurrentShapes(),this.showValueSurfaceArea())},a.onCLickRedrawShapes=function(e){var a=this;e.on("click",(function(){e.show=!1,a.toChangeСolor(e,e.name),a.counterShapes-=1,a.surfaceAreaValue-=e.surfaceArea,a.showCurrentShapes(),a.showValueSurfaceArea(),e.clear()}))},a.toChangeСolor=function(e,a){var r=this,t=this.APP_SIZE.BOARD_HEUGHT;e.parent.children.forEach((function(e){if(e.name===a&&e.show&&e.y<=t+50){switch(e.clear(),e.beginFill(r.getRandomColor()),a){case"circle":return e.drawCircle(0,0,32);case"ellipse":return e.drawEllipse(0,0,50,25);case"star":return e.drawStar(0,0,5,60);case"rect":return e.drawRect(0,0,50,50);case"triangle":return e.drawPolygon([-32,64,32,64,0,0]);case"pentagon":return e.drawPolygon([-32,32,32,32,32,-32,-32,-32,-64,0]);case"hexagon":return e.drawPolygon([-64,0,-32,32,32,32,64,0,32,-32,-32,-32])}e.endFill(),r.app.stage.addChild(e)}}))},a.showGravitiValue=function(){c.innerHTML=this.gravitiValue},a.showNumberShapeSecond=function(){u.innerHTML=this.shapesPerSec},a.showCurrentShapes=function(){o.innerHTML=this.counterShapes},a.showValueSurfaceArea=function(){s.innerHTML=Math.floor(this.surfaceAreaValue)},e}();var h=function(){function e(e){var a,r,t;t=null,(r="model")in(a=this)?Object.defineProperty(a,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[r]=t,this.model=e,this.start()}var a=e.prototype;return a.start=function(){var e=this;setInterval((function(){return e.drawShapes()}),1e3)},a.drawShapes=function(){for(var e=this.model.APP_SIZE,a=e.MAX_SHAPE_SIZE,r=e.BOARD_WIDTH,t=1;t<=this.model.shapesPerSec;t+=1){var n=this.model.getRandomPosition(a,r-a);this.renderShape(n)}},a.renderShape=function(e){var a=this,r=this.model.createShape(e);this.model.onCLickRedrawShapes(r),this.model.app.ticker.add((function(){r.y+=a.model.gravitiValue,a.model.destroyShape(r)})),this.model.counterShapes+=1,this.model.surfaceAreaValue+=r.surfaceArea,this.model.showValueSurfaceArea(),this.model.showCurrentShapes(),this.model.showNumberShapeSecond(),this.model.showGravitiValue()},e}();function d(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var f=n.btnShapesNumber,p=n.btnGravitiValue,S=function(){function e(e,a){d(this,"model",null),d(this,"background",null),d(this,"view",null),this.model=e,this.view=a,this.background=this.model.initStageBackground(),this.onCLickCreateShape(),this.initListeners(),console.dir(this.background)}var a=e.prototype;return a.initListeners=function(){var e=this;f.addEventListener("click",(function(a){e.model.setNumberShapes(a)})),p.addEventListener("click",(function(a){e.model.setGravityValue(a)}))},a.onCLickCreateShape=function(){var e=this;this.background.on("click",(function(a){var r;return e.view.renderShape(null==(r=a.data)?void 0:r.global)}))},e}(),m=n.div,v={BOARD_WIDTH:1100,BOARD_HEUGHT:400,MAX_SHAPE_SIZE:50},w=new t.a({width:v.BOARD_WIDTH,height:v.BOARD_HEUGHT,backgroundColor:5124144});m.appendChild(w.view);var g=new l(w,v);new S(g,new h(g))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7a3ebf57fa7dc648f809.js.map