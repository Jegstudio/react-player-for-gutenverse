import { test } from 'zora'
import sinon from 'sinon'
import React from 'react'
import { create } from 'react-test-renderer'
import '../helpers/server-safe-globals'
import { testPlayerMethods } from '../helpers/helpers'
import { getSDK as originalGetSDK } from '../../src/utils'
import Twitch from '../../src/players/Twitch'

const TEST_URL = 'https://www.twitch.tv/videos/106400740'
const TEST_CONFIG = {
  options: {}
}

Twitch.prototype.componentWillMount = function () {
  this.playerID = 'mock-player-id'
}

testPlayerMethods(Twitch, {
  play: 'play',
  pause: 'pause',
  stop: 'pause',
  seekTo: 'seek',
  setVolume: 'setVolume',
  mute: 'setMuted',
  unmute: 'setMuted',
  getDuration: 'getDuration',
  getCurrentTime: 'getCurrentTime',
  getSecondsLoaded: null
}, { config: TEST_CONFIG })

test('load()', t => {
  class Player {
    static READY = 'READY'
    static PLAY = 'PLAY'
    static PAUSE = 'PAUSE'
    static ENDED = 'ENDED'
    constructor (id, options) {
      t.ok(id === 'mock-player-id')
    }

    addEventListener = (event, fn) => {
      if (event === 'READY') setTimeout(fn, 100)
    }
  }
  const getSDK = sinon.stub(originalGetSDK, 'stub').resolves({ Player })
  return new Promise(resolve => {
    const onReady = () => {
      t.ok(true)
      resolve()
    }
    const instance = create(
      <Twitch url={TEST_URL} onReady={onReady} config={TEST_CONFIG} />
    ).getInstance()
    instance.load(TEST_URL)
    t.ok(getSDK.calledOnce)
    getSDK.restore()
  })
})

test('render()', t => {
  const style = { width: '100%', height: '100%' }
  t.deepEqual(
    create(<Twitch url={TEST_URL} config={TEST_CONFIG} />).toJSON(),
    create(
      <div style={style} id='mock-player-id' />
    ).toJSON()
  )
})
