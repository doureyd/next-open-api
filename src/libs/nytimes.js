const api_key = process.env.NEW_YORK_TIMES_API_KEY

/*
List Names
The lists/names service returns a list of all the NYT Best Sellers Lists.
Some lists are published weekly and others monthly.
The response includes when each list was first published and last published.
*/
const getListNames = async () => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${api_key}`
  ).then((res) => res.json())

  const listNames = response?.results || []

  return {
    listNames,
  }
}

/*
List Data
The lists/{date}/{name} service returns the books on the best sellers list
for the specified date and list name. Use "current" for {date} to get the latest list.
*/
const getListData = async (pid) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/${pid}.json?api-key=${api_key}`
  ).then((res) => res.json())

  const books = response?.results?.books.filter((book) => book) || []
  const listName = response?.results?.display_name || ''

  return {
    books,
    listName,
  }
}

export { getListNames, getListData }
