import React from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => (
<svg width="25" height="50" fill ='grey'>
  <circle opacity={props.opacity || ''} cx="15" cy="25" r="4"  fill = {props.fill || "#9FA2B4"}/>
</svg>
)