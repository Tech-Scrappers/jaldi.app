const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MazSpinner.Cx7mdOJ3-fma7geOI.js","assets/index-Do1w1vvF.js","assets/index-CU0BxS6C.css","assets/MazSpinner-QqMCeFXj.css","assets/MazIcon.DBGqW7oS-ChxqN9Vr.js"])))=>i.map(i=>d[i]);
import{M as $,d as h,m as S,p as o,o as t,i as a,w as C,q as i,u as d,n as l,C as u,Y as r,c as E,b as O,aM as j,aN as m,aO as y}from"./index-Do1w1vvF.js";const A={key:0,class:"m-btn-loader-container"},P=h({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},roundedSize:{default:"lg"},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{type:[String,Function,Object],default:void 0},leftIcon:{type:[String,Function,Object],default:void 0},rightIcon:{type:[String,Function,Object],default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},justify:{default:"center"}},setup(v){const n=v,b=m(()=>y(()=>import("./MazSpinner.Cx7mdOJ3-fma7geOI.js"),__vite__mapDeps([0,1,2,3]))),c=m(()=>y(()=>import("./MazIcon.DBGqW7oS-ChxqN9Vr.js"),__vite__mapDeps([4,1,2]))),{href:g,to:z}=S(),f=o(()=>g?"a":z?"router-link":"button"),_=o(()=>n.pastel?`--${n.color}-pastel`:n.outline?`--${n.color}-outline`:`--${n.color}`),p=o(()=>(n.loading||n.disabled)&&f.value==="button"),B=o(()=>p.value?"--cursor-default":"--cursor-pointer"),k=o(()=>`--is-${n.variant}`),x=o(()=>n.loading&&n.variant==="button"),I=o(()=>f.value==="button"?n.type:void 0),s=o(()=>n.size==="xl"?"maz-text-3xl":n.size==="lg"?"maz-text-2xl":n.size==="md"?"maz-text-xl":n.size==="sm"?"maz-text-lg":n.size==="xs"?"maz-text-base":n.size==="mini"?"maz-text-sm":"maz-text-xl");return(e,R)=>(t(),a(u(f.value),{disabled:p.value||void 0,class:l(["m-btn m-reset-css",[`--${e.size}`,!e.fab&&!e.rounded&&e.roundedSize&&`--rounded-${e.roundedSize}`,_.value,B.value,k.value,{"--block":e.block,"--no-underline":e.noUnderline,"--fab":e.fab,"--loading":e.loading,"--disabled":p.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]]),style:j([`--justify: ${e.justify}`]),type:I.value},{default:C(()=>[i(e.$slots,"left-icon",{},()=>[typeof e.leftIcon=="string"?(t(),a(d(c),{key:0,name:e.leftIcon,class:l([s.value])},null,8,["name","class"])):e.leftIcon?(t(),a(u(e.leftIcon),{key:1,class:l([s.value])},null,8,["class"])):r("v-if",!0)],!0),i(e.$slots,"icon",{},()=>[typeof e.icon=="string"?(t(),a(d(c),{key:0,name:e.icon,class:l([s.value])},null,8,["name","class"])):e.icon?(t(),a(u(e.icon),{key:1,class:l([s.value])},null,8,["class"])):r("v-if",!0)],!0),i(e.$slots,"default",{},void 0,!0),i(e.$slots,"right-icon",{},()=>[typeof e.rightIcon=="string"?(t(),a(d(c),{key:0,name:e.rightIcon,class:l([s.value])},null,8,["name","class"])):e.rightIcon?(t(),a(u(e.rightIcon),{key:1,class:l([s.value])},null,8,["class"])):r("v-if",!0)],!0),x.value?(t(),E("div",A,[O(d(b),{size:"2em",color:e.color},null,8,["color"])])):r("v-if",!0)]),_:3},8,["disabled","class","style","type"]))}}),M=$(P,[["__scopeId","data-v-6b881156"]]);export{M as default};
