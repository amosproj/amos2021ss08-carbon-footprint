import React from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => (
<svg width="18" height="18" fill ='none' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" >
  <path opacity={props.opacity || ''}  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" fillRule="evenodd"
  
  fill={props.fill || "#9FA2B4"}/>
</svg>

)