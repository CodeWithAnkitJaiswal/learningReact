import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/CodeWithAnkitJaiswal')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center flex-col gap-2'>
      <h3>Followers - {data.followers}</h3>
      <img src={data.avatar_url} alt="myAvtar" width={300} height={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/CodeWithAnkitJaiswal');
    return res.json()
}