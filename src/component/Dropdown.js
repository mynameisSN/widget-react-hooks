import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [open, setOpen] = useState (false);
  const ref = useRef ();

  useEffect (() => {
    const onBodyClick = e => {
      //   console.log (e.target);
      if (ref.current.contains (e.target)) {
        return;
      }
      setOpen (false);
    };

    document.body.addEventListener ('click', onBodyClick);

    // clean up function

    return () => {
      document.body.removeEventListener ('click', onBodyClick);
    };
  }, []);
  const renderedOptions = options.map (option => {
    if (option.value === selected.value) {
      return null; // don't render anything
    }
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange (option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  console.log (ref.current);
  return (
    <div ref={ref} className="ui form">
      <div className="filed">
        <label className="">Select a color</label>
        <div
          onClick={() => setOpen (!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu visible ${open ? 'transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
