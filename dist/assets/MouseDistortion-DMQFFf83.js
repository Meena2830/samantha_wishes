import{j as e,r as t}from"./vendor-CMITMnxu.js";import{C as c,u,a as v,e as l}from"./fiber-Baf7Zewn.js";import{s as m}from"./drei-BImMi6iZ.js";import{b as n}from"./three-core-BjgxVh0F.js";const d=m({uTime:0,uMouse:new n(.5,.5),uResolution:new n(1,1)},`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,`
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float circle(vec2 uv, vec2 center, float radius) {
      return smoothstep(radius, radius - 0.16, distance(uv, center));
    }

    void main() {
      vec2 uv = vUv;
      vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
      vec2 centered = (uv - 0.5) * aspect;
      vec2 mouse = (uMouse - 0.5) * aspect;

      float wave = sin((centered.x + centered.y) * 8.0 + uTime * 0.65) * 0.018;
      vec2 warpedUv = uv + vec2(wave, -wave);

      float mouseBloom = circle((warpedUv - 0.5) * aspect + 0.5, mouse + 0.5, 0.42);
      float orbA = circle(uv, vec2(0.22 + sin(uTime * 0.18) * 0.04, 0.18), 0.38);
      float orbB = circle(uv, vec2(0.84, 0.76 + cos(uTime * 0.22) * 0.05), 0.44);

      vec3 base = vec3(1.0, 0.97, 0.95);
      vec3 pink = vec3(0.96, 0.63, 0.80);
      vec3 green = vec3(0.70, 0.90, 0.78);

      vec3 color = base;
      color += pink * orbA * 0.22;
      color += green * orbB * 0.18;
      color += mix(pink, green, 0.5 + wave * 12.0) * mouseBloom * 0.26;

      float alpha = 0.58 + mouseBloom * 0.08;
      gl_FragColor = vec4(color, alpha);
    }
  `);l({DistortionMaterial:d});function p(){const r=t.useRef(null),i=t.useRef(new n(.5,.5)),{size:s}=u();return t.useEffect(()=>{const o=a=>{i.current.set(a.clientX/window.innerWidth,1-a.clientY/window.innerHeight)};return window.addEventListener("pointermove",o),()=>{window.removeEventListener("pointermove",o)}},[]),v(o=>{r.current&&(r.current.uTime=o.clock.elapsedTime,r.current.uMouse.lerp(i.current,.08),r.current.uResolution.set(s.width,s.height))}),e.jsxs("mesh",{scale:[2,2,1],children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("distortionMaterial",{ref:r,transparent:!0})]})}function g(){return e.jsx("div",{className:"shader-layer",children:e.jsx(c,{dpr:[1,1.5],gl:{alpha:!0,antialias:!0},children:e.jsx(p,{})})})}export{g as default};
