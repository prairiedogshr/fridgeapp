import React, { Component, PropTypes } from 'react'
// Drag and Drop
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
// Material UI
import { ListItem } from 'material-ui/List'
import { fade } from 'material-ui/utils/colorManipulator'

const itemSource = {
  beginDrag(props) {
    let { id, index } = props
    return {
      id,
      index
    }
  }
}

const itemTarget = {
  hover(props, monitor, component) {

    let { id: dragId, index: dragIndex } = monitor.getItem()
    let { id: hoverId, index: hoverIndex } = props

    if (dragIndex === hoverIndex) return; // Don't replace items with themselves

    let hoveringOffsets = findDOMNode(component).getBoundingClientRect()
    let penPercent = 0.50 // Percentage distance into next item before swap
    let penMin = (hoveringOffsets.bottom - hoveringOffsets.top) * penPercent
    let clientOffset = monitor.getClientOffset()
    let penY

    // Dragging downwards
    if (dragIndex < hoverIndex) penY = clientOffset.y - hoveringOffsets.top
    // Dragging upwards
    if (dragIndex > hoverIndex) penY = hoveringOffsets.bottom - clientOffset.y

    if ( !(penY > penMin) ) return // Exit it haven't penetrated enough

    // Time to actually perform the action
    props.moveItem({ dragId, dragIndex, hoverId, hoverIndex })

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  }
}

const dndType = props => props.listIdentifier || 'reorderableListItem'

class ReorderableListItem extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  componentDidMount() {
    // Does not work in IE
    const img = new Image();
    img.onload = () => this.props.connectDragPreview(img);
    // Single transparent pixel
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  }

  render() {
    const textColor = this.context.muiTheme.baseTheme.palette.textColor;
    const {
      children,
      connectDragSource,
      connectDropTarget,
      isDragging,
      style,
      // eslint-disable-next-line no-unused-vars
      index, moveReport, renameReport, moveItem, connectDragPreview, // omit pass hackAutoComplete
      ...props
    } = this.props
    return connectDragSource(connectDropTarget(
      <div { ...props } >
        <ListItem
          style={{
            ...style,
            backgroundColor: isDragging && fade(textColor, 0.4),
            cursor: isDragging && 'move'
          }}
        >
          {children}
        </ListItem>
      </div>
    ))
  }
}

const connectTarget = connect => ({
  connectDropTarget: connect.dropTarget()
})

const connectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

export default (
  DropTarget(dndType, itemTarget, connectTarget)(
    DragSource(dndType, itemSource, connectSource)(
      ReorderableListItem
    )
  )
)