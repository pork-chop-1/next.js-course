
async function getData() {
  const res = await fetch('https://react-start-course-f9275-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json')

  return res.json()
}

export default async function Portfolio() {
  const data = JSON.stringify(await getData())

  return <div>
    <h1 className="flex justify-center text-[3rem]">Product</h1>
    <p>{data}</p>
  </div>
}
