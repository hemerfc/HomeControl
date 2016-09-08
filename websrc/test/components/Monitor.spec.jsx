import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import Monitor from '../../src/components/presenter/Monitor'
import {expect} from 'chai'

describe('Monitor', () => {
  it('invokes callback when a button is clicked', () => {
    let clicked = false
    const onClick = () => clicked = true

    const component = renderIntoDocument(
      <Monitor state={Map(id:1, name:"test")}
               onClick={() => onClick()} />
    )

    const div = scryRenderedDOMComponentsWithTag(component, 'div')
    Simulate.click(div[0])

    expect(clicked).to.equal(true)
  });
});
