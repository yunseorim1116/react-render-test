import React, { Children, useState } from 'react';
import ChildA from './ChildA';

const Parent = ({testList,children,ChildC,handleSetValue}) => {
    const [value,setValue] = useState(0)
    console.log('Parent render')

     const onIncreateValue = ()=>{
        const number = value + 1
        setValue(number)
      }

    return (
     <div>
        <div onClick={onIncreateValue}>Parent Value :{value} </div>
         {children}
         {ChildC}
        <ChildA/>
    </div>
    );
};

export default Parent;