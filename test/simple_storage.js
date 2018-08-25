/* eslint-disable */

const SimpleStorage = artifacts.require('./SimpleStorage.sol')

contract('SimpleStorage', (accounts) => {
  const ownerAccount = accounts[0]

  it('should be able to set a new value', async () => {
    const instance = await SimpleStorage.new()
    await instance.set(1)
    const value1 = await instance.get()
    assert.equal(value1, '1', 'The value is not changed.')
    await instance.set(2)
    const value2 = await instance.get()
    assert.equal(value2, '2', 'The value is not changed.')
    await instance.set(3)
    const value3 = await instance.get()
    assert.equal(value3, '3', 'The value is not changed.')
  })

})
