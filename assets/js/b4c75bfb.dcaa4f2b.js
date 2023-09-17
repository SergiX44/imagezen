"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8860],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,_modified_:!0},o="canvas()",l={unversionedId:"alterations/canvas",id:"alterations/canvas",title:"canvas()",description:"Initialize an empty canvas.",source:"@site/docs/alterations/canvas.md",sourceDirName:"alterations",slug:"/alterations/canvas",permalink:"/imagezen/docs/alterations/canvas",draft:!1,editUrl:"https://github.com/sergix44/imagezen/tree/master/docs/docs/alterations/canvas.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,_modified_:!0},sidebar:"tutorialSidebar",previous:{title:"make()",permalink:"/imagezen/docs/alterations/make"},next:{title:"basePath()",permalink:"/imagezen/docs/alterations/basePath"}},c={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"canvas"},(0,r.kt)("inlineCode",{parentName:"h1"},"canvas()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"->canvas(int $width, int $height, [?SergiX44\\ImageZen\\Draws\\Color $color = null], [SergiX44\\ImageZen\\Backend $backend = SergiX44\\ImageZen\\Backend::GD]): self\n")),(0,r.kt)("p",null,"Initialize an empty canvas."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int $width"),": The image width."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int $height"),": The image height."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"?SergiX44\\ImageZen\\Draws\\Color $color"),": The image background color."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SergiX44\\ImageZen\\Backend $backend"),": The backend to use, default is GD.")),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SergiX44\\ImageZen\\Image"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\ImageZen\\Image;\nuse SergiX44\\ImageZen\\Draws\\Color;\n\n$image = Image::make('path/to/image.jpg')\n    ->canvas(300, 200); // creates a 300x200 transparent canvas\n    \n$image = Image::make('path/to/image.jpg')\n    ->canvas(300, 200, Color::RED); // creates a 300x200 red canvas\n    \n$image = Image::make('path/to/image.jpg')\n    ->canvas(300, 200, Color::red(), Backend::IMAGICK); // creates a 300x200 red canvas using Imagick\n")))}u.isMDXComponent=!0}}]);