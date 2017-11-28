import {getSalutation} from './index';
import {expect} from 'chai';

describe('index.js', () => {

  it('should run this test', () => {
    expect(true).to.equal(true)
  })

  it('should return proper salutation', () => {
    const name = 'Collin'
    const salutation = getSalutation(name)
    expect(salutation).to.equal(`Hello, ${name}`)
  })
})