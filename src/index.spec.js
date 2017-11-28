import {getSalutation} from './index';
import {expect} from 'chai';

describe('test run', ()=> {
  it('should run this test', () => {
    expect(true).to.equal(true)
  })
})

describe('salutation', () => {
  it('should return properly formatted string', () => {
    const name = 'Collin'
    const salutation = getSalutation(name)
    expect(salutation).to.equal(`Hello, ${name}`)
  })
})