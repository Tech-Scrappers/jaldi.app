import{d as Z,Q as G,r as v,R as K,U as ee,A as te,V as se,c as _,a as o,t as u,b as a,w as c,u as s,n as g,F as N,W as P,X as oe,o as p,i as T,e as f,_ as C,Y as $,Z as U,g as ae,f as h,$ as le,D as A,a0 as re,a1 as ce,a2 as V,a3 as j,a4 as q,a5 as F,O as ne}from"./index-iXE1tgq1.js";const ie="/jaldi.app/assets/no-image-TuuIzshF.png",ue={class:"mt-10 text-xl font-semibold intro-y"},de={class:"grid grid-cols-12 gap-6 mt-5 intro-y box p-8"},pe={class:"col-span-12 flex justify-between intro-y"},me=["src"],ve=["src"],fe={class:"flex w-[80px]",id:"fix"},he=["onClick"],_e=["checked"],ge={key:0,class:"flex gap-2.5"},ye=["onClick"],xe={class:"p-5 text-center"},be={class:"mt-5 text-3xl"},Ce={class:"mt-2 text-slate-500"},we={class:"px-5 pb-8 text-center flex items-center justify-center"},ke={class:"ml-4 mr-4"},$e={class:"font-medium"},Se={class:"mt-1 text-slate-500"},Ee=Z({__name:"list",setup(Re){const B=G().getUserId;oe();const m=v(!0),D=v(0),M=v(null),i=K({page:1,limit:10,search:"",sort:"",sort_direction:"asc",paginate:!0,column_filters:[]}),I=v(null),{t:d}=ee(),z=v([{field:"image",title:d("product.imageColumn")},{field:"name_en",title:d("product.productNameEnColumn")},{field:"name_ar",title:d("product.productNameArColumn")},{field:"category",title:d("product.categoryColumn"),sort:!1},{field:"sub_category",title:d("product.subCategoryColumn"),sort:!1},{field:"initial_quantity",title:d("product.stockLevelColumn")},{field:"sale_price",title:d("product.salePriceColumn")},{field:"barcode",title:d("product.barcodeColumn"),hide:!0},{field:"is_active",title:d("product.statusColumn"),sort:!1},{field:"actions",title:d("product.actionsColumn"),sort:!1}])||[];let w,L;const O=()=>{clearTimeout(L),L=setTimeout(()=>{y()},300)},y=async()=>{try{w&&w.abort(),w=new AbortController;const e=w.signal;m.value=!0;const t=(await P.get("https://inventory.jaldi.app/api/products",{params:{...i,user_id:B,signal:e}})).data;I.value=t.data,D.value=t.meta.total}catch(e){console.error("Error fetching Stock Count:",e)}finally{m.value=!1}},W=e=>{i.page=e.current_page,i.limit=e.pagesize,i.sort=e.sort_direction==="desc"?`-${e.sort_column}`:`${e.sort_column}`,i.sort_direction=e.sort_direction,i.search=e.search,e.change_type==="search"?O():y()},n=v("en");te(()=>{y(),n.value=localStorage.getItem("locale")||"en"});const X=async()=>{try{const e=await P.get(`https://inventory.jaldi.app/api/v1/export-products?user_id=${B}&format=xlsx`,{responseType:"blob"});if(e.status===200){const r=new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),t=document.createElement("a");t.href=URL.createObjectURL(r),t.setAttribute("download","All Inventory Products.xlsx"),document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(t.href)}}catch(e){console.error("Error export file:",e)}finally{m.value=!1}},S=v(!1),E=v(null),H=e=>{E.value=e,S.value=!0},R=()=>{S.value=!1,E.value=null},J=e=>{H(e)},Q=async()=>{var e;try{m.value=!0;const r=await V.product.delete(E.value),t=j(r);if(t.success){R(),y(),m.value=!1;const l=(e=document.querySelector("#success-notification-content"))==null?void 0:e.cloneNode(!0);l&&(l.classList.remove("hidden"),l.querySelector(".font-medium").textContent="Product Status",l.querySelector(".text-slate-500").textContent=`${t.message}`,q({node:l,duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0}).showToast())}}catch(r){F(r),m.value=!1}},Y=async e=>{var t;if(!e||!e.id)return;const r=e.is_active;try{e.is_active=!e.is_active;const l=await V.product.activation(e.id),k=j(l);if(k.success){y();const b=(t=document.querySelector("#success-notification-content"))==null?void 0:t.cloneNode(!0);b&&(b.classList.remove("hidden"),b.querySelector(".font-medium").textContent="Product Status",b.querySelector(".text-slate-500").textContent=`${k.message}`,q({node:b,duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0}).showToast())}else e.is_active=r,console.error("Failed to toggle activation state")}catch(l){e.is_active=r;const k=F(l);console.error("Error toggling activation state:",k)}},x=se();return(e,r)=>(p(),_(N,null,[o("h2",ue,u(e.$t("product.productsHeading")),1),o("div",de,[o("div",pe,[o("div",null,[a(s(U),{to:"/inventory/products/create"},{default:c(()=>[s(x).can("create","product")?(p(),T(s(C),{key:0,variant:"primary",class:"mr-2 shadow-md"},{default:c(()=>[f(u(e.$t("product.addProductButton")),1)]),_:1})):$("",!0)]),_:1})]),o("div",{class:g(["flex items-center mt-3 sm:mt-0",{"mr-auto":n.value==="ar","ml-auto":n.value!=="ar"}])},[o("div",{class:g(["relative w-56 text-slate-500",{"ml-3":n.value==="ar","mr-3":n.value!=="ar"}])},[a(s(ae),{modelValue:i.search,"onUpdate:modelValue":r[0]||(r[0]=t=>i.search=t),type:"text",class:"w-56 pr-10 !box",placeholder:e.$t("product.searchPlaceholder")},null,8,["modelValue","placeholder"]),a(s(h),{icon:"Search",class:"absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"})],2),a(s(U),{to:"/inventory/products/import"},{default:c(()=>[a(s(C),{variant:"outline-primary",class:"flex items-center"},{default:c(()=>[a(s(h),{icon:"Download",class:g(["hidden w-4 h-4 sm:block",{"ml-3":n.value==="ar","mr-2":n.value!=="ar"}])},null,8,["class"]),f(" "+u(e.$t("product.importExcelButton")),1)]),_:1})]),_:1}),a(s(C),{variant:"primary",onClick:r[1]||(r[1]=t=>X()),class:g(["flex items-center ml-3",{"mr-3":n.value==="ar","ml-3":n.value!=="ar"}])},{default:c(()=>[a(s(h),{icon:"FileText",class:g(["hidden w-4 h-4 sm:block",{"ml-3":n.value==="ar","mr-2":n.value!=="ar"}])},null,8,["class"]),f(" "+u(e.$t("product.exportExcelButton")),1)]),_:1},8,["class"])],2)]),o("div",{class:g(["col-span-12",{"ar-all-product all-data-table-ar":n.value==="ar","":n.value!=="ar"}])},[a(s(le),{ref_key:"datatable",ref:M,rows:I.value,columns:s(z),loading:m.value,totalRows:D.value,isServerMode:!0,pageSize:i.limit,sortable:!0,sort:i.sort,sortDirection:i.sort_direction,search:i.search,onChange:W},{sub_category:c(t=>{var l;return[f(u((l=t.value.sub_category)==null?void 0:l.name),1)]}),category:c(t=>{var l;return[f(u((l=t.value.category)==null?void 0:l.name),1)]}),image:c(t=>[o("div",null,[t.value.image?(p(),_("img",{key:0,src:t.value.image,alt:"",class:"w-[50px] h-[50px] rounded-full"},null,8,me)):(p(),_("img",{key:1,src:s(ie),alt:"image",class:"w-[50px] h-[50px] rounded-full"},null,8,ve))])]),is_active:c(t=>[o("div",fe,[o("label",{class:"switch",onClick:l=>Y(t.value)},[o("input",{type:"checkbox",checked:t.value.is_active},null,8,_e),r[2]||(r[2]=o("span",{class:"slider round"},null,-1))],8,he)])]),actions:c(t=>[s(x).can("delete","product")||s(x).can("update","product")?(p(),_("div",ge,[s(x).can("delete","product")?(p(),_("a",{key:0,href:"#",class:"bg-red-100 p-2 rounded-md",onClick:l=>J(t.value.id)},[a(s(h),{icon:"Trash2",class:"w-4 h-4 text-[#cf2c47]"})],8,ye)):$("",!0),a(s(U),{to:`/inventory/products/${t.value.id}/edit`,class:"bg-blue-100 p-2 rounded-md"},{default:c(()=>[s(x).can("update","product")?(p(),T(s(h),{key:0,icon:"PencilLine",class:"w-4 h-4 text-blue-500"})):$("",!0)]),_:2},1032,["to"])])):$("",!0)]),_:1},8,["rows","columns","loading","totalRows","pageSize","sort","sortDirection","search"])],2)]),a(s(A),{open:S.value,onClose:R},{default:c(()=>[a(s(A).Panel,null,{default:c(()=>[o("div",xe,[a(s(h),{icon:"XCircle",class:"w-16 h-16 mx-auto mt-3 text-danger"}),o("div",be,u(e.$t("product.deleteConfirmationTitle")),1),o("div",Ce,u(e.$t("product.deleteConfirmationMessage")),1)]),o("div",we,[a(s(C),{variant:"outline-secondary",type:"button",onClick:R,class:"w-24 mr-1 h-10"},{default:c(()=>[f(u(e.$t("product.cancelButton")),1)]),_:1}),a(s(C),{variant:"danger",type:"button",class:"ml-4 w-24 h-10",onClick:Q},{default:c(()=>[m.value?(p(),T(s(re),{key:0,icon:"three-dots",class:"w-8 h-5 text-white"})):(p(),_(N,{key:1},[f(u(e.$t("product.deleteButton")),1)],64))]),_:1})])]),_:1})]),_:1},8,["open"]),a(s(ce),{id:"success-notification-content",class:"flex hidden"},{default:c(()=>[a(s(h),{icon:"CheckCircle",class:"text-success"}),o("div",ke,[o("div",$e,u(e.$t("product.successNotificationTitle")),1),o("div",Se,u(e.$t("product.successNotificationMessage")),1)])]),_:1})],64))}}),Be=ne(Ee,[["__scopeId","data-v-e1c5b5a1"]]);export{Be as default};
