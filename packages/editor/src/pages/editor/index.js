// import React from 'react'

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Container from './Container'

import styles from './index.less';

function BasicLayout(props) {
  return (
    /* 移动端实现拖拽的模版结构 */
    <div className={styles.layout}>
      <DndProvider backend={HTML5Backend}>
        <Container {...props} />
      </DndProvider>
    </div>
  );
}

export default BasicLayout;
