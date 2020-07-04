import React, {useState} from 'react';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState (null);
  const onTitleClick = index => {
    console.log ('title clicked ', index);
    setActiveIndex (index);
  };
  const renderdItems = items.map ((item, index) => {
    const active = index === activeIndex ? 'active' : null;
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick (index)}>
          <i className="dropdown icon" />{item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderdItems}</div>;
};

export default Accordion;
