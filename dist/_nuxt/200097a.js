(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,5,7,9,11],{432:function(t,e,n){"use strict";n.r(e);var r=n(411),o=n(408),c=n(474),l=n(475),m=(n(37),{props:{item:Object}}),d=n(89),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e(r.a,{staticStyle:{margin:"3%"},attrs:{color:"white"}},[e(o.d,[t._v(t._s(t.item.name))]),t._v(" "),e(o.b,[t._v(t._s(t.item.detail))]),t._v(" "),e(c.a,{staticClass:"detail-line mx-3"}),t._v(" "),t.item.webs?e(o.c,[e(l.a,[t._v("参考サイト")]),t._v(" "),e(l.a,t._l(t.item.webs,(function(n,r){return e("ul",{key:r},[e("li",[e("a",{attrs:{href:n.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(n.name)+"\n                ")])])])})),0)],1):t._e(),t._v(" "),t.item.books?e(o.c,[e(l.a,[t._v("参考書籍")]),t._v(" "),e(l.a,t._l(t.item.books,(function(n,r){return e("ul",{key:r},[e("li",[e("a",{attrs:{href:n.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(n.name)+"\n                ")])])])})),0)],1):t._e(),t._v(" "),t.item.movies?e(o.c,[e(l.a,[t._v("参考動画")]),t._v(" "),e(l.a,t._l(t.item.movies,(function(n,r){return e("ul",{key:r},[e("li",[e("a",{attrs:{href:n.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(n.name)+"\n                ")])])])})),0)],1):t._e(),t._v(" "),t.item.licenses?e(o.c,[e(l.a,[t._v("資格")]),t._v(" "),e(l.a,[e("table",{attrs:{border:"1"}},[e("tr",[e("th",[t._v("資格名")]),e("th",[t._v("報奨金")])]),t._v(" "),t._l(t.item.licenses,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.bounty))])])}))],2)])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},435:function(t,e,n){t.exports=n.p+"img/java.7918716.png"},436:function(t,e,n){t.exports=n.p+"img/php.fc56a0f.png"},437:function(t,e,n){t.exports=n.p+"img/python.07ddf4f.png"},438:function(t,e,n){t.exports=n.p+"img/csharp.79950d7.png"},439:function(t,e,n){t.exports=n.p+"img/ruby.f1b2748.png"},440:function(t,e,n){t.exports=n.p+"img/javascript.6d98540.png"},441:function(t,e,n){t.exports=n.p+"img/swift.2ecf501.png"},442:function(t,e,n){t.exports=n.p+"img/dart.f7d90d7.png"},444:function(t,e,n){"use strict";n.r(e);var r=n(192),o=(n(49),n(5),n(44),n(37),n(62),n(53),n(10),n(63),n(70),n(54),n(130));n(25),n(61),n(271),n(30),n(193),n(64);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,m=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){m=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(m)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={props:{roadmap:Object,canvasSize:{default:0,type:Number},index:{default:0,type:Number}},data:function(){return{text:{titleX:0,startX:0,startY:0,size:0}}},mounted:function(){this.create()},methods:{getArrowId:function(){return"arrow-".concat(this.index)},draw:function(t){var e=this,n=.05*t,r=.05*t,o=.65*t,c=.95*t,l=.95*t,m=.5*t,d=.35*t;this.text.titleX=.1*t,this.text.startX=.35*t,this.text.startY=.12*t,this.text.size=.07*t,setTimeout((function(){e.ctx.beginPath(),e.ctx.lineWidth=.04*t,e.ctx.moveTo(n,r),e.ctx.lineTo(o,r),e.ctx.lineTo(l,m),e.ctx.lineTo(o,c),e.ctx.lineTo(n,c),e.ctx.lineTo(d,m),e.ctx.closePath(),e.ctx.strokeStyle=e.roadmap.strokeStyle,e.ctx.stroke(),e.ctx.fillStyle=e.roadmap.fillStyle,e.ctx.fill(),e.ctx.shadowColor="#555",e.ctx.shadowOffsetX=2,e.ctx.shadowOffsetY=1,e.ctx.shadowBlur=3,e.drawText()}),10)},getCanvas:function(){var canvas=document.getElementById(this.getArrowId());canvas.setAttribute("width",this.canvasSize),canvas.setAttribute("height",this.canvasSize),this.ctx=canvas.getContext("2d")},create:function(){var t=this;setTimeout((function(){t.getCanvas(),t.draw(t.canvasSize)}),10)},mouseOver:function(){void 0!==this.ctx&&void 0!==this.roadmap&&(this.ctx.strokeStyle=this.roadmap.fillStyle,this.ctx.stroke(),this.ctx.fillStyle=this.roadmap.strokeStyle,this.ctx.fill(),this.drawText())},mouseOut:function(){void 0!==this.ctx&&void 0!==this.roadmap&&(this.ctx.strokeStyle=this.roadmap.strokeStyle,this.ctx.stroke(),this.ctx.fillStyle=this.roadmap.fillStyle,this.ctx.fill(),this.drawText())},getYear:function(){return this.index+2},drawText:function(){var t=this;setTimeout((function(){t.ctx.font="".concat(t.text.size,"px serif"),t.ctx.fillStyle="#FFF";var e=Object(o.a)(t.roadmap.texts);if(e.length){var n,r=t.text.startY,l=0,m=c(e.shift().split(/\n/g));try{for(m.s();!(n=m.n()).done;){var title=n.value,d=r*l,w=t.text.titleX*l;t.ctx.fillText(title.trim(),t.text.titleX+w,r+d),l++}}catch(t){m.e(t)}finally{m.f()}var f=r*l;t.ctx.fillText("",t.text.startX,r+f),l+=.5;var h,v=c(e);try{for(v.s();!(h=v.n()).done;){var text=h.value,x=r*l;t.ctx.fillText(text,t.text.startX,r+x),l++}}catch(t){v.e(t)}finally{v.f()}}}),10)},click:function(){this.$emit("clickArrow",this.index+1)}}},d=n(89),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"arrow-text",class:t.roadmap.textColor},[t._v("\n        Step"+t._s(t.getYear())+"\n    ")]),t._v(" "),e("canvas",{directives:[{def:r.a,name:"resize",rawName:"v-resize",value:t.create,expression:"create"}],attrs:{id:t.getArrowId(),width:t.canvasSize,height:t.canvasSize},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:function(e){return t.click()}}})])}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,n){"use strict";n.r(e);var r=n(192),o=(n(49),n(5),n(44),n(37),n(62),n(53),n(10),n(63),n(70),n(54),n(130));n(25),n(61),n(271),n(30),n(193),n(64);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,m=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){m=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(m)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={props:{roadmap:Object,canvasSize:{default:0,type:Number}},data:function(){return{text:{titleX:0,startX:0,startY:0,size:0}}},watch:{canvasSize:function(){this.draw(this.canvasSize)}},methods:{draw:function(t){var e=this,n=.05*t,r=.05*t,o=.65*t,c=.95*t,l=.95*t,m=.5*t;this.text.titleX=.1*t,this.text.startX=.15*t,this.text.startY=.12*t,this.text.size=.07*t,setTimeout((function(){e.ctx.beginPath(),e.ctx.lineWidth=.04*t,e.ctx.moveTo(n,r),e.ctx.lineTo(o,r),e.ctx.lineTo(l,m),e.ctx.lineTo(o,c),e.ctx.lineTo(n,c),e.ctx.closePath(),e.ctx.strokeStyle=e.roadmap.strokeStyle,e.ctx.stroke(),e.ctx.fillStyle=e.roadmap.fillStyle,e.ctx.fill(),e.ctx.shadowColor="#555",e.ctx.shadowOffsetX=2,e.ctx.shadowOffsetY=1,e.ctx.shadowBlur=3,e.drawText()}),10)},getCanvas:function(){var canvas=document.getElementById("arrow");canvas.setAttribute("width",this.canvasSize),canvas.setAttribute("height",this.canvasSize),this.ctx=canvas.getContext("2d")},create:function(){var t=this;setTimeout((function(){t.getCanvas(),t.draw(t.canvasSize)}),10)},mouseOver:function(){void 0!==this.ctx&&void 0!==this.roadmap&&(this.ctx.strokeStyle=this.roadmap.fillStyle,this.ctx.stroke(),this.ctx.fillStyle=this.roadmap.strokeStyle,this.ctx.fill(),this.drawText())},mouseOut:function(){void 0!==this.ctx&&void 0!==this.roadmap&&(this.ctx.strokeStyle=this.roadmap.strokeStyle,this.ctx.stroke(),this.ctx.fillStyle=this.roadmap.fillStyle,this.ctx.fill(),this.drawText())},drawText:function(){var t=this;setTimeout((function(){t.ctx.font="".concat(t.text.size,"px serif"),t.ctx.fillStyle="#FFF";var e=Object(o.a)(t.roadmap.texts);if(e.length){var n,r=t.text.startY,l=0,m=c(e.shift().split(/\n/g));try{for(m.s();!(n=m.n()).done;){var title=n.value,d=r*l;t.ctx.fillText(title.trim(),t.text.titleX,r+d),l++}}catch(t){m.e(t)}finally{m.f()}var w=r*l;t.ctx.fillText("",t.text.startX,r+w),l+=.5;var f,h=c(e);try{for(h.s();!(f=h.n()).done;){var text=f.value,v=r*l;t.ctx.fillText(text,t.text.startX,r+v),l++}}catch(t){h.e(t)}finally{h.f()}}}),10)},click:function(){this.$emit("clickArrow",0)}},mounted:function(){this.create()}},d=n(89),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"arrow-text",class:t.roadmap.textColor},[t._v("Step1")]),t._v(" "),e("canvas",{directives:[{def:r.a,name:"resize",rawName:"v-resize",value:t.create,expression:"create"}],attrs:{id:"arrow",width:t.canvasSize,height:t.canvasSize},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:t.click}})])}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,n){"use strict";n.r(e);var r=n(411),o=n(408),c=n(443),l=n(474),m=n(475),d=(n(197),n(432)),w={props:{area:Object,color:String,step:String},components:{Item:d.default}},f=n(89),component=Object(f.a)(w,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{color:t.color}},[e(o.d,[t._v(t._s(t.step))]),t._v(" "),e(l.a,{staticClass:"mx-3"}),t._v(" "),e(m.a,t._l(Object.values(t.area),(function(t,n){return e(c.a,{key:n,attrs:{cols:"12",sm:"6",md:"3",lg:"3",xl:"3"}},[e("item",{attrs:{item:t}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,n){t.exports=n.p+"img/spring_boot.666abb3.png"},452:function(t,e,n){t.exports=n.p+"img/laravel.a13d43b.png"},453:function(t,e,n){t.exports=n.p+"img/django.41b3efa.png"},454:function(t,e,n){t.exports=n.p+"img/visual-studio.b3ba8bc.png"},455:function(t,e,n){t.exports=n.p+"img/rails.4499f8b.png"},456:function(t,e,n){t.exports=n.p+"img/vue.802b21c.png"},457:function(t,e,n){t.exports=n.p+"img/perfect.b6257fe.png"},458:function(t,e,n){t.exports=n.p+"img/flatter.3c09399.png"},461:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{swiperOption:{slidesPerView:8,speed:1e3,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},autoHeight:!0,breakpoints:{1910:{slidesPerView:7},1450:{slidesPerView:6},1280:{slidesPerView:5},1e3:{slidesPerView:4},700:{slidesPerView:3},650:{slidesPerView:2},300:{slidesPerView:1}}},path:"~/src/assets/img/",logos:[{src:n(435),language:n(435),framework:n(451)},{src:n(436),language:n(436),framework:n(452)},{src:n(437),language:n(437),framework:n(453)},{src:n(438),language:n(438),framework:n(454)},{src:n(439),language:n(439),framework:n(455)},{src:n(440),language:n(440),framework:n(456)},{src:n(441),language:n(441),framework:n(457)},{src:n(442),language:n(442),framework:n(458)}]}},methods:{mouseOver:function(t){t.src=t.framework},mouseOut:function(t){t.src=t.language}}},o=n(89),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("swiper",{staticClass:"swiper-flex-container",attrs:{options:t.swiperOption}},t._l(t.logos,(function(n,r){return e("swiper-slide",{key:r,staticClass:"swiper-image-wrap"},[e("img",{attrs:{src:n.src},on:{mouseover:function(e){return t.mouseOver(n)},mouseout:function(e){return t.mouseOut(n)}}})])})),1)}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,n){"use strict";n.r(e);var r=n(443),o=n(475),c=n(192),l=(n(25),n(444)),m=n(445),d={components:{ArrowCanvas:l.default,FirstArrowCanvas:m.default},data:function(){return{firstRoadmap:{strokeStyle:"rgb(50,205,50)",fillStyle:"rgb(93,255,93)",textColor:"green--text",texts:["~製造の基礎に\n                    必要な知識~","・SQL(CRUD)","・コーディング","・Git","・デバッグ"]},roadmaps:[{strokeStyle:"rgb(0,206,209)",fillStyle:"rgb(0,255,255)",textColor:"cyan--text",texts:["~実践的な実装\n                        に必要な知識~","・テスト自動化","・フレームワーク","・非同期処理","・並列処理"]},{strokeStyle:"rgb(0,0,255)",fillStyle:"rgb(30,144,255)",textColor:"blue--text",texts:["~上級PGに\n                        必要な知識~","・詳細設計","・レスポンシブ","・Linux","・保守性"]},{strokeStyle:"rgb(148,0,211)",fillStyle:"rgb(238,130,238)",textColor:"purple--text",texts:["~SEやリーダーに\n                        必要な知識~","・基本設計","・クラウド","・仮想環境","・CI/CD"]},{strokeStyle:"rgb(255,0,0)",fillStyle:"rgb(255,93,93)",textColor:"red--text",texts:["~管理者として\n                        必要な知識~","・要件定義","・ネットワーク","・セキュリティ","・SEO"]}],canvasSize:0}},mounted:function(){this.getArrowWidth()},methods:{getArrowWidth:function(){this.canvasSize=this.$refs.arrow.offsetWidth},getIndex:function(t){this.$emit("getIndex",t)}}},w=n(89),component=Object(w.a)(d,(function(){var t=this,e=t._self._c;return e(o.a,[e(r.a,{ref:"arrow",attrs:{cols:"2"}},[e("first-arrow-canvas",{directives:[{def:c.a,name:"resize",rawName:"v-resize",value:t.getArrowWidth,expression:"getArrowWidth"}],attrs:{roadmap:t.firstRoadmap,canvasSize:Number(t.canvasSize)},on:{clickArrow:t.getIndex}})],1),t._v(" "),t._l(t.roadmaps,(function(n,o){return e(r.a,{key:o,attrs:{cols:"2"}},[e("arrow-canvas",{attrs:{roadmap:n,canvasSize:Number(t.canvasSize),index:Number(o)},on:{clickArrow:t.getIndex}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports},463:function(t,e,n){"use strict";n.r(e);n(25);var r=n(446),o={props:{activeIndex:Number,isActives:Array},components:{Detail:r.default},data:function(){return{steps:["Step1","Step2","Step3","Step4","Step5"],colors:["rgba(93, 255, 93, 1)","rgba(0, 255, 255, 1)","rgba(30, 144, 255, 1)","rgba(238, 130, 238, 1)","rgba(255, 93, 93, 1)"],details:[{sql:{name:"SQLのCRUD操作",detail:"SQLでCREATE, SELECT, UPDATE, DELETEの基礎構文やテーブル結合、副問い合わせをマスターしよう！",books:[{name:"スッキリわかるSQL入門",url:"https://www.amazon.co.jp/dp/4295013390"}],movies:[{name:"はじめてのSQL ・データ分析入門 -データベースのデータをビジネスパーソンが現場で活用するためのSQL初心者向コース",url:"https://www.udemy.com/course/standard-sql-for-beginners/"}],licenses:[{name:"Oracle MASTER Silver SQL",bounty:"30,000円"}]},coding:{name:"コーディング",detail:"コーディングの基本構文や考え方を学んで、製造工程に携われる人材になろう！",books:[{name:"徹底攻略Java SE 11 Silver問題集",url:"https://www.amazon.co.jp/dp/4295007625"},{name:"新・標準プログラマーズライブラリ なるほどなっとく C#入門",url:"https://www.amazon.co.jp/dp/429710458X"},{name:"スッキリわかるPython入門",url:"https://www.amazon.co.jp/dp/4295006327"},{name:"徹底攻略Python 3 エンジニア認定",url:"https://www.amazon.co.jp/dp/4295016055"}],movies:[{name:"【Java-基礎】完全未経験からの基礎入門講座（丁寧解説/豊富な図解/ハンズオン/Java Silver試験対応）",url:"https://www.udemy.com/course/uz-java-kiso/"},{name:"一週間で身につくC#言語",url:"https://www.udemy.com/course/c-nmavhi/"},{name:"現役シリコンバレーエンジニアが教えるPython 3 入門 + 応用 +アメリカのシリコンバレー流コードスタイル",url:"https://www.udemy.com/course/python-beginner/"}],licenses:[{name:"Oracle Java Silver SE11",bounty:"30,000円"},{name:"Python3エンジニア認定基礎試験",bounty:"30,000円"}]},git:{name:"Git",detail:"Gitの操作に慣れて、チーム開発の即戦力になろう！",books:[{name:"はじめてでもできる GitとGitHubの教科書",url:"https://www.amazon.co.jp/dp/481561539X"}],movies:[{name:"ちゃんと学ぶ、Git/GitHub・SourceTree講座",url:"https://www.udemy.com/course/git-beginning/"}]},debug:{name:"デバッグ",detail:"IDEのデバッグ機能を駆使して、ソースコードの処理を追えるようになろう！",webs:[{name:"Eclipse デバッグの方法",url:"https://itsakura.com/eclipse-debug"},{name:"Visual Studioでのデバッグの方法をわかりやすく図解",url:"https://zenn.dev/t_ibe/articles/a6520b27f9e065"}]}},{automatic:{name:"テスト自動化",detail:"自動テストのスクリプトを作成し、業務効率化ができるようになろう！",webs:[{name:"[初心者向け] JavaでSeleniumを動かす",url:"https://qiita.com/tsukakei/items/41bc7f3827407f8f37e8"},{name:"PostmanでAPIの動作確認 & テストする方法",url:"https://www.wakuwakubank.com/posts/873-tool-postman/"},{name:"Jestでテストを書こう！",url:"https://tech.bitbank.cc/lets-test-by-jest/"}],movies:[{name:"Pythonによるビジネスに役立つWebスクレイピング",url:"https://www.udemy.com/course/python-web-scraping-with-beautifulsoup-selenium-requests/"},{name:"はじめてのPostman（ポストマン）入門。HTTP通信やREST APIの基礎を学び、APIデバッグ手法の基礎を学ぼう",url:"https://www.udemy.com/course/postman-api/"}]},framework:{name:"フレームワーク",detail:"MVCを理解してWEBアプリケーションを作れるようになろう！",books:[{name:"後悔しないためのSpring Boot 入門書",url:"https://www.amazon.co.jp/dp/4802092865"},{name:"実践Django Pythonによる本格Webアプリケーション開発",url:"https://www.amazon.co.jp/dp/4798153958"}],movies:[{name:"誰でもわかる Java（Webアプリ開発 - Spring Framework -）",url:"https://www.udemy.com/course/javaweb-spring-framework/"},{name:"【徹底的に解説！】Djangoの基礎をマスターして、3つのアプリを作ろう！",url:"https://www.udemy.com/course/django-3app/"}]},async:{name:"非同期処理",detail:"非同期処理を理解し、プログラム中で外部と通信を行おう！",webs:[{name:"axios の導入と簡単な使い方",url:"https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9"}],movies:[{name:"JavaScriptで学ぶWebアプリ開発の必須知識〜Node.js・Web API・Ajax・async/await〜",url:"https://www.udemy.com/course/web-application-development-with-javascript/"}]},thread:{name:"並列処理",detail:"並列処理を理解し、効率的な処理を構築しよう！",webs:[{name:"【Java入門】マルチスレッド(Threadクラス)の使い方総まとめ",url:"https://www.sejuku.net/blog/26331"},{name:"【Java入門】マルチスレッド(Threadクラス)の使い方総まとめ",url:"https://www.sejuku.net/blog/26331"}],movies:[{name:"【Pythonプログラミング】並列処理の基本を解説！マルチスレッド・マルチプロセスをconcurrent futuresで実装！",url:"https://www.youtube.com/watch?v=et-cDFbVkQw"}],licenses:[{name:"Oracle Java Gold SE11",bounty:"50,000円"}]}},{detailedDesign:{name:"詳細設計",detail:"詳細設計の役割を理解し、PGとしての考え方を身に着けよう！",books:[{name:"現場で役立つシステム設計の原則",url:"https://www.amazon.co.jp/dp/477419087X"}],webs:[{name:"クラス図の書き方とは。初心者にもわかりやすく解説",url:"https://cacoo.com/ja/blog/how-to-write-class-diagram/"},{name:"シーケンス図とは？書き方やツールを初心者でも分かるように紹介",url:"https://cacoo.com/ja/blog/what-is-sequence-diagram/"},{name:"ロバストネス図を活用したシステム設計",url:"https://thinkit.co.jp/article/13487"}],movies:[{name:"【超実践】ビジネス要件分析・基本設計・詳細設計をやり抜く実践ワーク講座",url:"https://www.udemy.com/course/business_requirement_analysis_and_system_design/"}]},responsive:{name:"レスポンシブ",detail:"レスポンシブを理解し、画面サイズに応じてレイアウトを最適化してみよう！",books:[{name:"Figma for UIデザイン",url:"https://www.amazon.co.jp/dp/4798172952"},{name:"Every Layout-モジュラーなレスポンシブデザインを実現するCSS設計論",url:"https://www.amazon.co.jp/dp/486246517X"}],movies:[{name:"FigmaでレスポンシブWEBデザイン作り方！Figmaの基礎からWEBデザイン実践まで完全サポート",url:"https://www.udemy.com/course/figmaresponsive/"},{name:"未経験からHTML、CSS をマスターして、WEBデザイナー・エンジニアを目指す　最高の実践コース",url:"https://www.udemy.com/course/html5css3-b/"}]},linux:{name:"Linux",detail:"詳細設計の役割を理解し、PGとしての考え方を身に着けよう！",books:[{name:"［試して理解］Linuxのしくみ　―実験と図解で学ぶOS、仮想マシン、コンテナの基礎知識",url:"https://www.amazon.co.jp/dp/429713148X"},{name:"Linux教科書 LPICレベル1 Version5.0対応",url:"https://www.amazon.co.jp/dp/4798160490"}],movies:[{name:"もう怖くないLinuxコマンド。手を動かしながらLinuxコマンドラインを5日間で身に付けよう",url:"https://www.udemy.com/course/unscared_linux/"}],licenses:[{name:"LPIC-1",bounty:"30,000円"},{name:"LPIC-2",bounty:"50,000円"},{name:"LPIC-3",bounty:"100,000円"}]},maintainability:{name:"保守性",detail:"保守性の高いコードの書き方を理解しよう！",webs:[{name:"【若手プログラマー向け】メンテナンス性の高いコードを書くための心得",url:"https://qiita.com/gohandesuyo/items/4a15086e5f3c705d86aa"}],books:[{name:"リーダブルコード ―より良いコードを書くためのシンプルで実践的なテクニック",url:"https://www.amazon.co.jp/dp/4873115655"}]}},{basicDesign:{name:"基本設計",detail:"基本設計の役割を理解し、SEとしての考え方を身に着けよう！",books:[{name:"現場で役立つシステム設計の原則",url:"https://www.amazon.co.jp/dp/477419087X"}],webs:[{name:"若手プログラマー必読！５分で理解できるER図の書き方５ステップ",url:"https://www.ntt.com/business/sdpf/knowledge/archive_50.html"},{name:"初めての画面設計書",url:"https://note.com/xytam/n/n795be7e53640"},{name:"DFD（データフロー図）ってなに？DFDの概要と書き方をあわせて紹介",url:"https://cacoo.com/ja/blog/what-is-dfd"}],movies:[{name:"【超実践】ビジネス要件分析・基本設計・詳細設計をやり抜く実践ワーク講座",url:"https://www.udemy.com/course/business_requirement_analysis_and_system_design/"}],licenses:[{name:"基本情報技術者試験",bounty:"30,000円"},{name:"応用情報技術者試験",bounty:"50,000円"},{name:"データベーススペシャリスト試験",bounty:"100,000円"},{name:"システムアーキテクト試験",bounty:"100,000円"}]},cloud:{name:"クラウド",detail:"クラウドを活用し、楽にインフラ構築を行おう！",books:[{name:"AWSの基本・仕組み・重要用語が全部わかる教科書",url:"https://www.amazon.co.jp/dp/4815607850"},{name:"AWS認定資格試験テキスト AWS認定ソリューションアーキテクト - アソシエイト",url:"https://www.amazon.co.jp/dp/4815607389"}],movies:[{name:"AWS：ゼロから実践するAmazon Web Services。手を動かしながらインフラの基礎を習得",url:"https://www.udemy.com/course/aws-and-infra/"},{name:"【SAA-C03版】これだけでOK！ AWS 認定ソリューションアーキテクト – アソシエイト試験突破講座",url:"https://www.udemy.com/course/aws-associate/"}],licenses:[{name:"AWSソリューションアーキテクトアソシエイト",bounty:"30,000円"},{name:"AWSソリューションアーキテクトプロフェッショナル",bounty:"50,000円"}]},virtual:{name:"仮想環境",detail:"仮想環境を活用し、楽に環境の構築・共有を行おう！",books:[{name:"仕組みと使い方がわかる Docker&Kubernetesのきほんのきほん",url:"https://www.amazon.co.jp/dp/4839972745"}],movies:[{name:"駆け出しエンジニアのためのDocker入門",url:"https://www.udemy.com/course/docker-startup/"}]},cicd:{name:"CI/CD",detail:"CI/CDを活用し、各工程で発生する作業を自動化しよう！",webs:[{name:"【入門】GitHub Actionsとは？概要やメリット、使用例まとめ",url:"https://www.kagoya.jp/howto/it-glossary/develop/githubactions/"},{name:"いまさらだけどCircleCIに入門したので分かりやすくまとめてみた",url:"https://qiita.com/gold-kou/items/4c7e62434af455e977c2"}],movies:[{name:"GitHub Actionsで学ぶCI/CD入門―ビルド・デプロイの基本からAPI自動テスト・AWSへの自動デプロイまで",url:"https://www.udemy.com/course/cicd-with-github-actions/"}]}},{requirementDefinition:{name:"要件定義",detail:"要件定義の役割を理解し、管理者やビジネス側の考え方を身に着けよう！",books:[{name:"図解入門 よくわかる 最新 要求定義の基本と実践",url:"https://www.amazon.co.jp/dp/4798068314"}],webs:[{name:"ユースケース図とは？",url:"https://www.lucidchart.com/pages/ja/uml-use-case-diagram"},{name:"状態遷移図（ステートマシン図）とは？業務の流れを把握し効率化するためのポイントを解説",url:"https://cacoo.com/ja/blog/what-is-state-machine-diagram/"},{name:"アクティビティ図（フローチャート）の作り方・活用法を初心者向けに解説",url:"https://cacoo.com/ja/blog/what-is-activity-diagram/"},{name:"オブジェクト図とは何？その書き方と使用例も紹介",url:"https://www.edrawsoft.com/jp/uml-object-diagram.html"}],movies:[{name:"【超実践】ビジネス要件分析・基本設計・詳細設計をやり抜く実践ワーク講座",url:"https://www.udemy.com/course/business_requirement_analysis_and_system_design/"}],licenses:[{name:"基本情報技術者試験",bounty:"30,000円"},{name:"応用情報技術者試験",bounty:"50,000円"},{name:"プロジェクトマネージャ試験",bounty:"100,000円"},{name:"システムアーキテクト試験",bounty:"100,000円"}]},network:{name:"ネットワーク",detail:"ネットワークの理解を深め、インフラに強くなろう！",books:[{name:"イラスト図解式　この一冊で全部わかるネットワークの基本",url:"https://www.amazon.co.jp/dp/4815617678"},{name:"徹底攻略 ネットワークスペシャリスト教科書 令和5年度",url:"https://www.amazon.co.jp/dp/4295015121"}],movies:[{name:"ITエンジニアを目指すネットワーク基礎講座_初級編",url:"https://www.udemy.com/course/nw_engineer/"}],licenses:[{name:"CCNA Routing and Switching",bounty:"30,000円"},{name:"基本情報技術者試験",bounty:"30,000円"},{name:"応用情報技術者試験",bounty:"50,000円"},{name:"ネットワークスペシャリスト試験",bounty:"100,000円"}]},security:{name:"セキュリティ",detail:"セキュリティの理解を深め、安全なアプリケーションを構築できるようになろう！",books:[{name:"セキュリティ技術の教科書",url:"https://www.amazon.co.jp/dp/4865752749"},{name:"情報処理教科書 情報処理安全確保支援士 2023年版",url:"https://www.amazon.co.jp/dp/4798178128"}],movies:[{name:"【情報セキュリティ】Ethical Hacking：ホワイトハッカー入門",url:"https://www.udemy.com/course/ethical-hacking-jpn1/"}],licenses:[{name:"基本情報技術者試験",bounty:"30,000円"},{name:"応用情報技術者試験",bounty:"50,000円"},{name:"情報処理安全確保支援士試験",bounty:"100,000円"},{name:"情報セキュリティマネジメント試験",bounty:"100,000円"}]},seo:{name:"SEO",detail:"SEOを理解し、Webサイトを改善してみよう！",books:[{name:"現場のプロから学ぶ SEO技術バイブル",url:"https://www.amazon.co.jp/dp/4839966001"}],movies:[{name:"【SEO対策 入門講座】Google検索でWebサイトを上位表示させるための基礎講座",url:"https://www.udemy.com/course/seo-beginner-course/"}]}}]}}},c=n(89),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("transition-group",{attrs:{appear:"",mode:"out-in",name:"custom-classes-transition",tag:"div","enter-active-class":"animate__animated animate__lightSpeedInLeft","leave-active-class":"animate__animated animate__lightSpeedOutRight"}},t._l(t.steps,(function(n,r){return e("detail",{directives:[{name:"show",rawName:"v-show",value:t.isActives[r],expression:"isActives[index]"}],key:n,attrs:{area:t.details[r],color:t.colors[r],step:n}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);var r=n(443),o=n(475),c=(n(66),n(61),n(164),n(471)),l=(n(472),n(461)),m=n(462),d=n(463),w={components:{CursorFx:c.CursorFx,SwiperLogo:l.default,Roadmap:m.default,DetailArea:d.default},data:function(){return{windowSize:{x:0,y:0},activeIndex:0,isActives:[!0,!1,!1,!1,!1]}},mounted:function(){this.onResize()},computed:{style:function(){var t=.8*this.windowSize.y;return"height: ".concat(t,"px;")}},methods:{onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight},console.log(window.innerWidth)},changeArea:function(t){var e=this;this.activeIndex!==t&&(this.activeIndex=t,this.isActives=this.isActives.map((function(t){return!1})),setTimeout((function(){e.isActives[t]=!0,e.isActives.splice()}),900))}}},f=n(89),component=Object(f.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e("cursor-fx",{attrs:{"color-hover":"f00"}}),t._v(" "),e("swiper-logo"),t._v(" "),e(o.a,[e(r.a,{attrs:{cols:"12"}},[e("h1",{staticClass:"top-title"},[t._v("WEBエンジニアのロードマップ")])])],1),t._v(" "),e("br"),t._v(" "),e("roadmap",{on:{getIndex:t.changeArea}}),t._v(" "),e("detail-area",{attrs:{activeIndex:t.activeIndex,isActives:t.isActives}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);