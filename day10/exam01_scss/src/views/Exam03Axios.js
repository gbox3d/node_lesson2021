import React, { useState } from 'react'
import axios from 'axios'


const Exam03 = () => {

    const [todos, todosSet] = useState([])
    const [post,postSet] = useState({})

    return (
        <div>
            <h1>Axios</h1>
            <button className="myui btn" onClick={
                async () => {
                    try {
                        const { status, data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
                        console.log(status)
                        console.log(data);
                        todosSet(data)
                    }
                    catch (e) {
                        console.log(e)
                    }
                }

            } > Get </button>
            <button className="myui btn" onClick={
                async () => {
                    try {
                        let { status, data } = await axios({
                            method: 'POST',
                            url: 'https://jsonplaceholder.typicode.com/posts',
                            data: JSON.stringify({
                                title: '마지막처럼',
                                body: '마지막처럼  마~마~지막처어럼 내일따윈 없는것처어럼',
                                userId: 1,
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            }
                        });
                        console.log(status)
                        console.log(data)
                        postSet(data)
                    }
                    catch (e) {
                        console.log(e)
                    }
                }
            }  > Post </button>

            <div className="todolist">
                <ul style={
                    {
                        height: "300px",
                        overflow: "auto"
                    }
                } >
                    {
                        todos.map((todo, index) => {
                            return (
                                <li key={index} >{todo.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="todoItem" >
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
            </div>
        </div>
    )
}

export default Exam03;