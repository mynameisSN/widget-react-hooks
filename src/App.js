import React, {useState} from 'react';
// import Accordion from './component/Accordion';
// import Search from './component/Search';
import Dropdown from './component/Dropdown';

// const items = [
//     {
//         title: 'what is react?',
//         content: 'React is a fron end javascript framework.'
//     },
//     {
//         title: 'why use React?',
//         content: 'React is a favorite javascript library among engineers.'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ]

const options = [
  {
    label: 'The color red',
    value: 'Red',
  },
  {
    label: 'The color green',
    value: 'Green',
  },
  {
    label: 'The color blue',
    value: 'Blue',
  },
];

export default () => {
  const [selected, setSelected] = useState (options[0]);
  const [showDropdown, setShowDropdown] = useState (true);
  return (
    <div>
      <button onClick={() => setShowDropdown (!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown
        ? <Dropdown
            options={options}
            selected={selected} // pass down newly selected option
            onSelectedChange={setSelected} // call back functin pass down to set new state of selected option item
          />
        : null}
    </div>
  );
};
