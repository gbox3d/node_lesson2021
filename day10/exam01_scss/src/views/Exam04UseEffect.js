
import React ,{useEffect,useState} from 'react'

const Exam04 = ()=> {
    const [count1, count1Set] = useState(0)
    const [count2, count2Set] = useState(0)

    useEffect(()=> {
        console.log('update all')
        
        //on destory
        return ()=> {
            console.log('destroy all') 
        }
    })

    useEffect(()=> {
        console.log('counter 1 upadte')
    },[count1])

    useEffect(()=> {
        console.log('counter 2 upadte')
    },[count2])

    useEffect(()=> {
        console.log('counter 1 or 2 upadte')
    },[count1,count2])

    //진입 초기에 초기리해야할것들...
    useEffect(()=> {
        console.log('--------view created-----------')
        return ()=> {
            console.log('----------view destroy -----------')
        }
    },[])

    

    return (
        <div>
            <h1>useEffect</h1>
            <h3 onClick={()=>{count1Set(count1+1)}}> counter 1 : {count1}</h3>
            <h3 onClick={()=>{count2Set(count2+1)}}> counter 2 : {count2}</h3>

        </div>
        
    )
}

export default Exam04;