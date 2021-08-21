import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MessagesNavigationItem from './MessagesNavigationItem'

import { MessagesNavigationLayout } from './style'

function MessagesNavigation (props) {
  const [items, setItems] = useState(mapItems())

  function mapItems () {
    const mappedItems = []

    props.items.forEach((v, k) => {
      mappedItems[k] = {
        value: v,
        selected: false
      }
    })

    return mappedItems
  }

  const deselectItems = () => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].selected) {
        items[i].selected = false
      }
    }
  }

  const onClickItem = (key) => {
    deselectItems()

    items[key].selected = true
    setItems([...items])
  }

  function getItems () {
    if (items && items.length) {
      return (
        <React.Fragment>
          {items.map((e, i) => (
            <MessagesNavigationItem onClick={onClickItem}
              key={i}
              index={i}
              disabled={!e.selected}
              value={e.value}
            />
          ))}
        </React.Fragment>
      )
    }
  }

  return (
    <MessagesNavigationLayout>
      {getItems()}
    </MessagesNavigationLayout>
  )
}

MessagesNavigation.propTypes = {
  items: PropTypes.array.isRequired
}

export default MessagesNavigation
