(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(53)},48:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(30),s=a.n(r),l=a(16),c=a(11),o=a(1),d=a(2),m=a(4),u=a(3),p=a(5),h=a(17),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={displayButtons:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"message is-primary",id:this.props.item.id,style:{marginBottom:"10px",border:"1px black solid",borderRadius:"6px"}},i.a.createElement("div",{className:"message-header"},i.a.createElement("p",null,this.props.item.title),i.a.createElement("button",{className:"delete is-medium",onClick:function(){return e.props.handleDeleteVision(e.props.item.id)},"aria-label":"delete"})),i.a.createElement("div",{className:"message-body has-background-dark has-text-primary"},this.props.item.text))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={titleVal:"",text:""},a.onSubmit=function(e){e.preventDefault(),a.props.handleAddVision(a.state.titleVal,a.state.text),a.setState({titleVal:"",text:""})},a.handleTitleChange=function(e){a.setState({titleVal:e.target.value})},a.handleTextChange=function(e){a.setState({text:e.target.value})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginBottom:"50px"}},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",className:"input has-text-primary has-background-dark is-primary",value:this.state.titleVal,onChange:this.handleTitleChange,placeholder:"Add Title Here...",required:!0})),i.a.createElement("textarea",{className:"textarea has-text-primary has-background-dark is-primary",rows:"10",placeholder:"Add description here...",onChange:this.handleTextChange,value:this.state.text,required:!0})),i.a.createElement("div",null,i.a.createElement("button",{disabled:""===this.state.text,className:"button is-dark has-text-primary is-large"},"Click Here To Add Vision"))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container has-text-centered",style:{marginTop:"50px"},justify:"center",align:"center"},i.a.createElement(f,{style:{marginBottom:"20px"},handleAddVision:this.props.handleAddVision}),i.a.createElement("div",{className:"visionsList"},this.props.items.map(function(t){return i.a.createElement(E,{key:t.id,item:t,handleDeleteVision:e.props.handleDeleteVision})})))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleAddVision=function(e){return a.props.handleAddVision(e)},a.handleDeleteVision=function(e){return a.props.handleDeleteVision(e)},a.handleSelectEditVision=function(e){return a.props.handleSelectEditVision(e)},a.handleSaveEdit=function(e){return a.props.handleSaveEdit(e)},a.handleEditCancel=function(e){return a.props.handleEditCancel(e)},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(v,this.props)}}]),t}(n.Component),O={handleAddVision:function(e,t){return{type:"ADD_VISION",title:e,text:t}},handleDeleteVision:function(e){return{type:"DELETE_VISION",id:e}},handleSelectEditVision:function(e){return{type:"EDIT_VISION",id:e}},handleSaveEdit:function(e){return{type:"SAVE_EDITED_VISION",modifiedVision:e}},handleEditCancel:function(){return{type:"CANCEL_EDIT_VISION",payload:{}}}},D=Object(c.d)(Object(h.b)(function(e){return{items:e.visions.items,editingVision:e.visions.editingVision}},O)(b)),y=function(e){var t=e.children,a=e.closeModal,n=e.modalState,r=e.title;return n?i.a.createElement("div",{className:"modal is-active"},i.a.createElement("div",{className:"modal-background",onClick:a}),i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"hero is-primary is-medium",style:{borderRadius:"7px",border:"1px purple solid"}},i.a.createElement("header",{className:"hero-head modal-card-head has-background-info"},i.a.createElement("div",{className:"modal-card-title"},r),i.a.createElement("button",{className:"delete",onClick:a})),i.a.createElement("section",{className:"hero-body has-text-centered"},i.a.createElement("div",{className:"content is-clipped"},t)),i.a.createElement("footer",{className:"has-background-info hero-foot",style:{borderRadius:"3px"}},i.a.createElement("p",{className:"button",onClick:a},"Close"),i.a.createElement("p",{className:"button",onClick:a},"Edit"))))):null},g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={modalState:!1},a.toggleModal=function(){a.setState(function(e){return{modalState:!e.modalState}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"column is-half has-background-info",id:this.props.item.id,style:{cursor:"pointer",marginBottom:"10px",border:"1px black solid",borderRadius:"6px"}},i.a.createElement("div",{className:"level has-text-primary",onClick:this.toggleModal},i.a.createElement("p",{className:"level-left"},this.props.item.title),i.a.createElement("div",{className:"level-right"},i.a.createElement("p",{className:"level-item"},this.props.item.time),i.a.createElement("button",{className:"delete is-medium level-item",onClick:function(){return e.props.handleDeleteDream(e.props.item.id)},"aria-label":"delete"}))),i.a.createElement("div",null,i.a.createElement(y,{closeModal:this.toggleModal,modalState:this.state.modalState,title:this.props.item.title},this.props.item.text)))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={titleVal:"",text:""},a.onSubmit=function(e){e.preventDefault(),a.props.handleAddDream(a.state.titleVal,a.state.text),a.setState({titleVal:"",text:""})},a.handleTitleChange=function(e){a.setState({titleVal:e.target.value})},a.handleTextChange=function(e){a.setState({text:e.target.value})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginBottom:"50px"}},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",className:"input has-background-info has-text-primary is-primary",value:this.state.titleVal,onChange:this.handleTitleChange,placeholder:"Add Title Here...",required:!0})),i.a.createElement("textarea",{className:"textarea has-background-info has-text-primary is-primary",rows:"10",placeholder:"Add description here...",onChange:this.handleTextChange,value:this.state.text,required:!0})),i.a.createElement("div",null,i.a.createElement("button",{disabled:""===this.state.text,className:"button is-info has-text-primary is-large"},"Click Here To Add Dream"))))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container has-text-centered",style:{marginTop:"50px"},justify:"center",align:"center"},i.a.createElement(x,{style:{marginBottom:"20px"},handleAddDream:this.props.handleAddDream}),i.a.createElement("div",{className:"columns is-multiline"},this.props.items.map(function(t){return i.a.createElement(g,{key:t.id,item:t,handleDeleteDream:e.props.handleDeleteDream})})))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleAddDream=function(e){return a.props.handleAddDream(e)},a.handleDeleteDream=function(e){return a.props.handleDeleteDream(e)},a.handleSelectEditDream=function(e){return a.props.handleSelectEditDream(e)},a.handleSaveEdit=function(e){return a.props.handleSaveEdit(e)},a.handleEditCancel=function(e){return a.props.handleEditCancel(e)},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(j,this.props)}}]),t}(n.Component),I={handleAddDream:function(e,t){return{type:"ADD_DREAM",title:e,text:t}},handleDeleteDream:function(e){return{type:"DELETE_DREAM",id:e}},handleSelectEditDream:function(e){return{type:"EDIT_DREAM",id:e}},handleSaveEdit:function(e){return{type:"SAVE_EDITED_DREAM",modifiedDream:e}},handleEditCancel:function(){return{type:"CANCEL_EDIT_DREAM",payload:{}}}},A=Object(c.d)(Object(h.b)(function(e){return{items:e.dreams.items,editingDream:e.dreams.editingDream}},I)(N)),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={displayButtons:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"notification is-success has-text-primary",id:this.props.item.id,style:{marginBottom:"10px",border:"1px purple solid",borderRadius:"6px"}},this.props.item.text,i.a.createElement("p",{style:{marginTop:"60px"}},this.props.item.time),i.a.createElement("button",{className:"delete is-medium",onClick:function(){return e.props.handleDeleteIdea(e.props.item.id)},"aria-label":"delete"}))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={text:""},a.onSubmit=function(e){e.preventDefault(),a.props.handleAddIdea(a.state.text),a.setState({text:""})},a.handleTextChange=function(e){a.setState({text:e.target.value})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginBottom:"50px"}},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("textarea",{className:"textarea has-text-primary has-background-success is-primary",rows:"10",placeholder:"Jot down an idea here...",onChange:this.handleTextChange,value:this.state.text,required:!0})),i.a.createElement("div",null,i.a.createElement("button",{disabled:""===this.state.text,className:"has-text-primary button is-success is-large"},"Click Here To Add Idea"))))}}]),t}(n.Component),V=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container has-text-centered",style:{marginTop:"50px"},justify:"center",align:"center"},i.a.createElement(S,{style:{marginBottom:"20px"},handleAddIdea:this.props.handleAddIdea}),i.a.createElement("div",{className:""},this.props.items.map(function(t){return i.a.createElement(C,{key:t.id,item:t,handleDeleteIdea:e.props.handleDeleteIdea})})))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleAddIdea=function(e){return a.props.handleAddIdea(e)},a.handleDeleteIdea=function(e){return a.props.handleDeleteIdea(e)},a.handleSelectEditIdea=function(e){return a.props.handleSelectEditIdea(e)},a.handleSaveEdit=function(e){return a.props.handleSaveEdit(e)},a.handleEditCancel=function(e){return a.props.handleEditCancel(e)},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(V,this.props)}}]),t}(n.Component),_={handleAddIdea:function(e){return{type:"ADD_IDEA",text:e}},handleDeleteIdea:function(e){return{type:"DELETE_IDEA",id:e}},handleSelectEditIdea:function(e){return{type:"EDIT_IDEA",id:e}},handleSaveEdit:function(e){return{type:"SAVE_EDITED_IDEA",modifiedIdea:e}},handleEditCancel:function(){return{type:"CANCEL_EDIT_IDEA",payload:{}}}},k=Object(c.d)(Object(h.b)(function(e){return{items:e.ideas.items,editingIdea:e.ideas.editingIdea}},_)(T)),M=function(){return i.a.createElement("div",{className:"hero-head"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement("img",{src:"",alt:"VisionsDreamsIdeas"})),i.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroA"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{id:"navbarMenuHeroA",className:"navbar-menu"},i.a.createElement("div",{className:"navbar-end"},i.a.createElement(l.b,{to:"/visions",activeClassName:"is-active",className:"navbar-item"},"Visions"),i.a.createElement(l.b,{to:"/dreams",activeClassName:"is-active",className:"navbar-item"},"Dreams"),i.a.createElement(l.b,{to:"/ideas",activeClassName:"is-active",className:"navbar-item"},"Ideas"))))))},w=function(){return i.a.createElement("div",{className:"hero-foot"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,"Created by Ry")))},R=function(){return i.a.createElement(l.a,null,i.a.createElement("section",{className:"hero is-primary is-bold is-fullheight"},i.a.createElement(M,null),i.a.createElement("div",{className:"hero-body is-primary"},i.a.createElement(c.a,{path:"/visions",component:D}),i.a.createElement(c.a,{path:"/dreams",component:A}),i.a.createElement(c.a,{path:"/ideas",component:k})),i.a.createElement(w,null)))},L=(a(48),a(10)),Y=a(18),H=a(6),B=a(8),q=a.n(B),W={items:[{title:"Vision One",text:"THis is sample text for a sample vision",id:q()(),isOpen:!1},{title:"Vision TWO",text:"THis is sample text for a sample vision",id:q()(),isOpen:!1},{title:"Vision 3",text:"THis is sample text for a sample vision",id:q()(),isOpen:!1}]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_VISION":var a=q()(),n={title:t.title,text:t.text,id:a,isOpen:!1};return Object(H.a)({},e,{items:[].concat(Object(Y.a)(e.items),[n])});case"DELETE_VISION":var i=e.items.filter(function(e){return e.id!==t.id});return Object(H.a)({},e,{items:i});case"EDIT_VISION":var r=e.items.find(function(e){return e.id===t.id});return Object(H.a)({},e,{editingVision:r});case"SAVE_EDITED_VISION":var s=e.items.map(function(e){return e.id===t.modifiedVision.id&&(e.title=t.modifiedVision.title),e});return Object(H.a)({},e,{items:s,editingVision:{}});case"CANCEL_EDIT_VISION":return e.items.length?Object(H.a)({},e,{editingVision:{}}):Object(H.a)({},e);default:return e}},J=a(15),P=a.n(J),U={items:[{title:"Dream One",text:"THis is sample text for a sample dream",time:"".concat(P()().subtract(3,"days").format("On dddd ll")),id:q()(),isOpen:!1},{title:"Dream TWO",text:"THis is sample text for a sample dream",time:"".concat(P()().subtract(2,"days").format("On dddd ll")),id:q()(),isOpen:!1},{title:"Dream 3",text:"THis is sample text for a sample dream",time:"".concat(P()().subtract(1,"days").format("On dddd ll")),id:q()(),isOpen:!1}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DREAM":var a=q()(),n={title:t.title,text:t.text,time:P()().format("On dddd ll"),id:a,isOpen:!1};return Object(H.a)({},e,{items:[].concat(Object(Y.a)(e.items),[n])});case"DELETE_DREAM":var i=e.items.filter(function(e){return e.id!==t.id});return Object(H.a)({},e,{items:i});case"EDIT_DREAM":var r=e.items.find(function(e){return e.id===t.id});return Object(H.a)({},e,{editingDream:r});case"SAVE_EDITED_DREAM":var s=e.items.map(function(e){return e.id===t.modifiedDream.id&&(e.title=t.modifiedDream.title),e});return Object(H.a)({},e,{items:s,editingDream:{}});case"CANCEL_EDIT_DREAM":return e.items.length?Object(H.a)({},e,{editingDream:{}}):Object(H.a)({},e);default:return e}},$={items:[{text:"Lorem ipsum dolor sit amet, sale novum diceret ex vel, mea cu dicit honestatis. \n        Ius solet laudem eu, ea usu ludus suavitate, usu et tamquam dolorum voluptatum. \n        Ex eum tollit atomorum signiferumque, mea dolore propriae an. Per id vidisse persecuti, \n        id duis adipiscing mei.",time:"".concat(P()().subtract(1,"days").format("MMMM Do YYYY")),id:q()(),isOpen:!1},{text:"Ad vel exerci indoctum. Saperet menandri vim ut, voluptatum incorrupte nec et, \n        quando tincidunt intellegebat est cu. Mel ei mucius aliquam prodesset. Prompta indoctum \n        duo at, affert ridens in nam, eu fierent voluptatum adversarium mea. Modus affert dicunt\n         at cum, cu per solet copiosae. Putant epicuri sensibus pri te. \n         Accusata perpetua pericula usu ei, illud discere gloriatur an est.",time:"".concat(P()().subtract(2,"days").format("MMMM Do YYYY")),id:q()(),isOpen:!1},{text:"Has an tractatos expetenda efficiantur, dicta facilisi senserit vis et,\n         ut vivendum inciderint mel. Omnes dissentias voluptatibus cu mel, modo doming mea et,\n          cu veritus electram his. Electram moderatius disputationi duo ea, in vis clita melius\n           persecuti, eos ea eripuit disputationi. Quot movet deterruisset at vis, eu vis iudico\n            numquam fierent.",time:"".concat(P()().subtract(3,"days").format("MMMM Do YYYY")),id:q()(),isOpen:!1}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_IDEA":var a=q()(),n={text:t.text,time:P()().format("MMMM Do YYYY"),id:a,isOpen:!1};return Object(H.a)({},e,{items:[].concat(Object(Y.a)(e.items),[n])});case"DELETE_IDEA":var i=e.items.filter(function(e){return e.id!==t.id});return Object(H.a)({},e,{items:i});case"EDIT_IDEA":var r=e.items.find(function(e){return e.id===t.id});return Object(H.a)({},e,{editingIdea:r});case"SAVE_EDITED_IDEA":var s=e.items.map(function(e){return e.id===t.modifiedIdea.id&&(e.text=t.modifiedIdea.text),e});return Object(H.a)({},e,{items:s,editingIdea:{}});case"CANCEL_EDIT_IDEA":return e.items.length?Object(H.a)({},e,{editingIdea:{}}):Object(H.a)({},e);default:return e}},F=Object(L.b)({visions:X,dreams:Q,ideas:z});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(L.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(i.a.createElement(h.a,{store:G},i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.64038ded.chunk.js.map