import React, { useState } from 'react'

const Exam02 = () => {

    const [renderState, renderStateSet] = useState("main")
    const [age, ageSet] = useState(11)
    const [bShow, bShowSet] = useState(true)

    if (renderState === "main") {
        return (
            <div>
                <h1>조건부 랜더링 (main)</h1>
                <button className="myui btn" onClick={() => { renderStateSet("etc") }} > to Etc </button>
                <div>
                    <input onChange={(evt) => {
                        if (evt.target.value !== '')
                            ageSet(parseInt(evt.target.value))
                        else
                            ageSet(parseInt(0))
                    }} />
                    <h2>
                        {
                            age >= 15 ?
                                age >= 20 ?
                                    "성인" :
                                    "청소년"
                                :
                                "어린이"
                        }
                    </h2>
                    {
                        bShow &&
                        <div className="myui modal" >
                            <h3>모달창</h3>
                            <button className="myui btn" onClick={() => { bShowSet(false) }} >close</button>
                        </div>
                    }

                </div>
            </div>
        )
    }
    else {
        return (
            <h1>조건부 랜더링 (etc)</h1>
        )
    }
}

export default Exam02