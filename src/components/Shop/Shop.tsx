/** 
  * @desc A component that contains a list of products
  * @author Leon Li bbddstory@live.com
  */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { getCategories } from '../../api/shop.api';
import Accordion from '../Accordion/Accordion';
import { CardWrap } from '../Card/Card.style';

export const ProductsComp: React.FC<RouteComponentProps> = () => {
  const [categories, setCategories] = useState<object[]>([]);

  useEffect(() => {
    if (!categories.length) {
      getCategories().then(res => {
        res && setCategories(res);
      });
    }
  }, [categories]);

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        {categories.length ? (
          <Accordion items={categories} />
        ) : (
          <CardWrap className="card">
            <header className="card-header">
              <p className="card-header-title">
                Aēsop Shop
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                Loading...
              </div>
            </div>
          </CardWrap>
        )}
      </div>
    </div>
  );
}

const Products = React.memo(ProductsComp);

export default Products;
