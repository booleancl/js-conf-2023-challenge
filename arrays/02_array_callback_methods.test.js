const {
  filterByType,
  getLists
} = require('./02_array_callback_methods')

describe('Use callback methods in array', () => {
  it('01 - filter users using filter with predicate', () => {
    expect(filterByType()).toEqual([
      { id: 1,  name: 'Gonzalo Fernandez', type: 'national', country: 'Chile', topics: ['engineering', 'technologies', 'programming-languages'] },
      { id: 4,  name: 'Osman Cea', type: 'national', country: 'Chile', topics: ['team-engineering', 'javascript']},
    ])
  })

  it('02 - get lists', () => {
    const {
      presenters_without_topics,
      presenters_with_javascript_topics
    } = getLists()
    expect(presenters_without_topics).toEqual([
      { id: 1,  name: 'Gonzalo Fernandez', type: 'national', country: 'Chile' },
      { id: 2,  name: 'Miguel Angel Durán', type: 'international', country: 'Spain' },
      { id: 3,  name: 'Charlie Gerard', type: 'international', country: 'USA' },
      { id: 4,  name: 'Osman Cea', type: 'national', country: 'Chile' }
    ])
    expect(presenters_with_javascript_topics).toEqual([
      { id: 2,  name: 'Miguel Angel Durán', type: 'international', country: 'Spain', topics: ['javascript', 'programming-languages'] },
      { id: 4,  name: 'Osman Cea', type: 'national', country: 'Chile', topics: ['team-engineering', 'javascript']}
    ])
  })
})
