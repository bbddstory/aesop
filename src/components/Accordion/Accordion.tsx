/** 
  * @desc An accordion component that contains a list of data
  * @author Leon Li bbddstory@live.com
  */
import React from 'react';
import Card from '../Card/Card';

export interface IAccordionProps {
  items: any[];
}

export const AccordionComp: React.FC<IAccordionProps> = ({ items }) => {
  return (
    <>
      {items.map((item, idx) => {
        return (
          <Card item={item} key={idx} />
        )
      })}
    </>
  );
}

const Accordion = React.memo(AccordionComp);

export default Accordion;
