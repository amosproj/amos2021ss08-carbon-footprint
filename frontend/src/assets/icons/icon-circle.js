
import React from 'react';

export default (props) => (
<svg width="50" height="50" fill ='grey'>
  <circle opacity={props.opacity || ''} cx="30" cy="25" r="4"  fill = {props.fill || "#9FA2B4"}/>
</svg>
)