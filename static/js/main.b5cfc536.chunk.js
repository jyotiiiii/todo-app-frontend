(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),s=a.n(r),o=a(1),i=a(2),l=a(4),u=a(3),m=a(5),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"navbar-brand score",href:"#"},c.a.createElement("div",{id:"score-dot"},c.a.createElement("h6",null,this.props.score)))}}]),t}(c.a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("button",{className:"navbar-toggler navbutton nav-button",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"toggle"},c.a.createElement("a",{className:"",href:"#"})),c.a.createElement("div",{className:"toggle"},c.a.createElement("a",{className:"",href:"#"})),c.a.createElement("div",{className:"toggle"},c.a.createElement("a",{className:"",href:"#"}))))}}]),t}(c.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("li",{className:"nav-item ml-auto"},c.a.createElement("a",{className:"nav-link",href:"#"},this.props.menuDescription," ",c.a.createElement("span",{className:"sr-only"},"(current)")))}}]),t}(c.a.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("li",{className:"nav-item ml-auto"},c.a.createElement("form",{className:"form-inline my-2 my-md-0"},c.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search"})))}}]),t}(c.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement(f,{menuDescription:"About"}),c.a.createElement(f,{menuDescription:"Kindness"}),c.a.createElement(f,{menuDescription:"How it works"}),c.a.createElement(h,null)))}}]),t}(c.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-light"},c.a.createElement(d,{score:this.props.score}),c.a.createElement(p,null),c.a.createElement(b,null))}}]),t}(c.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"",href:"/index.html",target:"_blank"},c.a.createElement("img",{className:"kinda",src:"./images/kinda.svg",alt:"kinda-img"}))}}]),t}(c.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log({score:this.props.score});var e=100-this.props.score;return c.a.createElement("svg",{height:"80",width:"100",viewBox:"0 0 24 24"},c.a.createElement("defs",null,c.a.createElement("linearGradient",{id:"half",gradientTransform:"rotate(90)"},c.a.createElement("stop",{offset:"0%",stopColor:"transparent"}),c.a.createElement("stop",{offset:e+"%",stopColor:"transparent"}),c.a.createElement("stop",{offset:e+"%",stopColor:"#FB48C4"}),c.a.createElement("stop",{offset:"100%",stopColor:"#FB48C4"}))),c.a.createElement("path",{fill:"url(#half)",stroke:"black",strokeWidth:"1.5",d:"M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"}))}}]),t}(c.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"action-button",href:"#","data-title":"Click to add your own task",role:"button",onClick:this.props.onClick},c.a.createElement("i",{className:"fas fa-plus fa-lg"}))}}]),t}(c.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{href:"#",className:"action-button",role:"button",onClick:this.props.onHeartClick,"data-title":"Click to add one of our suggestions"},c.a.createElement("i",{className:"far fa-heart fa-lg"}))}}]),t}(c.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"jumbotron "},c.a.createElement("div",{className:"container text-center"},c.a.createElement(v,null),c.a.createElement(j,{score:this.props.score}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(O,{onClick:this.props.onClick}),c.a.createElement(E,{onHeartClick:this.props.onHeartClick})))))}}]),t}(c.a.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={taskDescription:""},a.addTask=function(e){e.preventDefault(),a.props.addTaskFunction(a.state.taskDescription)},a.taskDescriptionNew=function(e){a.setState({taskDescription:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 "}),c.a.createElement("div",{className:"col-md-6 col-sm-11"},c.a.createElement("form",{className:"text-center "},c.a.createElement("div",{className:"form-group mx-sm-3 mb-2 "},c.a.createElement("input",{type:"text",className:"form-control form-font",placeholder:"add a Kinda thing to do",onChange:this.taskDescriptionNew})),c.a.createElement("button",{type:"submit",className:"btn btn-info mb-2",onClick:this.addTask},"Add Task"))),c.a.createElement("div",{className:"col-md-3 "})))}}]),t}(c.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).deleteClicked=function(){a.props.deleteTaskFunction(a.props.idNo)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{href:"#",className:"action-button",role:"button",onClick:this.deleteClicked},c.a.createElement("i",{className:"fas fa-trash-alt fa-lg"}))}}]),t}(c.a.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).doneClicked=function(){a.props.doneTaskFunction(a.props.idNo)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{href:"#",className:"action-button",role:"button",onClick:this.doneClicked},c.a.createElement("i",{className:"fas fa-check fa-lg"}))}}]),t}(c.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return e=this.props.toDo.completed?c.a.createElement("div",{className:"col-sm-9 text-left completed"},this.props.toDo.description):c.a.createElement("div",{className:"col-sm-9 text-left"},this.props.toDo.description),c.a.createElement("div",{className:"row justify-content-center pb-3 custom-task"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-8 col-sm-9 text-left"},e),c.a.createElement("div",{className:"col-4 col-sm-3 pt-1"},c.a.createElement(g,{idNo:this.props.toDo.id,deleteTaskFunction:this.props.deleteTaskFunction}),c.a.createElement(C,{idNo:this.props.toDo.id,doneTaskFunction:this.props.doneTaskFunction})))))}}]),t}(c.a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},this.props.listOfTasks.map((function(t){return c.a.createElement(w,{key:t.id,toDo:t,deleteTaskFunction:e.props.deleteTaskFunction,doneTaskFunction:e.props.doneTaskFunction})})))}}]),t}(c.a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("i",{className:"fab fa-twitter spaced-icon"}),c.a.createElement("i",{className:"fab fa-facebook-f spaced-icon"}),c.a.createElement("i",{className:"fab fa-instagram spaced-icon"}),c.a.createElement("i",{className:"fas fa-envelope spaced-icon"}))}}]),t}(c.a.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("p",{className:"mb-3 text-muted copyright"},"Copyright \xa9 ",(new Date).getFullYear()," Jyoti Sharma")}}]),t}(c.a.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer",id:"footer"},c.a.createElement(F,null),c.a.createElement(D,null))}}]),t}(c.a.Component),S=a(7),_=a.n(S),A=[{id:_()(),user_id:"5cd7209f-b05b-456a-9327-55e8af3f945e",random:1,description:"Sleep in",completed:0,points:5},{id:_()(),user_id:"5cd7209f-b05b-456a-9327-55e8af3f945e",random:1,description:"Go for a swim in the sea",completed:0,points:10},{id:_()(),user_id:"5cd7209f-b05b-456a-9327-55e8af3f945e",random:1,description:"Get a massage",completed:0,points:10},{id:_()(),user_id:"5cd7209f-b05b-456a-9327-55e8af3f945e",random:1,description:"Visit a new exhibition",completed:0,points:10},{id:_()(),user_id:"5cd7209f-b05b-456a-9327-55e8af3f945e",random:1,description:"Plan a holiday",completed:0,points:10},{id:_()(),user_id:"5cd7209f-b05b-456a-9327-55e8af3f945e",random:1,description:"Practice Mindfulness",completed:0,points:10}],z=a(8),H=a.n(z),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={tasks:[],showForm:!1,score:20},a.componentDidMount=function(){H.a.get("https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks").then((function(e){a.setState({tasks:e.data.tasks})})).catch((function(e){console.error(e)}))},a.calcScore=function(e){var t=e;console.log({listLine38:t});for(var n=a.state.score,c=[],r=0;r<t.length;r++)!0===t[r].completed&&c.push(t[r].points);console.log({score:c});for(var s=0;s<c.length;s++)n+=c[s];return n},a.deleteTask=function(e){var t=a.state.tasks;H.a.delete("https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e)).then((function(n){var c=t.filter((function(t){return t.id!==e}));a.setState({tasks:c})})).catch((function(e){console.error(e)}))},a.completeTask=function(e){var t=a.state.tasks;H.a.put("https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e)).then((function(n){for(var c=0;c<t.length;c++){var r=t[c];r.id===e&&(r.completed=!r.completed)}a.setState({tasks:t})})).catch((function(e){console.error(e)}))},a.addTask=function(e){var t={id:_()(),user_id:"5cd7209f-b05b-456a-9327-55e8af3f945e",random:0,description:e,completed:0,points:10};console.log("New Task ID: ".concat(t.id," Description: ").concat(t.description)),H.a.post("https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks",t).then((function(e){console.log({newTask:t});var n=a.state.tasks;n.push(t),a.setState({tasks:n})})).catch((function(e){console.error(e)}))},a.addRandom=function(){var e=A,t=e[Math.floor(Math.random()*e.length)];H.a.post("https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks",t).then((function(e){var n=a.state.tasks;n.push(t),console.log({randomToAdd:t}),a.setState({tasks:n})})).catch((function(e){console.error(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"showForm",value:function(){this.state.showForm?this.setState({showForm:!1}):this.setState({showForm:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(k,{score:this.calcScore(this.state.tasks)}),c.a.createElement(N,{onClick:function(){return e.showForm()},onHeartClick:function(){return e.addRandom()},score:this.calcScore(this.state.tasks)}),c.a.createElement("div",{id:"heart"}),this.state.showForm?c.a.createElement(y,{addTaskFunction:this.addTask}):null,c.a.createElement(T,{listOfTasks:this.state.tasks,deleteTaskFunction:this.deleteTask,doneTaskFunction:this.completeTask}),c.a.createElement(x,null))}}]),t}(c.a.Component);s.a.render(c.a.createElement(M,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b5cfc536.chunk.js.map