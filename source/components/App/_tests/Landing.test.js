import React from 'react'
import sinon from 'sinon'
import moxios from 'moxios'
import { mount } from 'enzyme'
import { expect, testSetup } from '../../../../configuration/testSetup'
import Landing from '../Landing'

describe( '<Landing />', () => {

  context( 'handles data from HTTP request on componentDidMount', () => {
    let wrapper, mountSpy
    const fakeData = { userId: 9000 }

    beforeEach( () => {
      testSetup()
      moxios.install()
      mountSpy = sinon.spy( Landing.prototype, 'componentDidMount' )
      wrapper = mount( <Landing /> )
    })

    afterEach( () => {
      moxios.uninstall()
      mountSpy.restore()
    })

    it( 'calls componentDidMount ', () => {
      expect( Landing.prototype.componentDidMount.calledOnce ).to.equal( true )
    })

    it( 'sets intial state using data from HTTP response', done =>
      moxios.wait( () => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: fakeData
        }).then( () => {
          expect( wrapper.state().userId ).to.eql( 9000 )
          done()
        }).catch( done )
      })
    )

    it( 'renders <ProjectMenuContainer />', done =>
      moxios.wait( () => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: fakeData
        }).then( () => {
          expect( wrapper.find( 'ProjectMenuContainer' ).length ).to.equal( 1 )
          done()
        }).catch( done )
      })
    )

  })

  context( 'handles error returned from HTTP request on componentDidMount', () => {
    let errorStub, wrapper

    beforeEach( () => {
      testSetup()
      moxios.install()
      errorStub = sinon.stub( console, 'warn' ).callsFake( () => null )
      wrapper = mount( <Landing /> )
    })

    afterEach( () => {
      errorStub.restore()
      moxios.uninstall()
    })

    it( 'it catches and responds with an error', done =>
      moxios.wait( () => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400,
          response: 'fakeError'
        }).then( () => {
          expect( errorStub.calledTwice ).to.equal( true )
          done()
        }).catch( done )
      })
    )

    it( 'renders <LoginContainer />', done =>
      moxios.wait( () => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400,
          response: 'fakeError'
        }).then( () => {
          expect( wrapper.find( 'LoginContainer' ).length ).to.equal( 1 )
          done()
        }).catch( done )
      })
    )

  })

})
