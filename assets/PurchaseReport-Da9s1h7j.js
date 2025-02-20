import{r as u,A as g,c as n,b as s,aw as m,Y as d,a as e,w as a,aj as c,o as l,u as i,aE as _,t as r,aF as f,aG as b,at as w}from"./index-Do1w1vvF.js";const x={class:"max-w-7xl mx-auto"},y={key:0},v={class:"p-6"},$={key:0},R={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},S={class:"flex justify-center mb-4"},k={class:"text-xl font-semibold text-gray-800 mb-2"},P={class:"text-sm text-gray-600"},j={class:"flex justify-center mb-4"},C={class:"text-xl font-semibold text-gray-800 mb-2"},D={class:"text-sm text-gray-600"},A={class:"flex justify-center mb-4"},B={class:"text-xl font-semibold text-gray-800 mb-2"},N={class:"text-sm text-gray-600"},V={class:"flex justify-center mb-4"},E={class:"text-xl font-semibold text-gray-800 mb-2"},L={class:"text-sm text-gray-600"},M={__name:"PurchaseReport",setup(F){const p=u("en");return g(()=>{p.value=localStorage.getItem("locale")||"en"}),(t,G)=>{const o=c("RouterLink"),h=c("router-view");return l(),n("div",x,[t.$route.path==="/reporting/purchases"?(l(),n("div",y,[s(m,{to:{name:"ReportingDashboard"},label:t.$t("reporting.PurchasesReports")},null,8,["label"])])):d("",!0),e("div",v,[t.$route.path==="/reporting/purchases"?(l(),n("div",$,[e("div",R,[s(o,{to:"/reporting/purchases/purchase-summary",class:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-[#f96f02] text-center"},{default:a(()=>[e("div",S,[s(i(_),{class:"w-10 h-10 text-[#f96f02]"})]),e("h3",k,r(t.$t("reporting.PurchaseSummaryReport")),1),e("p",P,r(t.$t("reporting.Overviewofpurchases")),1)]),_:1}),s(o,{to:"/reporting/purchases/supplier-wise-purchase",class:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-[#f96f02] text-center"},{default:a(()=>[e("div",j,[s(i(f),{class:"w-10 h-10 text-[#f96f02]"})]),e("h3",C,r(t.$t("reporting.SupplierWisePurchaseReport")),1),e("p",D,r(t.$t("reporting.Purchasesgroupedbysuppliers")),1)]),_:1}),s(o,{to:"/reporting/purchases/return-supplier",class:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-[#f96f02] text-center"},{default:a(()=>[e("div",A,[s(i(b),{class:"w-10 h-10 text-[#f96f02]"})]),e("h3",B,r(t.$t("reporting.ReturnToSupplierReport")),1),e("p",N,r(t.$t("reporting.DetailedAnalysis")),1)]),_:1}),s(o,{to:"/reporting/purchases/supplier-wise-payment",class:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-[#f96f02] text-center"},{default:a(()=>[e("div",V,[s(i(w),{class:"w-10 h-10 text-[#f96f02]"})]),e("h3",E,r(t.$t("reporting.SupplierwisePaymentReport")),1),e("p",L,r(t.$t("reporting.DetailedAnalysis")),1)]),_:1})])])):d("",!0),s(h)])])}}};export{M as default};
