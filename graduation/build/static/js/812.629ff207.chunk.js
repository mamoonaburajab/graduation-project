"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[812],{4812:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(9060),c=a(8960),l=a(1560),n=a(4461),r=a(9200),o=a(1600),d=a(9104),i=a(9780),h=a(2496);const m=()=>{const[e,s]=(0,t.useState)(""),{childId:a}=(0,l.W4)();return(0,h.jsx)("div",{className:"notes-container",children:(0,h.jsxs)("div",{className:"notes-card",children:[(0,h.jsx)("h2",{className:"notes-heading",children:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629 \u0644\u0644\u0637\u0628\u064a\u0628"}),(0,h.jsxs)(r.c,{className:"notes-form",onFinish:async()=>{if(a)try{const t=await i.c.post("http://localhost:4120/api/mother/MotherChildCard/Note",{note:e,childId:a});console.log("Response data:",t.data),n.cp.success("Note added successfully"),s("")}catch(t){console.error("Error adding note:",t),n.cp.error("Failed to add note")}else n.cp.error("Child ID is missing")},children:[(0,h.jsxs)(r.c.Item,{className:"form-item element",children:[(0,h.jsx)("div",{className:"custom-text",children:"\u0623\u062f\u062e\u0644 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a"}),(0,h.jsx)(o.default.TextArea,{value:e,onChange:e=>s(e.target.value),placeholder:"\u0623\u062f\u062e\u0644 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a",rows:4,className:"input-field"})]}),(0,h.jsx)(r.c.Item,{className:"form-item element",children:(0,h.jsx)(d.cp,{type:"primary",htmlType:"submit",className:"submit-button",children:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629"})})]})]})})},u=()=>(0,h.jsxs)("div",{className:"note-cont",children:[(0,h.jsx)(c.c,{}),(0,h.jsx)(m,{})]})}}]);
//# sourceMappingURL=812.629ff207.chunk.js.map