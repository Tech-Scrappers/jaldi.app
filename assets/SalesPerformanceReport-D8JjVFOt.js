import{d as P,Q as z,r,aB as _,ae as S,A,aj as B,o as l,c as d,a as s,t as h,n as I,b as n,u as i,f as F,aC as N,aD as E,w as R,e as T,_ as W,ab as M,a3 as Y,a5 as j}from"./index-iXE1tgq1.js";const L={class:"p-5 intro-y box h-full"},V={class:"mb-2 flex justify-between items-center"},O={class:"text-lg font-semibold text-gray-800 mb-6"},H={key:0},U={key:1},q={class:"grid grid-cols-12 gap-2 items-center h-full"},J={class:"col-span-12"},X={key:2},Q=["src"],Z={class:"text-xl font-semibold text-gray-400 pt-5 text-center"},G={class:"text-base text-gray-400 font-normal pb-4 text-center"},K={class:"flex justify-center"},ee=P({__name:"index",props:{start_date:{type:String,required:!0},end_date:{type:String,required:!0}},setup(k){const b=z().getUserId,v=r(),x=r([]),$=r([]),c=r({chart:{toolbar:{show:!0},height:400,type:"bar",FontFamily:"Public Sans, sans-serif",zoom:{enabled:!1}},forecastDataPoints:{count:0},markers:{size:[6]},stroke:{width:3,curve:"straight",toolbar:{show:!0}},colors:["#F96F01","#b2b2b2"],fill:{type:"solid",opacity:"0.85",gradient:{shade:"dark",type:"vertical",invertColors:"true",shadeIntensity:"0.5",opacityFrom:"1.0",opacityTo:"1.0",stops:[0,100]}},grid:{padding:{top:30,bottom:30,left:30,right:30},show:!1,borderColor:"#f4f4f4",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5}},legend:{show:!1,showForSingleSeries:!0,showForNullSeries:!0,showForZeroSeries:!0,position:"bottom",horizontalAlign:"center",floating:!1,FontFamily:"Public Sans, sans-serif",fontSize:"16px",colors:["#000"],fontWeight:400,formatter:void 0,inverseOrder:!1,width:void 0,height:void 0,tooltipHoverFormatter:void 0,customLegendItems:[],offsetX:0,offsetY:0,itemMargin:{horizontal:0,vertical:0},labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:12,customHTML:void 0,onClick:void 0,offsetX:0,offsetY:0},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},plotOptions:{bar:{borderRadius:6,columnWidth:"80%",dataLabels:{position:"top"}}},dataLabels:{enabled:!1,formatter:function(e){return _(e.toFixed(1))},offsetY:10,style:{fontSize:"11px",colors:["#F96F01"]},background:{borderRadius:"3",padding:"5",borderWidth:"0"}},tooltip:{enabled:!0,marker:{show:!1},shared:!1,intersect:!1,x:{show:!1,formatter:void 0},y:{formatter:function(e){return _(e.toFixed(1))}}},xaxis:{categories:[],style:{FontFamily:"Public Sans, sans-serif",fontSize:"12px",fontWeight:400},labels:{style:{colors:["#989898","#989898","#989898","#989898","#989898","#989898","#989898","#989898","#989898","#989898","#989898","#989898"]}},position:"bottom",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}}},yaxis:{type:"numeric",tickAmount:3,axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!0,style:{FontFamily:"Public Sans, sans-serif",fontSize:"13px",fontWeight:400,colors:["#989898"]},formatter:function(e){return _(e.toFixed(1))}}}}),D=e=>{if(!Array.isArray(e))return;const t=e.map(o=>o.sales_revenue),a=e.map(o=>o.name_en);$.value=a,x.value=[{name:"Sales Revenue",data:t}],c.value={...c.value,xaxis:{...c.value.xaxis,categories:a}}},p=r(!1),g=async()=>{try{p.value=!0;const e=await M.get(`https://reporting.jaldi.app/api/v1/reporting/sales-performance-by-product?user_id=${b}&start_date=${u.value}&end_date=${f.value}`),t=Y(e);t.success&&(v.value=t.data,console.log("result.data",t.data),D(t.data))}catch(e){j(e)}finally{p.value=!1}},y=r("1 Jan, 2025 - 31 Jan, 2025"),u=r(""),f=r(""),w=e=>{const t=new Date(e);if(isNaN(t.getTime()))throw new Error(`Invalid date: ${e}`);const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),m=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${m}`};return S(y,e=>{try{if(e){const[t,a]=e.split(" - ");u.value=w(t.trim()),f.value=w(a.trim()),console.log("start_date:",u.value),console.log("end_date:",f.value)}}catch(t){console.error("Error converting date:",t.message)}}),S([()=>u.value,()=>f.value],()=>{g()}),A(()=>{g()}),(e,t)=>{var o;const a=B("apexchart");return l(),d("div",L,[s("div",V,[s("h4",O,h(e.$t("reporting.SalesPerformancebyProduct")),1),s("div",{class:I(["relative mt-3 sm:ml-auto sm:mt-0 text-slate-500 flex items-center",{"mr-2":e.locale==="ar","":e.locale!=="ar"}])},[n(i(F),{icon:"Calendar",class:"absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"}),n(i(N),{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=m=>y.value=m),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"pl-10 w-60 shadow-md"},null,8,["modelValue"])],2)]),p.value?(l(),d("div",H,t[2]||(t[2]=[s("div",{class:"animate-pulse bg-slate-200 w-full h-56 rounded-lg"},null,-1)]))):((o=v.value)==null?void 0:o.length)>0?(l(),d("div",U,[s("div",q,[s("div",J,[n(a,{width:"100%",height:"344",type:"bar",options:c.value,series:x.value},null,8,["options","series"])])])])):(l(),d("div",X,[s("img",{src:i(E),class:"w-[160px] mx-auto"},null,8,Q),s("h3",Z,h(e.$t("dashboard.noDataAvailable")),1),s("p",G,h(e.$t("dashboard.noDataDescription")),1),s("div",K,[n(i(W),{variant:"outline-secondary",class:"flex items-center justify-center mx-auto w-40 py-2",onClick:t[1]||(t[1]=m=>g())},{default:R(()=>[n(i(F),{icon:"RefreshCcwIcon",class:"w-4 h-4 text-gray-700 mr-2"}),T(" "+h(e.$t("dashboard.refreshNow")),1)]),_:1})])]))])}}}),te={class:"px-6 max-w-7xl mx-auto"},ae={__name:"SalesPerformanceReport",setup(k){return(C,b)=>(l(),d("div",te,[n(ee)]))}};export{ae as default};
