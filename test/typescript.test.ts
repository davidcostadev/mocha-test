import { expect } from 'chai'
import Legal from '../src/typescript'

it.only('should works with typescript', () => {
    expect(Legal()).to.equal('typescript')
})