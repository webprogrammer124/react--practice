import React, {useContext, useState} from 'react'
import {ThemeContext} from '../context/ThemeContext'
function BookList() {
    const {isLight, light, dark}= useContext(ThemeContext);
    //console.log(theme)
    const ui = isLight ? light : dark;
    //console.log(ui)

 const [books, setbooks] = useState([
     {name: 'Newton',contributor : 'Physics'},
     {name: 'Ib-e-Sina', contributor: 'Maths'},
     {name: 'Ruthordford', contributor: 'Chemistry'}
 ])
    return (
        <div style={{backgroundColor: ui.bg, color: ui.text}}>
            <ul >
                {books.map((item)=>(

                <li key={item.name}>{`${item.name} Contributed in ${item.contributor}`}</li>
               )
                )}
            </ul>
        </div>
    )
}

export default BookList