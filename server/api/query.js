const searchQuery = `
    query search($term: String!, $location: String!, $price: String!, $open_now: Boolean! {
      search(
        term: $term,
        location: $location,
      ) {
      total
      business {
        name
        rating
        review_count
        hours {
          is_open_now
          open {
            start
            end
            day
          }
        }
        location {
          address1
          city
          state
          country
        }
      }
    }
  }`;

module.exports = { searchQuery };
