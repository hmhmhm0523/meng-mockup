(this["webpackJsonpmeng-mockup"]=this["webpackJsonpmeng-mockup"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){"use strict";s.r(c);var n=s(0),t=s(1),a=s.n(t),l=s(8),i=s.n(l),o=(s(15),s.p+"static/media/Connectwise Logo.d3a7a8ab.svg"),r=(s(16),s(2)),d=s(3),j=s(5),m=s(4),b=(s(17),function(e){Object(j.a)(s,e);var c=Object(m.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=c.call(this,e)).componentWillMount=function(){console.log("GlobalBar will mount")},n.componentDidMount=function(){console.log("GlobalBar mounted")},n.componentWillReceiveProps=function(e){console.log("GlobalBar will receive props",e)},n.componentWillUpdate=function(e,c){console.log("GlobalBar will update",e,c)},n.componentDidUpdate=function(){console.log("GlobalBar did update")},n.componentWillUnmount=function(){console.log("GlobalBar will unmount")},n.state={hasError:!1},n}return Object(d.a)(s,[{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):Object(n.jsxs)("div",{className:"GlobalBarWrapper",children:[Object(n.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(n.jsx)("h3",{children:"New Package"}),Object(n.jsx)("span",{className:"Spacer"}),Object(n.jsx)("div",{className:"HelperIcon"}),Object(n.jsx)("div",{className:"NineDots"}),Object(n.jsx)("div",{className:"UserIcon",children:"M"})]})}}]),s}(t.PureComponent));b.defaultProps={};var h=b,p=(s(18),function(e){Object(j.a)(s,e);var c=Object(m.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=c.call(this,e)).componentWillMount=function(){console.log("MasterPanel will mount")},n.componentDidMount=function(){console.log("MasterPanel mounted")},n.componentWillReceiveProps=function(e){console.log("MasterPanel will receive props",e)},n.componentWillUpdate=function(e,c){console.log("MasterPanel will update",e,c)},n.componentDidUpdate=function(){console.log("MasterPanel did update")},n.componentWillUnmount=function(){console.log("MasterPanel will unmount")},n.state={hasError:!1},n}return Object(d.a)(s,[{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):Object(n.jsxs)("div",{className:"MasterPanelWrapper",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"BackarrowButton"}),Object(n.jsx)("span",{className:"Spacer"}),Object(n.jsx)("div",{className:"PinButton"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"WorkspaceIcon"}),Object(n.jsx)("span",{children:"Workspace"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"AdminIcon"}),Object(n.jsx)("span",{children:"Admin"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"PreferencesIcon"}),Object(n.jsx)("span",{children:"Preferences"})]}),Object(n.jsxs)("div",{className:"Selected",children:[Object(n.jsx)("div",{className:"PoliciesIcon"}),Object(n.jsx)("span",{children:"Policies"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"CompanyIcon"}),Object(n.jsx)("span",{children:"Companies"})]})]})}}]),s}(t.PureComponent));p.defaultProps={};var O=p,u=s(9),x=s(6),v=(s(19),s(20),function(e){Object(j.a)(s,e);var c=Object(m.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=c.call(this,e)).componentWillMount=function(){console.log("ActionBar will mount")},n.componentDidMount=function(){console.log("ActionBar mounted")},n.componentWillReceiveProps=function(e){console.log("ActionBar will receive props",e)},n.componentWillUpdate=function(e,c){console.log("ActionBar will update",e,c)},n.componentDidUpdate=function(){console.log("ActionBar did update")},n.componentWillUnmount=function(){console.log("ActionBar will unmount")},n.state={hasError:!1},n}return Object(d.a)(s,[{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):Object(n.jsxs)("div",{className:"ActionBarWrapper",children:[Object(n.jsx)("button",{className:"PrimaryButton",children:"Save"}),Object(n.jsx)("button",{className:"SecondaryButton",children:"Cancel"})]})}}]),s}(t.PureComponent));v.defaultProps={};var N=v,g=(s(21),function(e){return Object(n.jsx)("div",{className:"SearchBoxWrapper",children:Object(n.jsx)("input",{type:"search",placeholder:"Search"})})});g.defaultProps={};var P=g,f=function(e){Object(j.a)(s,e);var c=Object(m.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=c.call(this,e)).componentWillMount=function(){console.log("MainPanel will mount")},n.componentDidMount=function(){console.log("MainPanel mounted");var e=document.querySelectorAll(".PolicyItem"),c=document.querySelectorAll(".DropZone");e.forEach((function(e){e.addEventListener("dragstart",(function(){e.classList.add("Dragging"),c.forEach((function(e){e.classList.add("Hilight")}))})),e.addEventListener("dragend",(function(){e.classList.remove("Dragging"),c.forEach((function(e){e.classList.remove("Hilight")}))}))})),c.forEach((function(e){e.addEventListener("dragover",(function(c){c.preventDefault();var s=n.getDragAfterElement(e,c.clientY),t=document.querySelector(".Dragging");null==s?e.appendChild(t):e.insertBefore(t,s)}))}))},n.componentWillReceiveProps=function(e){console.log("MainPanel will receive props",e)},n.componentWillUpdate=function(e,c){console.log("MainPanel will update",e,c)},n.componentDidUpdate=function(){console.log("MainPanel did update")},n.componentWillUnmount=function(){console.log("MainPanel will unmount")},n.handleToggleExpand=n.handleToggleExpand.bind(Object(x.a)(n)),n.state={hasError:!1},n}return Object(d.a)(s,[{key:"handleToggleExpand",value:function(e){var c=e.target,s=e.target.parentNode.nextSibling;c.classList.toggle("Collapsed"),s.classList.toggle("Collapsed")}},{key:"getDragAfterElement",value:function(e,c){return Object(u.a)(e.querySelectorAll(".PolicyItem:not(.Dragging)")).reduce((function(e,s){var n=s.getBoundingClientRect(),t=c-n.top-n.height/2;return t<0&&t>e.offset?{offset:t,element:s}:e}),{offset:Number.NEGATIVE_INFINITY}).element}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):Object(n.jsxs)("div",{className:"MainPanelWrapper",children:[Object(n.jsx)(N,{}),Object(n.jsxs)("div",{className:"ContentPanel",children:[Object(n.jsx)("div",{className:"NameServiceMarket",children:Object(n.jsxs)("dl",{children:[Object(n.jsx)("dt",{children:"Name"}),Object(n.jsx)("dd",{children:Object(n.jsx)("input",{value:"Governament Premium"})}),Object(n.jsx)("dt",{children:"Service Level"}),Object(n.jsx)("dd",{children:Object(n.jsxs)("select",{children:[Object(n.jsx)("option",{children:"Premium"}),Object(n.jsx)("option",{children:"Default"})]})}),Object(n.jsx)("dt",{children:"Market"}),Object(n.jsx)("dd",{children:Object(n.jsxs)("select",{children:[Object(n.jsx)("option",{children:"Governament"}),Object(n.jsx)("option",{children:"Default"})]})})]})}),Object(n.jsx)("div",{className:"Description",children:Object(n.jsxs)("dl",{children:[Object(n.jsx)("dt",{children:"Description"}),Object(n.jsx)("dd",{children:Object(n.jsx)("textarea",{placeholder:"Input Field"})})]})}),Object(n.jsx)("div",{className:"PackageBuilder",children:Object(n.jsxs)("div",{className:"Tile",children:[Object(n.jsx)("div",{className:"TileHeader",children:"Package Builder"}),Object(n.jsx)("div",{className:"TileContent",children:Object(n.jsx)("div",{className:"DropZone",children:Object(n.jsx)("p",{children:"Drag Policies Building Blocks Here"})})})]})}),Object(n.jsx)("div",{className:"Policies",children:Object(n.jsxs)("div",{className:"Tile",children:[Object(n.jsxs)("div",{className:"TileHeader",children:[Object(n.jsx)("span",{children:"Policies"}),Object(n.jsx)("div",{className:"Spacer"}),Object(n.jsx)(P,{})]}),Object(n.jsxs)("div",{className:"TileContent",children:[Object(n.jsxs)("div",{className:"CollapsePanel Integrations",children:[Object(n.jsxs)("div",{className:"CollapsePanelHeader",children:[Object(n.jsx)("div",{className:"HeaderIcon ",children:Object(n.jsx)("div",{})}),Object(n.jsx)("span",{children:"Integrations"}),Object(n.jsx)("div",{className:"Spacer"}),Object(n.jsx)("a",{className:"CollapseButton",onClick:this.handleToggleExpand})]}),Object(n.jsxs)("div",{className:"CollapsePanelContent DropZone",children:[Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"LMI - Default"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Integrations",children:"Integrations"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"LMI - GP"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Integrations",children:"Integrations"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Webroot"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Integrations",children:"Integrations"})]})]})]}),Object(n.jsxs)("div",{className:"CollapsePanel Network",children:[Object(n.jsxs)("div",{className:"CollapsePanelHeader",children:[Object(n.jsx)("div",{className:"HeaderIcon ",children:Object(n.jsx)("div",{})}),Object(n.jsx)("span",{children:"Network"}),Object(n.jsx)("div",{className:"Spacer"}),Object(n.jsx)("a",{className:"CollapseButton",onClick:this.handleToggleExpand})]}),Object(n.jsxs)("div",{className:"CollapsePanelContent DropZone",children:[Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 01"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Network",children:"Network"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 02"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Network",children:"Network"})]})]})]}),Object(n.jsxs)("div",{className:"CollapsePanel Finance",children:[Object(n.jsxs)("div",{className:"CollapsePanelHeader",children:[Object(n.jsx)("div",{className:"HeaderIcon ",children:Object(n.jsx)("div",{})}),Object(n.jsx)("span",{children:"Finance"}),Object(n.jsx)("div",{className:"Spacer"}),Object(n.jsx)("a",{className:"CollapseButton",onClick:this.handleToggleExpand})]}),Object(n.jsxs)("div",{className:"CollapsePanelContent DropZone",children:[Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Agreement GP"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Finance",children:"Finance"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Agreement RP"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Finance",children:"Finance"})]})]})]}),Object(n.jsxs)("div",{className:"CollapsePanel Devices",children:[Object(n.jsxs)("div",{className:"CollapsePanelHeader",children:[Object(n.jsx)("div",{className:"HeaderIcon ",children:Object(n.jsx)("div",{})}),Object(n.jsx)("span",{children:"Devices"}),Object(n.jsx)("div",{className:"Spacer"}),Object(n.jsx)("a",{className:"CollapseButton",onClick:this.handleToggleExpand})]}),Object(n.jsxs)("div",{className:"CollapsePanelContent DropZone",children:[Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 03"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Devices",children:"Devices"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 04"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Devices",children:"Devices"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 05"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Devices",children:"Devices"})]})]})]}),Object(n.jsxs)("div",{className:"CollapsePanel Notifications",children:[Object(n.jsxs)("div",{className:"CollapsePanelHeader",children:[Object(n.jsx)("div",{className:"HeaderIcon ",children:Object(n.jsx)("div",{})}),Object(n.jsx)("span",{children:"Notification"}),Object(n.jsx)("div",{className:"Spacer"}),Object(n.jsx)("a",{className:"CollapseButton",onClick:this.handleToggleExpand})]}),Object(n.jsxs)("div",{className:"CollapsePanelContent DropZone",children:[Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 06"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Notifications",children:"Notifications"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 07"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Notifications",children:"Notifications"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 08"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Notifications",children:"Notifications"})]})]})]}),Object(n.jsxs)("div",{className:"CollapsePanel Project",children:[Object(n.jsxs)("div",{className:"CollapsePanelHeader",children:[Object(n.jsx)("div",{className:"HeaderIcon ",children:Object(n.jsx)("div",{})}),Object(n.jsx)("span",{children:"Project"}),Object(n.jsx)("div",{className:"Spacer"}),Object(n.jsx)("a",{className:"CollapseButton",onClick:this.handleToggleExpand})]}),Object(n.jsxs)("div",{className:"CollapsePanelContent DropZone",children:[Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 09"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Project",children:"Project"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 10"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Project",children:"Project"})]}),Object(n.jsxs)("div",{className:"PolicyItem",draggable:"true",children:[Object(n.jsx)("div",{className:"Name",children:"Policy 11"}),Object(n.jsx)("div",{className:"Description",children:"Description..."}),Object(n.jsx)("div",{className:"Category Project",children:"Project"})]})]})]})]})]})})]})]})}}]),s}(t.PureComponent);f.defaultProps={};var D=f,C=(s(22),function(e){Object(j.a)(s,e);var c=Object(m.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=c.call(this,e)).componentWillMount=function(){console.log("Toolbar will mount")},n.componentDidMount=function(){console.log("Toolbar mounted")},n.componentWillReceiveProps=function(e){console.log("Toolbar will receive props",e)},n.componentWillUpdate=function(e,c){console.log("Toolbar will update",e,c)},n.componentDidUpdate=function(){console.log("Toolbar did update")},n.componentWillUnmount=function(){console.log("Toolbar will unmount")},n.state={hasError:!1},n}return Object(d.a)(s,[{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):Object(n.jsx)("div",{className:"ToolbarWrapper",children:Object(n.jsx)("div",{className:"FilterIcon"})})}}]),s}(t.PureComponent));C.defaultProps={};var y=C;var I=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(D,{}),Object(n.jsx)(y,{})]})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(c){var s=c.getCLS,n=c.getFID,t=c.getFCP,a=c.getLCP,l=c.getTTFB;s(e),n(e),t(e),a(e),l(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),w()}],[[23,1,2]]]);
//# sourceMappingURL=main.3379f336.chunk.js.map