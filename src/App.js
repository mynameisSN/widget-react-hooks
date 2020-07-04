import React from 'react';
import Accordion from './component/Accordion';


const items = [
    {
        title: 'what is react?',
        content: 'React is a fron end javascript framework.'
    },
    {
        title: 'why use React?',
        content: 'React is a favorite javascript library among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

export default  () => {
    return(
        <div><Accordion items={items} /></div>
    )
}
