

const main = async ()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data: any =await result.json()
    console.log (data)
    console.log(data.title)
}

main()