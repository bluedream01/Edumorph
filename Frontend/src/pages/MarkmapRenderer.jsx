 import React, { useEffect, useRef } from "react";
 import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";

const MarkmapRenderer = ({ markdown }) => {
  const svgRef = useRef(null);
 const transformer = new Transformer();

   useEffect(() => {
     if (!markdown || !svgRef.current) return;

     svgRef.current.innerHTML = "";

     const { root } = transformer.transform(markdown);

     // ✅ Correct way: set node.attributes.collapsed
     const collapseNodes = (node, depth = 0) => {
       if (depth > 0) {
         node.attributes = {
           ...node.attributes,
           collapsed: true,
         };
      }
       if (node.children) {
         node.children.forEach(child => collapseNodes(child, depth + 1));
       }
     };
     collapseNodes(root);

     Markmap.create(svgRef.current, null, root);
   }, [markdown]);
   return <svg ref={svgRef} className="markmap-svg" />;
 };

 export default MarkmapRenderer;

// import React, { useEffect, useRef } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const MarkmapRenderer = ({ markdown }) => {
//   const svgRef = useRef(null);
//   const transformer = new Transformer();

//   useEffect(() => {
//     if (!markdown || !svgRef.current) return;

//     svgRef.current.innerHTML = "";

//     const { root } = transformer.transform(markdown);

//     // 🚫 No collapsing — every node will be expanded

//     Markmap.create(svgRef.current, null, root);
//   }, [markdown]);

//   return <svg ref={svgRef} className="markmap-svg" />;
// };

// export default MarkmapRenderer;





