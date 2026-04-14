import{r as t,af as dt,ag as F,ah as vt,a8 as pt,ai as ht,aj as gt,ak as xt,al as yt,am as bt,an as Mt,ao as wt}from"./vendor-CMITMnxu.js";import{D as Et,V as k,b as Ge,P as Ne,O as He,S as ge,ad as St,U as Ct,ae as xe,af as ye,s as Ie,R as qe,W as Pt,H as Ke,L as Oe,ag as Rt,F as _t,B as zt,q as At,ah as Qe,a8 as kt,ai as Tt,aj as Ft,C as J,ak as jt,al as It,am as Ot,x as Dt,an as Lt,ao as Bt,a as $t,o as Xe,ap as Ut,aq as De,Q as be,t as Wt}from"./three-core-BjgxVh0F.js";import{u as _,a as O,b as W,e as se,c as Vt,d as ve}from"./fiber-Baf7Zewn.js";const Gt="modulepreload",Nt=function(e){return"/"+e},Le={},Sn=function(n,o,r){let a=Promise.resolve();if(o&&o.length>0){let s=function(l){return Promise.all(l.map(f=>Promise.resolve(f).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),m=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));a=s(o.map(l=>{if(l=Nt(l),l in Le)return;Le[l]=!0;const f=l.endsWith(".css"),c=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":Gt,f||(v.as="script"),v.crossOrigin="",v.href=l,m&&v.setAttribute("nonce",m),document.head.appendChild(v),f)return new Promise((p,M)=>{v.addEventListener("load",p),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return a.then(s=>{for(const u of s||[])u.status==="rejected"&&i(u.reason);return n().catch(i)})},Y=new k,Me=new k,Ht=new k,Be=new Ge;function qt(e,n,o){const r=Y.setFromMatrixPosition(e.matrixWorld);r.project(n);const a=o.width/2,i=o.height/2;return[r.x*a+a,-(r.y*i)+i]}function Kt(e,n){const o=Y.setFromMatrixPosition(e.matrixWorld),r=Me.setFromMatrixPosition(n.matrixWorld),a=o.sub(r),i=n.getWorldDirection(Ht);return a.angleTo(i)>Math.PI/2}function Qt(e,n,o,r){const a=Y.setFromMatrixPosition(e.matrixWorld),i=a.clone();i.project(n),Be.set(i.x,i.y),o.setFromCamera(Be,n);const s=o.intersectObjects(r,!0);if(s.length){const u=s[0].distance;return a.distanceTo(o.ray.origin)<u}return!0}function Xt(e,n){if(n instanceof He)return n.zoom;if(n instanceof Ne){const o=Y.setFromMatrixPosition(e.matrixWorld),r=Me.setFromMatrixPosition(n.matrixWorld),a=n.fov*Math.PI/180,i=o.distanceTo(r);return 1/(2*Math.tan(a/2)*i)}else return 1}function Jt(e,n,o){if(n instanceof Ne||n instanceof He){const r=Y.setFromMatrixPosition(e.matrixWorld),a=Me.setFromMatrixPosition(n.matrixWorld),i=r.distanceTo(a),s=(o[1]-o[0])/(n.far-n.near),u=o[1]-s*n.far;return Math.round(s*i+u)}}const pe=e=>Math.abs(e)<1e-10?0:e;function Je(e,n,o=""){let r="matrix3d(";for(let a=0;a!==16;a++)r+=pe(n[a]*e.elements[a])+(a!==15?",":")");return o+r}const Yt=(e=>n=>Je(n,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Zt=(e=>(n,o)=>Je(n,e(o),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function en(e){return e&&typeof e=="object"&&"current"in e}const Cn=t.forwardRef(({children:e,eps:n=.001,style:o,className:r,prepend:a,center:i,fullscreen:s,portal:u,distanceFactor:m,sprite:l=!1,transform:f=!1,occlude:c,onOcclude:v,castShadow:p,receiveShadow:M,material:S,geometry:h,zIndexRange:E=[16777271,0],calculatePosition:x=qt,as:y="div",wrapperClass:P,pointerEvents:b="auto",...d},C)=>{const{gl:g,camera:w,scene:j,size:z,raycaster:Z,events:ee,viewport:ot}=_(),[A]=t.useState(()=>document.createElement(y)),le=t.useRef(null),I=t.useRef(null),Ae=t.useRef(0),te=t.useRef([0,0]),H=t.useRef(null),ue=t.useRef(null),V=(u==null?void 0:u.current)||ee.connected||g.domElement.parentNode,L=t.useRef(null),ne=t.useRef(!1),re=t.useMemo(()=>c&&c!=="blending"||Array.isArray(c)&&c.length&&en(c[0]),[c]);t.useLayoutEffect(()=>{const T=g.domElement;c&&c==="blending"?(T.style.zIndex=`${Math.floor(E[0]/2)}`,T.style.position="absolute",T.style.pointerEvents="none"):(T.style.zIndex=null,T.style.position=null,T.style.pointerEvents=null)},[c]),t.useLayoutEffect(()=>{if(I.current){const T=le.current=dt.createRoot(A);if(j.updateMatrixWorld(),f)A.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const R=x(I.current,w,z);A.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${R[0]}px,${R[1]}px,0);transform-origin:0 0;`}return V&&(a?V.prepend(A):V.appendChild(A)),()=>{V&&V.removeChild(A),T.unmount()}}},[V,f]),t.useLayoutEffect(()=>{P&&(A.className=P)},[P]);const ke=t.useMemo(()=>f?{position:"absolute",top:0,left:0,width:z.width,height:z.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:i?"translate3d(-50%,-50%,0)":"none",...s&&{top:-z.height/2,left:-z.width/2,width:z.width,height:z.height},...o},[o,i,s,z,f]),at=t.useMemo(()=>({position:"absolute",pointerEvents:b}),[b]);t.useLayoutEffect(()=>{if(ne.current=!1,f){var T;(T=le.current)==null||T.render(t.createElement("div",{ref:H,style:ke},t.createElement("div",{ref:ue,style:at},t.createElement("div",{ref:C,className:r,style:o,children:e}))))}else{var R;(R=le.current)==null||R.render(t.createElement("div",{ref:C,style:ke,className:r,children:e}))}});const G=t.useRef(!0);O(T=>{if(I.current){w.updateMatrixWorld(),I.current.updateWorldMatrix(!0,!1);const R=f?te.current:x(I.current,w,z);if(f||Math.abs(Ae.current-w.zoom)>n||Math.abs(te.current[0]-R[0])>n||Math.abs(te.current[1]-R[1])>n){const B=Kt(I.current,w);let D=!1;re&&(Array.isArray(c)?D=c.map($=>$.current):c!=="blending"&&(D=[j]));const q=G.current;if(D){const $=Qt(I.current,w,Z,D);G.current=$&&!B}else G.current=!B;q!==G.current&&(v?v(!G.current):A.style.display=G.current?"block":"none");const oe=Math.floor(E[0]/2),it=c?re?[E[0],oe]:[oe-1,0]:E;if(A.style.zIndex=`${Jt(I.current,w,it)}`,f){const[$,Fe]=[z.width/2,z.height/2],fe=w.projectionMatrix.elements[5]*Fe,{isOrthographicCamera:je,top:st,left:ct,bottom:lt,right:ut}=w,ft=Yt(w.matrixWorldInverse),mt=je?`scale(${fe})translate(${pe(-(ut+ct)/2)}px,${pe((st+lt)/2)}px)`:`translateZ(${fe}px)`;let U=I.current.matrixWorld;l&&(U=w.matrixWorldInverse.clone().transpose().copyPosition(U).scale(I.current.scale),U.elements[3]=U.elements[7]=U.elements[11]=0,U.elements[15]=1),A.style.width=z.width+"px",A.style.height=z.height+"px",A.style.perspective=je?"":`${fe}px`,H.current&&ue.current&&(H.current.style.transform=`${mt}${ft}translate(${$}px,${Fe}px)`,ue.current.style.transform=Zt(U,1/((m||10)/400)))}else{const $=m===void 0?1:Xt(I.current,w)*m;A.style.transform=`translate3d(${R[0]}px,${R[1]}px,0) scale(${$})`}te.current=R,Ae.current=w.zoom}}if(!re&&L.current&&!ne.current)if(f){if(H.current){const R=H.current.children[0];if(R!=null&&R.clientWidth&&R!=null&&R.clientHeight){const{isOrthographicCamera:B}=w;if(B||h)d.scale&&(Array.isArray(d.scale)?d.scale instanceof k?L.current.scale.copy(d.scale.clone().divideScalar(1)):L.current.scale.set(1/d.scale[0],1/d.scale[1],1/d.scale[2]):L.current.scale.setScalar(1/d.scale));else{const D=(m||10)/400,q=R.clientWidth*D,oe=R.clientHeight*D;L.current.scale.set(q,oe,1)}ne.current=!0}}}else{const R=A.children[0];if(R!=null&&R.clientWidth&&R!=null&&R.clientHeight){const B=1/ot.factor,D=R.clientWidth*B,q=R.clientHeight*B;L.current.scale.set(D,q,1),ne.current=!0}L.current.lookAt(T.camera.position)}});const Te=t.useMemo(()=>({vertexShader:f?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[f]);return t.createElement("group",F({},d,{ref:I}),c&&!re&&t.createElement("mesh",{castShadow:p,receiveShadow:M,ref:L},h||t.createElement("planeGeometry",null),S||t.createElement("shaderMaterial",{side:Et,vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader})))}),Pn=t.forwardRef(({sdfGlyphSize:e=64,anchorX:n="center",anchorY:o="middle",font:r,fontSize:a=1,children:i,characters:s,onSync:u,...m},l)=>{const f=_(({invalidate:M})=>M),[c]=t.useState(()=>new vt),[v,p]=t.useMemo(()=>{const M=[];let S="";return t.Children.forEach(i,h=>{typeof h=="string"||typeof h=="number"?S+=h:M.push(h)}),[M,S]},[i]);return pt(()=>new Promise(M=>ht({font:r,characters:s},M)),["troika-text",r,s]),t.useLayoutEffect(()=>void c.sync(()=>{f(),u&&u(c)})),t.useEffect(()=>()=>c.dispose(),[c]),t.createElement("primitive",F({object:c,ref:l,font:r,text:p,anchorX:n,anchorY:o,fontSize:a,sdfGlyphSize:e},m),v)});function tn(e,n,o,r){var a;return a=class extends ge{constructor(i){super({vertexShader:n,fragmentShader:o,...i});for(const s in e)this.uniforms[s]=new St(e[s]),Object.defineProperty(this,s,{get(){return this.uniforms[s].value},set(u){this.uniforms[s].value=u}});this.uniforms=Ct.clone(this.uniforms)}},a.key=xe.generateUUID(),a}const me=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!="function";function we(e,n){const o=_(i=>i.gl),r=W(ye,me(e)?Object.values(e):e);return t.useLayoutEffect(()=>{n==null||n(r)},[n]),t.useEffect(()=>{if("initTexture"in o){let i=[];Array.isArray(r)?i=r:r instanceof Ie?i=[r]:me(r)&&(i=Object.values(r)),i.forEach(s=>{s instanceof Ie&&o.initTexture(s)})}},[o,r]),t.useMemo(()=>{if(me(e)){const i={};let s=0;for(const u in e)i[u]=r[s++];return i}else return r},[e,r])}we.preload=e=>W.preload(ye,e);we.clear=e=>W.clear(ye,e);const nn=()=>parseInt(qe.replace(/\D+/g,"")),Ye=nn();function he(e,n,o){const r=_(p=>p.size),a=_(p=>p.viewport),i=typeof e=="number"?e:r.width*a.dpr,s=r.height*a.dpr,u=(typeof e=="number"?o:e)||{},{samples:m=0,depth:l,...f}=u,c=l??u.depthBuffer,v=t.useMemo(()=>{const p=new Pt(i,s,{minFilter:Oe,magFilter:Oe,type:Ke,...f});return c&&(p.depthTexture=new Rt(i,s,_t)),p.samples=m,p},[]);return t.useLayoutEffect(()=>{v.setSize(i,s),m&&(v.samples=m)},[m,v,i,s]),t.useEffect(()=>()=>v.dispose(),[]),v}const rn=e=>typeof e=="function",Rn=t.forwardRef(({envMap:e,resolution:n=256,frames:o=1/0,makeDefault:r,children:a,...i},s)=>{const u=_(({set:h})=>h),m=_(({camera:h})=>h),l=_(({size:h})=>h),f=t.useRef(null);t.useImperativeHandle(s,()=>f.current,[]);const c=t.useRef(null),v=he(n);t.useLayoutEffect(()=>{i.manual||(f.current.aspect=l.width/l.height)},[l,i]),t.useLayoutEffect(()=>{f.current.updateProjectionMatrix()});let p=0,M=null;const S=rn(a);return O(h=>{S&&(o===1/0||p<o)&&(c.current.visible=!1,h.gl.setRenderTarget(v),M=h.scene.background,e&&(h.scene.background=e),h.gl.render(h.scene,f.current),h.scene.background=M,h.gl.setRenderTarget(null),c.current.visible=!0,p++)}),t.useLayoutEffect(()=>{if(r){const h=m;return u(()=>({camera:f.current})),()=>u(()=>({camera:h}))}},[f,r,u]),t.createElement(t.Fragment,null,t.createElement("perspectiveCamera",F({ref:f},i),!S&&a),t.createElement("group",{ref:c},S&&a(v.texture)))}),_n=t.forwardRef(({makeDefault:e,camera:n,regress:o,domElement:r,enableDamping:a=!0,keyEvents:i=!1,onChange:s,onStart:u,onEnd:m,...l},f)=>{const c=_(d=>d.invalidate),v=_(d=>d.camera),p=_(d=>d.gl),M=_(d=>d.events),S=_(d=>d.setEvents),h=_(d=>d.set),E=_(d=>d.get),x=_(d=>d.performance),y=n||v,P=r||M.connected||p.domElement,b=t.useMemo(()=>new gt(y),[y]);return O(()=>{b.enabled&&b.update()},-1),t.useEffect(()=>(i&&b.connect(i===!0?P:i),b.connect(P),()=>void b.dispose()),[i,P,o,b,c]),t.useEffect(()=>{const d=w=>{c(),o&&x.regress(),s&&s(w)},C=w=>{u&&u(w)},g=w=>{m&&m(w)};return b.addEventListener("change",d),b.addEventListener("start",C),b.addEventListener("end",g),()=>{b.removeEventListener("start",C),b.removeEventListener("end",g),b.removeEventListener("change",d)}},[s,u,m,b,c,S]),t.useEffect(()=>{if(e){const d=E().controls;return h({controls:b}),()=>h({controls:d})}},[e,b]),t.createElement("primitive",F({ref:f,object:b,enableDamping:a},l))}),zn=t.forwardRef(function({children:n,object:o,disable:r,disableX:a,disableY:i,disableZ:s,left:u,right:m,top:l,bottom:f,front:c,back:v,onCentered:p,precise:M=!0,cacheKey:S=0,...h},E){const x=t.useRef(null),y=t.useRef(null),P=t.useRef(null),[b]=t.useState(()=>new zt),[d]=t.useState(()=>new k),[C]=t.useState(()=>new At);return t.useLayoutEffect(()=>{y.current.matrixWorld.identity(),b.setFromObject(o??P.current,M);const g=b.max.x-b.min.x,w=b.max.y-b.min.y,j=b.max.z-b.min.z;b.getCenter(d),b.getBoundingSphere(C);const z=l?w/2:f?-w/2:0,Z=u?-g/2:m?g/2:0,ee=c?j/2:v?-j/2:0;y.current.position.set(r||a?0:-d.x+Z,r||i?0:-d.y+z,r||s?0:-d.z+ee),p==null||p({parent:x.current.parent,container:x.current,width:g,height:w,depth:j,boundingBox:b,boundingSphere:C,center:d,verticalAlignment:z,horizontalAlignment:Z,depthAlignment:ee})},[S,p,l,u,c,r,a,i,s,o,M,m,f,v,b,d,C]),t.useImperativeHandle(E,()=>x.current,[]),t.createElement("group",F({ref:x},h),t.createElement("group",{ref:y},t.createElement("group",{ref:P},n)))}),de=(e,n)=>{e.updateRanges[0]=n};var on=`#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;class an extends Qe{constructor(n={}){super(n),this.setValues(n),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(n){n.uniforms.time=this._time,n.uniforms.radius=this._radius,n.uniforms.distort=this._distort,n.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${on}
      ${n.vertexShader}
    `,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(n){this._time.value=n}get distort(){return this._distort.value}set distort(n){this._distort.value=n}get radius(){return this._radius.value}set radius(n){this._radius.value=n}}const An=t.forwardRef(({speed:e=1,...n},o)=>{const[r]=t.useState(()=>new an);return O(a=>r&&(r.time=a.clock.elapsedTime*e)),t.createElement("primitive",F({object:r,ref:o,attach:"material"},n))}),sn=tn({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class cn extends Qe{constructor(n=6,o=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new J("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{r.uniforms={...r.uniforms,...this.uniforms},this.anisotropy>0&&(r.defines.USE_ANISOTROPY=""),o?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),r.fragmentShader=r.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${n}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${n}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${n})) , material.thickness + thickness_smear * (i + randomCoords) / float(${n}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${n})), material.thickness + thickness_smear * (i + randomCoords) / float(${n}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${n}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(r=>Object.defineProperty(this,r,{get:()=>this.uniforms[r].value,set:a=>this.uniforms[r].value=a}))}}const kn=t.forwardRef(({buffer:e,transmissionSampler:n=!1,backside:o=!1,side:r=Ft,transmission:a=1,thickness:i=0,backsideThickness:s=0,backsideEnvMapIntensity:u=1,samples:m=10,resolution:l,backsideResolution:f,background:c,anisotropy:v,anisotropicBlur:p,...M},S)=>{se({MeshTransmissionMaterial:cn});const h=t.useRef(null),[E]=t.useState(()=>new sn),x=he(f||l),y=he(l);let P,b,d,C;return O(g=>{if(h.current.time=g.clock.elapsedTime,h.current.buffer===y.texture&&!n){var w;C=(w=h.current.__r3f.parent)==null?void 0:w.object,C&&(d=g.gl.toneMapping,P=g.scene.background,b=h.current.envMapIntensity,g.gl.toneMapping=kt,c&&(g.scene.background=c),C.material=E,o&&(g.gl.setRenderTarget(x),g.gl.render(g.scene,g.camera),C.material=h.current,C.material.buffer=x.texture,C.material.thickness=s,C.material.side=Tt,C.material.envMapIntensity=u),g.gl.setRenderTarget(y),g.gl.render(g.scene,g.camera),C.material=h.current,C.material.thickness=i,C.material.side=r,C.material.buffer=y.texture,C.material.envMapIntensity=b,g.scene.background=P,g.gl.setRenderTarget(null),g.gl.toneMapping=d)}}),t.useImperativeHandle(S,()=>h.current,[]),t.createElement("meshTransmissionMaterial",F({args:[m,n],ref:h},M,{buffer:e||y.texture,_transmission:a,anisotropicBlur:p??v,transmission:n?a:0,thickness:i,side:r}))}),Tn=t.forwardRef(({children:e,enabled:n=!0,speed:o=1,rotationIntensity:r=1,floatIntensity:a=1,floatingRange:i=[-.1,.1],autoInvalidate:s=!1,...u},m)=>{const l=t.useRef(null);t.useImperativeHandle(m,()=>l.current,[]);const f=t.useRef(Math.random()*1e4);return O(c=>{var v,p;if(!n||o===0)return;s&&c.invalidate();const M=f.current+c.clock.elapsedTime;l.current.rotation.x=Math.cos(M/4*o)/8*r,l.current.rotation.y=Math.sin(M/4*o)/8*r,l.current.rotation.z=Math.sin(M/4*o)/20*r;let S=Math.sin(M/4*o)/10;S=xe.mapLinear(S,-.1,.1,(v=i==null?void 0:i[0])!==null&&v!==void 0?v:-.1,(p=i==null?void 0:i[1])!==null&&p!==void 0?p:.1),l.current.position.y=S*a,l.current.updateMatrix()}),t.createElement("group",u,t.createElement("group",{ref:l,matrixAutoUpdate:!1},e))}),X={apartment:"lebombo_1k.hdr",city:"potsdamer_platz_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",forest:"forest_slope_1k.hdr",lobby:"st_fagans_interior_1k.hdr",night:"dikhololo_night_1k.hdr",park:"rooitou_park_1k.hdr",studio:"studio_small_03_1k.hdr",sunset:"venice_sunset_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr"},Ze="https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",N=e=>Array.isArray(e),Ee=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"];function ce({files:e=Ee,path:n="",preset:o=void 0,colorSpace:r=void 0,extensions:a}={}){o&&(Se(o),e=X[o],n=Ze);const i=N(e),{extension:s,isCubemap:u}=Ce(e),m=Pe(s);if(!m)throw new Error("useEnvironment: Unrecognized file extension: "+e);const l=_(p=>p.gl);t.useLayoutEffect(()=>{if(s!=="webp"&&s!=="jpg"&&s!=="jpeg")return;function p(){W.clear(m,i?[e]:e)}l.domElement.addEventListener("webglcontextlost",p,{once:!0})},[e,l.domElement]);const f=W(m,i?[e]:e,p=>{(s==="webp"||s==="jpg"||s==="jpeg")&&p.setRenderer(l),p.setPath==null||p.setPath(n),a&&a(p)});let c=i?f[0]:f;if(s==="jpg"||s==="jpeg"||s==="webp"){var v;c=(v=c.renderTarget)==null?void 0:v.texture}return c.mapping=u?jt:It,c.colorSpace=r??(u?"srgb":"srgb-linear"),c}const ln={files:Ee,path:"",preset:void 0,extensions:void 0};ce.preload=e=>{const n={...ln,...e};let{files:o,path:r=""}=n;const{preset:a,extensions:i}=n;a&&(Se(a),o=X[a],r=Ze);const{extension:s}=Ce(o);if(s==="webp"||s==="jpg"||s==="jpeg")throw new Error("useEnvironment: Preloading gainmaps is not supported");const u=Pe(s);if(!u)throw new Error("useEnvironment: Unrecognized file extension: "+o);W.preload(u,N(o)?[o]:o,m=>{m.setPath==null||m.setPath(r),i&&i(m)})};const un={files:Ee,preset:void 0};ce.clear=e=>{const n={...un,...e};let{files:o}=n;const{preset:r}=n;r&&(Se(r),o=X[r]);const{extension:a}=Ce(o),i=Pe(a);if(!i)throw new Error("useEnvironment: Unrecognized file extension: "+o);W.clear(i,N(o)?[o]:o)};function Se(e){if(!(e in X))throw new Error("Preset must be one of: "+Object.keys(X).join(", "))}function Ce(e){var n;const o=N(e)&&e.length===6,r=N(e)&&e.length===3&&e.some(s=>s.endsWith("json")),a=N(e)?e[0]:e;return{extension:o?"cube":r?"webp":a.startsWith("data:application/exr")?"exr":a.startsWith("data:application/hdr")?"hdr":a.startsWith("data:image/jpeg")?"jpg":(n=a.split(".").pop())==null||(n=n.split("?"))==null||(n=n.shift())==null?void 0:n.toLowerCase(),isCubemap:o,isGainmap:r}}function Pe(e){return e==="cube"?Ot:e==="hdr"?xt:e==="exr"?yt:e==="jpg"||e==="jpeg"?bt:e==="webp"?Mt:null}const fn=e=>e.current&&e.current.isScene,mn=e=>fn(e)?e.current:e;function Re(e,n,o,r,a={}){var i,s,u,m;a={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...a};const l=mn(n||o),f=l.background,c=l.environment,v={backgroundBlurriness:l.backgroundBlurriness,backgroundIntensity:l.backgroundIntensity,backgroundRotation:(i=(s=l.backgroundRotation)==null||s.clone==null?void 0:s.clone())!==null&&i!==void 0?i:[0,0,0],environmentIntensity:l.environmentIntensity,environmentRotation:(u=(m=l.environmentRotation)==null||m.clone==null?void 0:m.clone())!==null&&u!==void 0?u:[0,0,0]};return e!=="only"&&(l.environment=r),e&&(l.background=r),ve(l,a),()=>{e!=="only"&&(l.environment=c),e&&(l.background=f),ve(l,v)}}function _e({scene:e,background:n=!1,map:o,...r}){const a=_(i=>i.scene);return t.useLayoutEffect(()=>{if(o)return Re(n,e,a,o,r)}),null}function et({background:e=!1,scene:n,blur:o,backgroundBlurriness:r,backgroundIntensity:a,backgroundRotation:i,environmentIntensity:s,environmentRotation:u,...m}){const l=ce(m),f=_(c=>c.scene);return t.useLayoutEffect(()=>Re(e,n,f,l,{backgroundBlurriness:o??r,backgroundIntensity:a,backgroundRotation:i,environmentIntensity:s,environmentRotation:u})),t.useEffect(()=>()=>{l.dispose()},[l]),null}function dn({children:e,near:n=.1,far:o=1e3,resolution:r=256,frames:a=1,map:i,background:s=!1,blur:u,backgroundBlurriness:m,backgroundIntensity:l,backgroundRotation:f,environmentIntensity:c,environmentRotation:v,scene:p,files:M,path:S,preset:h=void 0,extensions:E}){const x=_(g=>g.gl),y=_(g=>g.scene),P=t.useRef(null),[b]=t.useState(()=>new Dt),d=t.useMemo(()=>{const g=new Lt(r);return g.texture.type=Ke,g},[r]);t.useEffect(()=>()=>{d.dispose()},[d]),t.useLayoutEffect(()=>{if(a===1){const g=x.autoClear;x.autoClear=!0,P.current.update(x,b),x.autoClear=g}return Re(s,p,y,d.texture,{backgroundBlurriness:u??m,backgroundIntensity:l,backgroundRotation:f,environmentIntensity:c,environmentRotation:v})},[e,b,d.texture,p,y,s,a,x]);let C=1;return O(()=>{if(a===1/0||C<a){const g=x.autoClear;x.autoClear=!0,P.current.update(x,b),x.autoClear=g,C++}}),t.createElement(t.Fragment,null,Vt(t.createElement(t.Fragment,null,e,t.createElement("cubeCamera",{ref:P,args:[n,o,d]}),M||h?t.createElement(et,{background:!0,files:M,preset:h,path:S,extensions:E}):i?t.createElement(_e,{background:!0,map:i,extensions:E}):null),b))}function vn(e){var n,o,r,a;const i=ce(e),s=e.map||i;t.useMemo(()=>se({GroundProjectedEnvImpl:wt}),[]),t.useEffect(()=>()=>{i.dispose()},[i]);const u=t.useMemo(()=>[s],[s]),m=(n=e.ground)==null?void 0:n.height,l=(o=e.ground)==null?void 0:o.radius,f=(r=(a=e.ground)==null?void 0:a.scale)!==null&&r!==void 0?r:1e3;return t.createElement(t.Fragment,null,t.createElement(_e,F({},e,{map:s})),t.createElement("groundProjectedEnvImpl",{args:u,scale:f,height:m,radius:l}))}function Fn(e){return e.ground?t.createElement(vn,e):e.map?t.createElement(_e,e):e.children?t.createElement(dn,e):t.createElement(et,e)}class pn extends ge{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${Ye>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const hn=e=>new k().setFromSpherical(new $t(e,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),jn=t.forwardRef(({radius:e=100,depth:n=50,count:o=5e3,saturation:r=0,factor:a=4,fade:i=!1,speed:s=1},u)=>{const m=t.useRef(null),[l,f,c]=t.useMemo(()=>{const p=[],M=[],S=Array.from({length:o},()=>(.5+.5*Math.random())*a),h=new J;let E=e+n;const x=n/o;for(let y=0;y<o;y++)E-=x*Math.random(),p.push(...hn(E).toArray()),h.setHSL(y/o,r,.9),M.push(h.r,h.g,h.b);return[new Float32Array(p),new Float32Array(M),new Float32Array(S)]},[o,n,a,e,r]);O(p=>m.current&&(m.current.uniforms.time.value=p.clock.elapsedTime*s));const[v]=t.useState(()=>new pn);return t.createElement("points",{ref:u},t.createElement("bufferGeometry",null,t.createElement("bufferAttribute",{attach:"attributes-position",args:[l,3]}),t.createElement("bufferAttribute",{attach:"attributes-color",args:[f,3]}),t.createElement("bufferAttribute",{attach:"attributes-size",args:[c,1]})),t.createElement("primitive",{ref:m,object:v,attach:"material",blending:Bt,"uniforms-fade-value":i,depthWrite:!1,transparent:!0,vertexColors:!0}))}),gn="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png",$e=new Xe,ae=new k,ie=new be,Ue=new k,We=new be,K=new k,ze=t.createContext(null),xn=t.forwardRef(({children:e,material:n=Ut,texture:o=gn,range:r,limit:a=200,frustumCulled:i,...s},u)=>{var m,l;const f=t.useMemo(()=>class extends n{constructor(){super();const g=parseInt(qe.replace(/\D+/g,""))>=154?"opaque_fragment":"output_fragment";this.onBeforeCompile=w=>{w.vertexShader=`attribute float cloudOpacity;
               varying float vOpacity;
              `+w.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
                 vOpacity = cloudOpacity;
                `),w.fragmentShader=`varying float vOpacity;
              `+w.fragmentShader.replace(`#include <${g}>`,`#include <${g}>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `)}}},[n]);se({CloudMaterial:f});const c=t.useRef(null),v=t.useRef([]),p=t.useMemo(()=>new Float32Array(Array.from({length:a},()=>1)),[a]),M=t.useMemo(()=>new Float32Array(Array.from({length:a},()=>[1,1,1]).flat()),[a]),S=we(o);let h=0,E=0,x;const y=new be,P=new k(0,0,1),b=new k;O((g,w)=>{for(h=g.clock.elapsedTime,$e.copy(c.current.matrixWorld).invert(),g.camera.matrixWorld.decompose(Ue,We,K),E=0;E<v.current.length;E++)x=v.current[E],x.ref.current.matrixWorld.decompose(ae,ie,K),ae.add(b.copy(x.position).applyQuaternion(ie).multiply(K)),ie.copy(We).multiply(y.setFromAxisAngle(P,x.rotation+=w*x.rotationFactor)),K.multiplyScalar(x.volume+(1+Math.sin(h*x.density*x.speed))/2*x.growth),x.matrix.compose(ae,ie,K).premultiply($e),x.dist=ae.distanceTo(Ue);for(v.current.sort((j,z)=>z.dist-j.dist),E=0;E<v.current.length;E++)x=v.current[E],p[E]=x.opacity*(x.dist<x.fade-1?x.dist/x.fade:1),c.current.setMatrixAt(E,x.matrix),c.current.setColorAt(E,x.color);c.current.geometry.attributes.cloudOpacity.needsUpdate=!0,c.current.instanceMatrix.needsUpdate=!0,c.current.instanceColor&&(c.current.instanceColor.needsUpdate=!0)}),t.useLayoutEffect(()=>{const g=Math.min(a,r!==void 0?r:a,v.current.length);c.current.count=g,de(c.current.instanceMatrix,{start:0,count:g*16}),c.current.instanceColor&&de(c.current.instanceColor,{start:0,count:g*3}),de(c.current.geometry.attributes.cloudOpacity,{start:0,count:g})});let d=[(m=S.image.width)!==null&&m!==void 0?m:1,(l=S.image.height)!==null&&l!==void 0?l:1];const C=Math.max(d[0],d[1]);return d=[d[0]/C,d[1]/C],t.createElement("group",F({ref:u},s),t.createElement(ze.Provider,{value:v},e,t.createElement("instancedMesh",{matrixAutoUpdate:!1,ref:c,args:[null,null,a],frustumCulled:i},t.createElement("instancedBufferAttribute",{usage:De,attach:"instanceColor",args:[M,3]}),t.createElement("planeGeometry",{args:[...d]},t.createElement("instancedBufferAttribute",{usage:De,attach:"attributes-cloudOpacity",args:[p,1]})),t.createElement("cloudMaterial",{key:n.name,map:S,transparent:!0,depthWrite:!1}))))}),Ve=t.forwardRef(({opacity:e=1,speed:n=0,bounds:o=[5,1,1],segments:r=20,color:a="#ffffff",fade:i=10,volume:s=6,smallestVolume:u=.25,distribute:m=null,growth:l=4,concentrate:f="inside",seed:c=Math.random(),...v},p)=>{function M(){const y=Math.sin(c++)*1e4;return y-Math.floor(y)}const S=t.useContext(ze),h=t.useRef(null),E=t.useId(),x=t.useMemo(()=>[...new Array(r)].map((y,P)=>({segments:r,bounds:new k(1,1,1),position:new k,uuid:E,index:P,ref:h,dist:0,matrix:new Xe,color:new J,rotation:P*(Math.PI/r)})),[r,E]);return t.useLayoutEffect(()=>{x.forEach((y,P)=>{ve(y,{volume:s,color:a,speed:n,growth:l,opacity:e,fade:i,bounds:o,density:Math.max(.5,M()),rotationFactor:Math.max(.2,.5*M())*n});const b=m==null?void 0:m(y,P);if(b||r>1){var d;y.position.copy(y.bounds).multiply((d=b==null?void 0:b.point)!==null&&d!==void 0?d:{x:M()*2-1,y:M()*2-1,z:M()*2-1})}const C=Math.abs(y.position.x),g=Math.abs(y.position.y),w=Math.abs(y.position.z),j=Math.max(C,g,w);y.length=1,C===j&&(y.length-=C/y.bounds.x),g===j&&(y.length-=g/y.bounds.y),w===j&&(y.length-=w/y.bounds.z),y.volume=((b==null?void 0:b.volume)!==void 0?b.volume:Math.max(Math.max(0,u),f==="random"?M():f==="inside"?y.length:1-y.length))*s})},[f,o,i,a,e,l,s,c,r,n]),t.useLayoutEffect(()=>{const y=x;return S.current=[...S.current,...y],()=>{S.current=S.current.filter(P=>P.uuid!==E)}},[x]),t.useImperativeHandle(p,()=>h.current,[]),t.createElement("group",F({ref:h},v))}),In=t.forwardRef((e,n)=>t.useContext(ze)?t.createElement(Ve,F({ref:n},e)):t.createElement(xn,null,t.createElement(Ve,F({ref:n},e))));class yn extends ge{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${Ye>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(n){this.uniforms.pixelRatio.value=n}}const tt=e=>e&&e.constructor===Float32Array,bn=e=>[e.r,e.g,e.b],nt=e=>e instanceof Ge||e instanceof k||e instanceof Wt,rt=e=>Array.isArray(e)?e:nt(e)?e.toArray():[e,e,e];function Q(e,n,o){return t.useMemo(()=>{if(n!==void 0){if(tt(n))return n;if(n instanceof J){const r=Array.from({length:e*3},()=>bn(n)).flat();return Float32Array.from(r)}else if(nt(n)||Array.isArray(n)){const r=Array.from({length:e*3},()=>rt(n)).flat();return Float32Array.from(r)}return Float32Array.from({length:e},()=>n)}return Float32Array.from({length:e},o)},[n])}const On=t.forwardRef(({noise:e=1,count:n=100,speed:o=1,opacity:r=1,scale:a=1,size:i,color:s,children:u,...m},l)=>{t.useMemo(()=>se({SparklesImplMaterial:yn}),[]);const f=t.useRef(null),c=_(y=>y.viewport.dpr),v=rt(a),p=t.useMemo(()=>Float32Array.from(Array.from({length:n},()=>v.map(xe.randFloatSpread)).flat()),[n,...v]),M=Q(n,i,Math.random),S=Q(n,r),h=Q(n,o),E=Q(n*3,e),x=Q(s===void 0?n*3:n,tt(s)?s:new J(s),()=>1);return O(y=>{f.current&&f.current.material&&(f.current.material.time=y.clock.elapsedTime)}),t.useImperativeHandle(l,()=>f.current,[]),t.createElement("points",F({key:`particle-${n}-${JSON.stringify(a)}`},m,{ref:f}),t.createElement("bufferGeometry",null,t.createElement("bufferAttribute",{attach:"attributes-position",args:[p,3]}),t.createElement("bufferAttribute",{attach:"attributes-size",args:[M,1]}),t.createElement("bufferAttribute",{attach:"attributes-opacity",args:[S,1]}),t.createElement("bufferAttribute",{attach:"attributes-speed",args:[h,1]}),t.createElement("bufferAttribute",{attach:"attributes-color",args:[x,3]}),t.createElement("bufferAttribute",{attach:"attributes-noise",args:[E,3]})),u||t.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:c,depthWrite:!1}))});export{In as C,Fn as E,Tn as F,Cn as H,An as M,_n as O,Rn as P,jn as S,Pn as T,Sn as _,On as a,zn as b,kn as c,tn as s};
