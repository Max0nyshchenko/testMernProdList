import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
const axios = require('axios')

export const X = () => {
    const [prodList, setProdList] = useState(null)
    const owner = localStorage.getItem('juzer')
    const [prod, setProd] = useState({name:'', qty:'', owner: owner})
    const history  = useHistory()
    const logoutHandler = () => {
        localStorage.removeItem('juzer')
        history.push('/')
    }
    const putProductHandler = async () => {
        try {
            const item = await axios.post('/api/prod/add', {...prod})
            console.log(item, "item in production")
        } catch (e) {
            console.error(e)
        }
    }
    const onChangeHandler = (e) => {
        setProd({...prod, [e.target.name]: e.target.value})
        console.log("prod:",prod)
    }
    const getProducts = async () => {
        const allProd = await axios.get('/api/prod/get')
        const someProd = allProd.data
        setProdList(someProd)
    }

    useEffect( ()=>{
        getProducts()
    }, [])
    return (
        <>
            <button onClick={logoutHandler}>Log out</button>
            <hr/>
            <input
                onChange={onChangeHandler}
                value={prod.name}
                name={'name'}
                placeholder={'putSomething in ur' +
            ' prodlist'}
                type="text"
            />
            <input
                onChange={onChangeHandler}
                name={'qty'}
                value={prod.qty}
                placeholder={'how many needed'}
                type="number"
            />
            <button onClick={putProductHandler}>PUT</button>
            <h4>Ur ProdList Skka:)))</h4>
            {
                prodList ? (
                    prodList.filter((item) => item.owner == owner)
                        .map((item,idx) => {
                            return (
                                <div key={idx}>
                                    <h2>{item.name}</h2>
                                    <h3>{item.qty}</h3>
                                </div>
                            )
                        })
                    )
                    : <h3>Loading...</h3>
            }
        </>
    )
}