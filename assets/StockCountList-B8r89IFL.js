import{O as C,r as y,o as r,c as n,a as t,e as q,t as o,b as f,n as S,g as P,i as I,u as x,al as T,Y as v,w as N,F as L,h as V,am as O,a2 as B,a3 as E,ae as F,f as j}from"./index-iXE1tgq1.js";const z={class:"mb-4"},U={for:"productSearch",class:"block text-gray-700 font-medium mb-2"},M={class:"relative"},A={class:"absolute top-4 right-5"},D={key:0,class:"mt-2 text-xs text-red-600"},R={key:0,class:"relative"},Y={class:"mt-1 bg-white box rounded-t-none z-[999]",key:"matched"},G=["onClick"],H={class:"flex items-center"},J={class:"text-sm mb-1"},K={class:"mt-4",key:"none"},Q={class:"text-gray-500 dark:text-gray-400"},W={__name:"StockCountSearch",props:{addedProductIds:{type:Object,required:!0},form:{type:Object,required:!0}},emits:["add-product"],setup(i,{emit:g}){const p=g,h=i,a=y(""),l=y([]),e=y(!1),u=y(!1);async function d(){if(!a.value){l.value=[];return}u.value=!0;try{const s=await B.purchaseInvoice.allList(),m=E(s);m.success&&(e.value=!0,l.value=m.data.data.filter(c=>{var b,k,$,w;return(((b=c.name_en)==null?void 0:b.toLowerCase().includes(a.value.toLowerCase()))||((k=c.name_ar)==null?void 0:k.includes(a.value))||(($=c.sku)==null?void 0:$.includes(a.value))||((w=c.barcode)==null?void 0:w.includes(a.value)))&&!h.addedProductIds.has(c.id)}))}catch(s){console.error("Error fetching products:",s),l.value=[]}finally{u.value=!1}}function _(s){p("add-product",s),e.value=!1}return(s,m)=>(r(),n("div",z,[t("label",U,[q(o(s.$t("stock-count.productSearch.scanOrTypeProduct"))+" ",1),m[1]||(m[1]=t("span",{class:"text-danger"}," *",-1))]),t("div",M,[f(P,{type:"text",id:"productSearch",modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=c=>a.value=c),onInput:d,placeholder:s.$t("stock-count.productSearch.enterProductCodeOrName"),class:S({"border-red-500":i.form.invalid("products")})},null,8,["modelValue","placeholder","class"]),t("span",A,[u.value?(r(),I(x(T),{key:0,icon:"three-dots",class:"w-6 h-6 text-red-700"})):v("",!0)])]),i.form.invalid("products")?(r(),n("div",D,o(i.form.getError("products")),1)):v("",!0),f(O,{name:"fade",mode:"out-in"},{default:N(()=>[e.value?(r(),n("div",R,[l.value.length&&a.value.length?(r(),n("div",Y,[t("ul",{class:S([{"h-[350px] overflow-y-scroll overflow-hidden":l.value.length>7},"absolute top-0 w-full bg-white shadow-md rounded-b-md z-[999]"])},[(r(!0),n(L,null,V(l.value,c=>(r(),n("li",{key:c.id,class:"border-t border-gray-200 py-2 px-3 hover:bg-[#f1f5f9]"},[t("div",{onClick:b=>_(c),class:"cursor-pointer font-medium text-sm flex justify-between items-center"},[t("div",H,[t("div",null,[t("h4",J,o(c.name_en),1)])])],8,G)]))),128))],2)])):a.value.length?(r(),n("div",K,[t("p",Q,o(s.$t("stock-count.productSearch.noProductsMatched")),1)])):v("",!0)])):v("",!0)]),_:1})]))}},ht=C(W,[["__scopeId","data-v-f8a06e3a"]]),X={class:"mt-8"},Z={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},tt={class:"bg-gray-100 border-b"},et={scope:"col",class:"px-6 py-3 text-gray-700 font-medium w-[150px]"},st={scope:"col",class:"px-6 py-3 text-gray-700 font-medium"},ot={scope:"col",class:"px-4 py-3 text-gray-700 font-medium"},at={scope:"col",class:"px-4 py-3 text-gray-700 font-medium"},ct={scope:"col",class:"px-4 py-3 text-gray-700 font-medium"},rt={class:"py-3 px-4"},nt={class:"py-3 px-6"},dt={class:"py-3 px-4"},lt={class:"py-3 px-4"},it={class:"py-3 px-4"},ut=["onClick"],mt={__name:"StockCountList",props:{products:{type:Array,required:!0}},emits:["updateTotals","removeProduct"],setup(i,{emit:g}){const p=i,h=g;F(p.products,()=>{p.products.forEach(a)});const a=e=>{let u=1;e.totalPrice=u*e.cost_price*e.quantity,e.packing_quantity=u*e.quantity,e.vat=parseFloat((e.totalPrice*.15).toFixed(2)),h("updateTotals")};function l(e){h("removeProduct",e)}return(e,u)=>(r(),n("div",X,[t("table",Z,[t("thead",null,[t("tr",tt,[t("th",et,o(e.$t("stock-count.productsList.productName")),1),t("th",st,o(e.$t("stock-count.productsList.systemInventory")),1),t("th",ot,o(e.$t("stock-count.productsList.physicalStock")),1),t("th",at,o(e.$t("stock-count.productsList.variance")),1),t("th",ct,o(e.$t("stock-count.productsList.actions")),1)])]),t("tbody",null,[(r(!0),n(L,null,V(i.products,(d,_)=>(r(),n("tr",{key:d.id||_,class:"odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"},[t("td",rt,o(d.name_en),1),t("td",nt,o(d.initial_quantity),1),t("td",dt,[f(x(P),{type:"number",modelValue:d.counted,"onUpdate:modelValue":s=>d.counted=s,modelModifiers:{number:!0},min:"1",class:"w-[85px] px-4 py-2 border rounded-lg"},null,8,["modelValue","onUpdate:modelValue"])]),t("td",lt,o(Number(d.initial_quantity-d.counted)),1),t("td",it,[t("button",{onClick:s=>l(_),class:"bg-red-100 p-2 rounded-md"},[f(x(j),{icon:"Trash2",class:"w-4 h-4 text-[#cf2c47]"})],8,ut)])]))),128))])])]))}},_t=C(mt,[["__scopeId","data-v-ba0c91c7"]]);export{ht as S,_t as a};
