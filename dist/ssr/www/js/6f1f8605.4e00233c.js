(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6f1f8605"],{"1eba":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-btn",{style:t.$q.dark.isActive?"color: white":"color: #1e1e1e",attrs:{to:"/",icon:"chevron_left",label:t.$t("mainMenu.back"),flat:""}}),e("h5",{staticStyle:{"font-weight":"bold"},style:t.$q.dark.isActive?"color: white":"color: #1e1e1e"},[t._v(t._s(t.$t("carousel.oakText"))+"\n      ")]),e("div",{staticClass:"column items-center"},[e("oak-weddings-card")],1),e("footer")],1)},n=[],r=(e("b06b"),e("eeaf")),c=e("4c03"),o={components:{OakWeddingsCard:r["a"],Footer:c["a"]},data:function(){return{slide:1,tab:"one",splitterModel:15}}},l=o,i=(e("dcc3"),e("2877")),d=e("fe09"),b=Object(i["a"])(l,s,n,!1,null,"206986ae",null);a["default"]=b.exports;b.options.components=Object.assign({QPage:d["s"],QBtn:d["a"]},b.options.components||{})},4585:function(t,a,e){"use strict";var s=e("a510"),n=e.n(s);n.a},"4c03":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center",staticStyle:{"padding-top":"5%"}},[e("div",{staticClass:"text-h5",style:t.$q.dark.isActive?"color: white":"color: black"},[t._v("venues.ogeecheetech.edu")]),e("div",{staticClass:"text-h5",style:t.$q.dark.isActive?"color: white":"color: black"},[t._v("912.871.8544 | venues@ogecheetech.edu")]),e("div",{staticClass:"text-h7 text-italic",style:t.$q.dark.isActive?"color: white":"color: black"},[t._v("Equal Opportunity Institution | A Unit of the Technical College System of Georgia")])])},n=[],r={name:"footer"},c=r,o=e("2877"),l=Object(o["a"])(c,s,n,!1,null,null,null);a["a"]=l.exports},a510:function(t,a,e){},dcc3:function(t,a,e){"use strict";var s=e("ec7d"),n=e.n(s);n.a},ec7d:function(t,a,e){},eeaf:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",{staticClass:"my-mobile-card",class:t.$q.dark.isActive?"bg-grey-9":"bg-grey-2",attrs:{dark:t.$q.dark.isActive}},[e("div",{staticClass:"q-pa-md"},[e("q-carousel",{attrs:{animated:"",arrows:"",navigation:"",infinite:""},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},[e("q-carousel-slide",{attrs:{name:1,"img-src":"statics/oak/wedding/bg-gallery-1.jpg"}}),e("q-carousel-slide",{attrs:{name:2,"img-src":"statics/oak/wedding/bg-gallery-2.jpg"}}),e("q-carousel-slide",{attrs:{name:3,"img-src":"statics/oak/wedding/bg-gallery-3.jpg"}}),e("q-carousel-slide",{attrs:{name:4,"img-src":"statics/oak/wedding/bg-gallery-4.jpg"}})],1)],1),e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("carousel.oakText")))]),e("q-card-actions",{staticStyle:{"padding-top":"5%"},attrs:{align:"right"}},[e("q-btn",{staticClass:"button-2",attrs:{glossy:"",color:"pink",icon:"360",label:t.$t("mainMenu.buttonVr")},on:{click:function(a){return t.oakRoom()}}})],1)],1),e("q-tabs",{style:t.$q.dark.isActive?"color: white":"color:teal",model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{label:t.$t("cards.labelOverview"),name:"one"}}),e("q-tab",{attrs:{label:t.$t("cards.labelFeeSchedule"),name:"two"}}),e("q-tab",{attrs:{label:t.$t("cards.labelEnhancedPackage"),name:"three"}}),e("q-tab",{attrs:{label:t.$t("cards.labelFeeIncludes"),name:"four"}}),e("q-tab",{attrs:{label:t.$t("cards.labelCapacity"),name:"five"}})],1),e("q-separator"),e("q-tab-panels",{style:t.$q.dark.isActive?"background: #666666":"background: white",attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"one"}},[t._v("\n          "+t._s(t.$t("cards.oakText"))+"\n        ")]),e("q-tab-panel",{attrs:{name:"two"}},[e("div",{staticClass:"row justify-around"},[e("div",{staticClass:"<column items-center text-center"},[e("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[e("strong",[t._v(t._s(t.$t("cards.weekDaySchedule")))]),e("br"),e("br"),e("strong",[t._v(t._s(t.$t("cards.halfDayRental")))]),e("br"),t._v("\n              ("+t._s(t.$t("cards.fourHours"))+")"),e("br"),t._v("\n               $700"),e("br"),t._v("\n               "+t._s(t.$t("cards.additionalHour"))+": $85.00"),e("br")]),e("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[e("strong",[t._v(t._s(t.$t("cards.fullDayRental")))]),e("br"),t._v("\n              ("+t._s(t.$t("cards.eightHours"))+")"),e("br"),t._v("\n               $1000"),e("br"),t._v("\n               "+t._s(t.$t("cards.additionalHour"))+": $85.00"),e("br"),e("br")])]),e("div",{staticClass:"<column items-center text-center"},[e("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[e("strong",[t._v(t._s(t.$t("cards.weekEndSchedule")))]),e("br"),e("br"),e("strong",[t._v(t._s(t.$t("cards.halfDayRental")))]),e("br"),t._v("\n              ("+t._s(t.$t("cards.fourHours"))+")"),e("br"),t._v("\n               $1,650"),e("br"),t._v("\n               "+t._s(t.$t("cards.additionalHour"))+": $300.00"),e("br")]),e("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[e("strong",[t._v(t._s(t.$t("cards.fullDayRental")))]),e("br"),t._v("\n              ("+t._s(t.$t("cards.eightHours"))+")"),e("br"),t._v("\n               $2,250"),e("br"),t._v("\n               "+t._s(t.$t("cards.additionalHour"))+": $300.00"),e("br")])])])]),e("q-tab-panel",{attrs:{name:"four"}},[t._v("\n          "+t._s(t.$t("cards.oakFeeIncludesOne"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakFeeIncludesTwo"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakFeeIncludesThree"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakFeeIncludesFour"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakFeeIncludesFive"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakFeeIncludesSix"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakFeeIncludesSeven"))),e("br")]),e("q-tab-panel",{attrs:{name:"five"}},[t._v("\n          "+t._s(t.$t("cards.oakCapacityStanding"))),e("strong",[t._v("500")]),e("br"),t._v("\n          "+t._s(t.$t("cards.oakCapacitySeated"))),e("strong",[t._v("280")]),e("br")]),e("q-tab-panel",{attrs:{name:"three"}},[t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageOne"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageTwo"))),e("br"),t._v("\n          "+t._s(t.$t("cards.oakEnhancedPackageThree"))+"\n        ")])],1)],1)},n=[],r=e("b06b"),c={data:function(){return{slide:1,tab:"one"}},methods:{oakRoom:function(){Object(r["a"])("https://venuesatotc.com/tour/#The_Oak_Room")}}},o=c,l=(e("4585"),e("2877")),i=e("fe09"),d=Object(l["a"])(o,s,n,!1,null,"ba2178d4",null);a["a"]=d.exports;d.options.components=Object.assign({QCard:i["c"],QCarousel:i["f"],QCarouselSlide:i["h"],QCardSection:i["e"],QCardActions:i["d"],QBtn:i["a"],QTabs:i["B"],QTab:i["y"],QSeparator:i["w"],QTabPanels:i["A"],QTabPanel:i["z"],QPage:i["s"]},d.options.components||{})}}]);