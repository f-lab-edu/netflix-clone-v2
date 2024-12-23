import { graphql, HttpResponse } from 'msw'

const handlers = [
  graphql.query('GET_USER', ({ variables }) => {
    const { id } = variables
    return HttpResponse.json({
      data: {
        user: {
          id,
          name: 'John Maverick',
        },
      }
    })
  })
]

export default handlers