import React from 'react';
import { connect } from 'dva';

function Demo1() {
  return (
    <h1> demo1</h1>
  )
}


export default connect()(Demo1);
