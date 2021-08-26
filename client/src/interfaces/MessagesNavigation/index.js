import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MessagesNavigationItem from './MessagesNavigationItem'

import { MessagesNavigationLayout } from './style'

function MessagesNavigation (props) {
  const [items, setItems] = useState(mapItems())

  function mapItems () {
    const mappedItems = []

    props.items.forEach((value, k) => {
      mappedItems[k] = {
        ...value,
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

    const { value, setValue } = props

    const filteredItems = items[key].filter(value)
    items[key].selected = true

    setValue([...filteredItems])
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
              value={e.name}
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
  items: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired
}

export default MessagesNavigation
