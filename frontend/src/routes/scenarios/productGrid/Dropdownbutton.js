import React from 'react';
import { getModels } from 'interface/projectInterface';
import Select from 'react-select'

const Dropdownbutton = () => (
  <Select options={getModels()} />
)
export default Dropdownbutton;