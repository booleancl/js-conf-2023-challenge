const {
  map
} = require('./01_callbacks_in_arrays')

const products = [
  { name: 'Bose Subwoofer', value: 120000 },
  { name: 'Samsung Subwoofer', value: 99990 },
  { name: 'JBL Subwoofer', value: 90000 }
]

describe('Handle Arrays with callbacks', () => {
  
  it('01 - map should return new list with the names', () => {
    var mappedList = map(products, function(item) {
      return item.name
    })
  
    expect(mappedList).toEqual([
      'Bose Subwoofer',
      'Samsung Subwoofer',
      'JBL Subwoofer'
    ])
  })
})
