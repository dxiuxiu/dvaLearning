import React , { useState }from 'react'


export default function WillDo(props){

    const [check, setCheck] = useState(false)

    function del() {
        props.del(props.list.id)
    }

    function change() {
        props.willDoneEvent(props.list.id)
    }
    return (
        <div>
            <input type="checkbox"
            name=""
            checked={check}
            onClick={() => {setCheck(!check)}}
            onChange = {change}
            id={`${props.list.id}`}/>
            {props.list.text}
            <button onClick = {del}>删除</button>
        </div>
    )
}
