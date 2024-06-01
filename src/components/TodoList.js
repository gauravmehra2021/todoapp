import React, { useState } from 'react'

const TodoList = () => {
    const [searchedItem, setSearchedItem] = useState('')
    const [collectTheTodo, setCollectTheTodo] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [selectdID, setSelectedID] = useState(null)

    const handleInputChange = (e) => {
        setSearchedItem(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
             const data = {id: Math.random(),name:searchedItem}
            setCollectTheTodo([...collectTheTodo, data])
            setSearchedItem("")
        
    }

    const updateTheToto = (e)=> {
        e.preventDefault()
        setCollectTheTodo (collectTheTodo.map((ele,index)=>{
            if(ele.id == selectdID ){
             return{...ele,name:searchedItem}
            }
            return ele
           }))

           setIsEdit(false)
           setSelectedID("")
           setSearchedItem("")
        }

    const editTheTodo = (e, ele, index) => {
        e.preventDefault()
        setSearchedItem(ele.name)
        setIsEdit(true)
        setSelectedID(ele.id)

    }
    const deleteTheTodo = (e,ele, index) => {
        e.preventDefault()
       setCollectTheTodo(collectTheTodo.filter((e)=>e.id !== ele.id))
    }
    return (
        <div>
            <h1> toto slit</h1>

            <form>
                <input type="text" id="filter" placeholder="Search for..." value={searchedItem} onChange={handleInputChange} />
               {!isEdit ? <button type='submit' onClick={handleSubmit}>
                    SUBMIT</button> :
                  <button type='submit' onClick={updateTheToto}>
                UPDATE</button>}
            </form>

            <ol>
                {collectTheTodo.length > 0 && collectTheTodo.map((ele, index) => {
                    return (
                        <>
                            <div style={{ display: "flex", justifyContent: "space-evenly", alignContent: "center" }}>
                                <li key={index}>{ele.name}</li>
                                <button onClick={(e)=>editTheTodo(e,ele, index)}> EDIT</button>
                                <button onClick={(e)=>deleteTheTodo(e,ele, index)}>DELETE</button>
                            </div>
                        </>
                    )
                })}
            </ol>
        </div>
    )
}

export default TodoList
