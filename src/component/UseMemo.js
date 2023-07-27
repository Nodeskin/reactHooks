import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [numbers] = useState([10, 40, 30])
    const total = useMemo(()=>numbers.reduce((acc, number) => acc + number, 0),
    [numbers]);

const [names] = useState(["John", "Paul", "George", "Ringo"]);
const sortedNames = [...names].sort()
        console.log(names)
  return (
    <div>
        <div> Total: {total} </div>
        <div> Names: {names.join(', ')}</div>
        <div> sortedNames: {sortedNames.join(', ')}</div>
    </div>
  )
}

export default UseMemo
