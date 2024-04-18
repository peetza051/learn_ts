// console.log([])
// const persons

const numbers = [1,2,3,4,5]
console.log(numbers)
console.log(numbers[0]) //เข้าถึงช่อง 1 จะต้องใส่ใน array 0เพราะใน array จะเริ่มนับตั้งแต่ 0 1 2 3 ....
console.log(numbers[1]) //เข้าถึงช่อง 1 จะต้องใส่ใน array 0เพราะใน array จะเริ่มนับตั้งแต่ 0 1 2 3 ....
console.log(numbers.length) //length บอกความยาวใน array นับค่าทั้งหมดใน

const persons = [
    {
        name:"kerkkit",
        height: 171
    },
    {
        name:"kerkkit2",
        height: 160
    },
    {
        name:"kerkkit3",
        height: 175
    },
    {
        name:"kerkkit4",
        height: 178
    },
    {
        name:"kerkkit5",
        height: 200
    }

]
console.log(persons.length)
console.log(persons[0].name +persons[1].name +persons[2].name +persons[3].name +persons[4].name)
console.log((persons[0].height +persons[1].height +persons[2].height +persons[3].height +persons[4].height)/persons.length)


