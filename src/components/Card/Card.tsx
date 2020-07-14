/** 
  * @desc An accordion component that contains a list of data
  * @author Leon Li bbddstory@live.com
  */
import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import { CardWrap, CardHeader, CardContent, ProdThumb, VariantsFlyout, VariantsTitle } from './Card.style';
import { baseUrl } from '../../utils/constants';

export interface ICardProps {
  item: {
    url: string;
    name: string;
    items: object[];
    shortDescription: string;
    thumbnail: string;
    imageAlt: string;
    price: string;
    inStock: boolean;
    variants: object[];
  };
}

export const CardComp: React.FC<ICardProps> = ({ item }) => {
  const [isFolded, setIsFolded] = useState<boolean>(true);
  const [showVariants, setShowVariants] = useState<boolean>(false);

  const toggleFold = () => {
    item.variants ? toggleVariants() : setIsFolded(!isFolded);
  }

  const toggleVariants = () => {
    document.getElementsByTagName('html')[0].style.overflow = showVariants ? 'auto' : 'hidden';
    setShowVariants(!showVariants);
  }

  return (
    <>
      <CardWrap className="card">
        <CardHeader className="card-header" onClick={toggleFold}>
          <p className="card-header-title">
            {item.name || item.imageAlt }&nbsp;{item.variants ? `(${item.variants.length})` : ''}
          </p>
          {!item.variants &&
            <div className="card-header-icon">
              <span className="icon">
                <h6 className="title is-6">{item.variants ? '' : (isFolded ? '+' : '-')}</h6>
              </span>
            </div>
          }
        </CardHeader>
          <CardContent className="card-content" isFolded={isFolded} isVariant={item.variants ? true : false}>
            <div className="content">
              {item.items &&
                <Accordion items={item.items} />
              }
              {item.variants &&
                <>
                  <a href={baseUrl + item.url} target="_blank" rel="noopener noreferrer" title="Click to open">
                    <ProdThumb src={baseUrl + item.thumbnail} alt={item.name} />
                  </a>
                  <h6 className="title is-6">{item.shortDescription}</h6>
                </>
              }
              {!item.items && !item.variants &&
                <>
                  <a href={baseUrl + item.url} target="_blank" rel="noopener noreferrer" title="Click to open">
                    <ProdThumb src={baseUrl + item.thumbnail} alt={item.imageAlt} />
                  </a>
                  <h6 className="title is-6">{item.price}{` (${item.inStock ? 'In stock' : 'Out of stock'})`}</h6>
                  <VariantsTitle className="title is-6">{item.imageAlt}</VariantsTitle>
                </>
              }
          </div>
        </CardContent>
      </CardWrap>
      {showVariants && item.variants &&
        <div className={`modal ${showVariants ? 'is-active' : ''}`}>
          <div className="modal-background" onClick={toggleVariants} />
          <VariantsFlyout className="columns is-centered" showVariants={showVariants}>
            <div className="column is-half">
              <Accordion items={item.variants} />
            </div>
          </VariantsFlyout>
          <button className="modal-close is-large" aria-label="close" onClick={toggleVariants} />
        </div>
      }
    </>
  );
}

const Card = React.memo(CardComp);

export default Card;
