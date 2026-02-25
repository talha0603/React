

function Arrays () {

      const fruitsList = ['Mango', 'Orange', 'Strawberry']

    return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruitsList.map( (fruit, index) => (
          <li>{index} - {fruit}</li>
        ) )}
      </ul>
    </div>
    )
}
export default Arrays