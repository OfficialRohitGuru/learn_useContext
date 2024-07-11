import React from 'react';
import {useContext} from 'react'
import {counterContext} from './context.js';

export default function Component(){
const counter = useContext(counterContext)
return(
<div>
    <h1>
    {counter}
    </h1>
</div>)
}