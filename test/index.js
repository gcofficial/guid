import { assert } from 'chai'
import guid from '../src'

describe(
  'GUID test',
  function () {
    it(
      'should generate different ids everytime',
      function () {
        assert.notEqual(guid(), guid())
      }
    )

    it(
      'should be 36 length',
      function () {
        assert.equal(guid().length, 36)
      }
    )
  }
)
