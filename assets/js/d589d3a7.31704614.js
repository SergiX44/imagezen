"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},l="Getting Started",i={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Installation",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/imagezen/docs/getting-started",draft:!1,editUrl:"https://github.com/sergix44/imagezen/tree/master/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Supported Formats",permalink:"/imagezen/docs/supported-formats"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Colors",id:"colors",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install the package from Composer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require sergix44/imagezen\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"ImageZen requires PHP 8.2 or higher.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Basically all you need to do is to create an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Image")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\ImageZen\\Image;\n\n$image = Image::make('path/to/image.jpg');\n")),(0,a.kt)("p",null,"Basically almost every method call returns the same instance, so you can chain them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"\nuse SergiX44\\ImageZen\\Image;\nuse SergiX44\\ImageZen\\Format;\n\n$image = Image::make('path/to/image.jpg')\n    ->resize(300, 200)\n    ->greyscale()\n    ->blur(10);\n    \n$image->save('path/to/destination.png', Format::PNG);\n$mime = $image->mime();\n")),(0,a.kt)("p",null,"You can see all the available methods in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/available-methods"},"API Reference"),"."),(0,a.kt)("h2",{id:"colors"},"Colors"),(0,a.kt)("p",null,"ImageZen supports different color formats as input, managed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"SergiX44\\ImageZen\\Color")," class, here an example:\nThey gets automatically converted to the backend format, so you don't have to worry about it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\ImageZen\\Draws\\Color;\n\n$color = Color::from('#ff0000');\n$color = Color::from('#f00');\n\n$color = Color::rgb(255, 0, 0);\n$color= Color::rgba(255, 0, 0, 0.5);\n\n\n// has also a variety of built-in colors\n$color = Color::transparent();\n$color = Color::black();\n$color = Color::white();\n$color = Color::red();\n// ...\n\n")))}u.isMDXComponent=!0}}]);