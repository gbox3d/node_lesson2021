import React from 'react'
import { useHistory } from 'react-router-dom'

const Contact = () => {
    const history = useHistory()
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <h2>카카오 아이디 : gbox2</h2>           
            <button className="myui btn" onClick={()=> { history.goBack() }} > 뒤로가기 </button>
            <button className="myui btn" onClick={()=> { history.push("/") }} > 홈으로 </button>
        </div>
    )
}
export default Contact;