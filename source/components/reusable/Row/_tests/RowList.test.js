import React from 'react'
import { mount } from 'enzyme'
import { expect } from '../../../../../configuration/testSetup'
import RowList from '../RowList'

describe.only( '<RowList />', () => {
  const type = 'project'
  const items = {
    1: { id: 1, text: 'cows' },
    2: { id: 2, text: 'blob' }
  }


  context( 'when given items', () => {
    const wrapper = mount( <RowList type={ type } items={ items } /> )

    it( `should render a div with class '${type}-rowlist-container`, () =>
      expect( wrapper.find( `.${type}-rowlist-container` ).length ).to.equal( 1 )
    )

    it( 'should render a <Row /> for each item', () =>
      expect( wrapper.find( 'Row' ).length ).to.equal( Object.keys( items ).length )
    )

  })

  context( 'when not given items', () => {
    const wrapper = mount( <RowList type={ type } items={ undefined } /> )

    it( 'should render a div with class \'loading\'', () =>
      expect( wrapper.find( '.loading' ).length ).to.equal( 1 )
    )

  })

})
