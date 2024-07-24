import{a as f,b as O,r as m}from"./react-CQo9HC6H.js";function S(){return S=Object.assign?Object.assign.bind():function(a){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var n in l)({}).hasOwnProperty.call(l,n)&&(a[n]=l[n])}return a},S.apply(null,arguments)}function L(a,o){if(a==null)return{};var l={};for(var n in a)if({}.hasOwnProperty.call(a,n)){if(o.includes(n))continue;l[n]=a[n]}return l}function D(a,o){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,n){return l.__proto__=n,l},D(a,o)}function M(a,o){a.prototype=Object.create(o.prototype),a.prototype.constructor=a,D(a,o)}function j(a,o){return a.replace(new RegExp("(^|\\s)"+o+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const V=!1,k=f.createContext(null);var U=function(a){return a.scrollTop},y="unmounted",x="exited",v="entering",b="entered",P="exiting",E=function(a){function o(n,e){var t;t=a.call(this,n,e)||this;var r,i=e&&!e.isMounting?n.enter:n.appear;return t.appearStatus=null,n.in?i?(r=x,t.appearStatus=v):r=b:r=n.unmountOnExit||n.mountOnEnter?y:x,t.state={status:r},t.nextCallback=null,t}M(o,a),o.getDerivedStateFromProps=function(n,e){return n.in&&e.status===y?{status:x}:null};var l=o.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var e=null;if(n!==this.props){var t=this.state.status;this.props.in?t!==v&&t!==b&&(e=v):t!==v&&t!==b||(e=P)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n,e,t,r=this.props.timeout;return n=e=t=r,r!=null&&typeof r!="number"&&(n=r.exit,e=r.enter,t=r.appear!==void 0?r.appear:e),{exit:n,enter:e,appear:t}},l.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this);t&&U(t)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===x&&this.setState({status:y})},l.performEnter=function(n){var e=this,t=this.props.enter,r=this.context?this.context.isMounting:n,i=this.props.nodeRef?[r]:[O.findDOMNode(this),r],s=i[0],u=i[1],p=this.getTimeouts(),c=r?p.appear:p.enter;!n&&!t||V?this.safeSetState({status:b},function(){e.props.onEntered(s)}):(this.props.onEnter(s,u),this.safeSetState({status:v},function(){e.props.onEntering(s,u),e.onTransitionEnd(c,function(){e.safeSetState({status:b},function(){e.props.onEntered(s,u)})})}))},l.performExit=function(){var n=this,e=this.props.exit,t=this.getTimeouts(),r=this.props.nodeRef?void 0:O.findDOMNode(this);e&&!V?(this.props.onExit(r),this.safeSetState({status:P},function(){n.props.onExiting(r),n.onTransitionEnd(t.exit,function(){n.safeSetState({status:x},function(){n.props.onExited(r)})})})):this.safeSetState({status:x},function(){n.props.onExited(r)})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},l.setNextCallback=function(n){var e=this,t=!0;return this.nextCallback=function(r){t&&(t=!1,e.nextCallback=null,n(r))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},l.onTransitionEnd=function(n,e){this.setNextCallback(e);var t=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this),r=n==null&&!this.props.addEndListener;if(t&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],s=i[0],u=i[1];this.props.addEndListener(s,u)}n!=null&&setTimeout(this.nextCallback,n)}else setTimeout(this.nextCallback,0)},l.render=function(){var n=this.state.status;if(n===y)return null;var e=this.props,t=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var r=L(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(k.Provider,{value:null},typeof t=="function"?t(n,r):f.cloneElement(f.Children.only(t),r))},o}(f.Component);function C(){}E.contextType=k,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},E.UNMOUNTED=y,E.EXITED=x,E.ENTERING=v,E.ENTERED=b,E.EXITING=P;var R=function(a,o){return a&&o&&o.split(" ").forEach(function(l){return e=l,void((n=a).classList?n.classList.remove(e):typeof n.className=="string"?n.className=j(n.className,e):n.setAttribute("class",j(n.className&&n.className.baseVal||"",e)));var n,e})},w=function(a){function o(){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(n=a.call.apply(a,[this].concat(t))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(i,s){var u=n.resolveArguments(i,s),p=u[0],c=u[1];n.removeClasses(p,"exit"),n.addClass(p,c?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(i,s)},n.onEntering=function(i,s){var u=n.resolveArguments(i,s),p=u[0],c=u[1]?"appear":"enter";n.addClass(p,c,"active"),n.props.onEntering&&n.props.onEntering(i,s)},n.onEntered=function(i,s){var u=n.resolveArguments(i,s),p=u[0],c=u[1]?"appear":"enter";n.removeClasses(p,c),n.addClass(p,c,"done"),n.props.onEntered&&n.props.onEntered(i,s)},n.onExit=function(i){var s=n.resolveArguments(i)[0];n.removeClasses(s,"appear"),n.removeClasses(s,"enter"),n.addClass(s,"exit","base"),n.props.onExit&&n.props.onExit(i)},n.onExiting=function(i){var s=n.resolveArguments(i)[0];n.addClass(s,"exit","active"),n.props.onExiting&&n.props.onExiting(i)},n.onExited=function(i){var s=n.resolveArguments(i)[0];n.removeClasses(s,"exit"),n.addClass(s,"exit","done"),n.props.onExited&&n.props.onExited(i)},n.resolveArguments=function(i,s){return n.props.nodeRef?[n.props.nodeRef.current,i]:[i,s]},n.getClassNames=function(i){var s=n.props.classNames,u=typeof s=="string",p=u?(u&&s?s+"-":"")+i:s[i];return{baseClassName:p,activeClassName:u?p+"-active":s[i+"Active"],doneClassName:u?p+"-done":s[i+"Done"]}},n}M(o,a);var l=o.prototype;return l.addClass=function(n,e,t){var r=this.getClassNames(e)[t+"ClassName"],i=this.getClassNames("enter").doneClassName;e==="appear"&&t==="done"&&i&&(r+=" "+i),t==="active"&&n&&U(n),r&&(this.appliedClasses[e][t]=r,function(s,u){s&&u&&u.split(" ").forEach(function(p){return h=p,void((c=s).classList?c.classList.add(h):function(d,N){return d.classList?!!N&&d.classList.contains(N):(" "+(d.className.baseVal||d.className)+" ").indexOf(" "+N+" ")!==-1}(c,h)||(typeof c.className=="string"?c.className=c.className+" "+h:c.setAttribute("class",(c.className&&c.className.baseVal||"")+" "+h)));var c,h})}(n,r))},l.removeClasses=function(n,e){var t=this.appliedClasses[e],r=t.base,i=t.active,s=t.done;this.appliedClasses[e]={},r&&R(n,r),i&&R(n,i),s&&R(n,s)},l.render=function(){var n=this.props;n.classNames;var e=L(n,["classNames"]);return f.createElement(E,S({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(f.Component);function A(a,o){var l=Object.create(null);return a&&m.Children.map(a,function(n){return n}).forEach(function(n){l[n.key]=function(e){return o&&m.isValidElement(e)?o(e):e}(n)}),l}function g(a,o,l){return l[o]!=null?l[o]:a.props[o]}function I(a,o,l){var n=A(a.children),e=function(t,r){function i(T){return T in r?r[T]:t[T]}t=t||{},r=r||{};var s,u=Object.create(null),p=[];for(var c in t)c in r?p.length&&(u[c]=p,p=[]):p.push(c);var h={};for(var d in r){if(u[d])for(s=0;s<u[d].length;s++){var N=u[d][s];h[u[d][s]]=i(N)}h[d]=i(d)}for(s=0;s<p.length;s++)h[p[s]]=i(p[s]);return h}(o,n);return Object.keys(e).forEach(function(t){var r=e[t];if(m.isValidElement(r)){var i=t in o,s=t in n,u=o[t],p=m.isValidElement(u)&&!u.props.in;!s||i&&!p?s||!i||p?s&&i&&m.isValidElement(u)&&(e[t]=m.cloneElement(r,{onExited:l.bind(null,r),in:u.props.in,exit:g(r,"exit",a),enter:g(r,"enter",a)})):e[t]=m.cloneElement(r,{in:!1}):e[t]=m.cloneElement(r,{onExited:l.bind(null,r),in:!0,exit:g(r,"exit",a),enter:g(r,"enter",a)})}}),e}w.defaultProps={classNames:""},w.propTypes={};var _=Object.values||function(a){return Object.keys(a).map(function(o){return a[o]})},F=function(a){function o(n,e){var t,r=(t=a.call(this,n,e)||this).handleExited.bind(function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(t));return t.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},t}M(o,a);var l=o.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,e){var t,r,i=e.children,s=e.handleExited;return{children:e.firstRender?(t=n,r=s,A(t.children,function(u){return m.cloneElement(u,{onExited:r.bind(null,u),in:!0,appear:g(u,"appear",t),enter:g(u,"enter",t),exit:g(u,"exit",t)})})):I(n,i,s),firstRender:!1}},l.handleExited=function(n,e){var t=A(this.props.children);n.key in t||(n.props.onExited&&n.props.onExited(e),this.mounted&&this.setState(function(r){var i=S({},r.children);return delete i[n.key],{children:i}}))},l.render=function(){var n=this.props,e=n.component,t=n.childFactory,r=L(n,["component","childFactory"]),i=this.state.contextValue,s=_(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,e===null?f.createElement(k.Provider,{value:i},s):f.createElement(k.Provider,{value:i},f.createElement(e,r,s))},o}(f.Component);F.propTypes={},F.defaultProps={component:"div",childFactory:function(a){return a}};export{w as C,F as T};
//# sourceMappingURL=transition-group-DFMasnQE.js.map