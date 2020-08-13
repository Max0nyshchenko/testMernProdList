import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
const axios = require('axios')

export const Login = () => {
    const history = useHistory()
    const [form, setForm] = useState({
        nickname: '',
        password: ''
    })
    const onChangeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        console.log(form)
    }

    const signin = async () => {
        try {
            const data = await axios.post('/api/auth/login', {...form})
            console.log(data)
            if(data.status == 200 || data.statusText == "OK") {
                localStorage.setItem('juzer', form.nickname)
                history.push('/X')
            }
        } catch (e) {
            console.error(e)
            console.log(form)
        }
    }
    const signup = async () => {
        try {
            const data = await axios.post('/api/auth/register', {...form})
            console.log(data)
        } catch (e) {
            console.error(e)
            console.log(form)
        }
    }
    return (
        <div>

            <div className="input-group">
                <label htmlFor="nickname">Nickname</label>
                <input onChange={onChangeHandler} value={form.nickname} name={'nickname'} type="text"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChangeHandler} value={form.password} name={'password'} type="password"/>
            </div>
            <button onClick={signin}>Sign In</button>
            <button onClick={signup}>Sign Up</button>

        </div>
    )
}
