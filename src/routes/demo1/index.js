import React from 'react';
import { connect } from 'dva';

import {Switch } from 'antd'

function Demo1() {

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <h1> demo1
      <Switch defaultChecked onChange={onChange} />
    </h1>
  )
}


export default connect()(Demo1);
