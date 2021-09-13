import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { menuTopMovieItem } from '../../../../../constant/movie/index';
import './style.scss';
function MenuTop() {
  return (
    <div className="menu-top">
      <ul className="list-item">
        {menuTopMovieItem.map((item: any, index: number) => (
          <li key={index} onMouseEnter={() => {}} className={`item ${item.class}`}>
            {item.title} <FontAwesomeIcon icon={faCaretDown} size="sm" fixedWidth />
            <div className="sub-menu">
              <ul className="sub-menu_list">
                {item.items.map((itemSub: any, index: number) => (
                  <li key={index} className="sub_item">
                    <span className="sub_item_title">{itemSub.sub_title}</span>
                    {itemSub.value && <span className="sub_item_value">{itemSub.value}</span>}
                    {itemSub.sub_item && (
                      <span className="sub_item_icon">
                        <FontAwesomeIcon icon={faCaretRight} size="sm" fixedWidth />
                      </span>
                    )}
                    {itemSub.sub_item && (
                      <div className="item_mini_sub">
                        <ul className="item_mini_sub__list">
                          {itemSub.sub_item.map((item: any, index: number) => (
                            <li key={index}>
                              <span>{item.title}</span>
                              {item.value && <span className="sub_item_value">{item.value}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuTop;
