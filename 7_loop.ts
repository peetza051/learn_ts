// for (let i = 0 ; i < 5 ; i++){    // ไล่ไปจากซ้ายไปขวา 1การกำหนดค่าตั้งต้น 2เป็นการเช็คว่ายังเป็นจริงอยู่มั้ย ถ้าเป็นจริงให้ทำในปีกกา 3เพิ่มค่า i ทีละ 1 ถ้ายังเป็นจริงอยู่
//     console.log("hello")
// }

// const numberss = [1,2,3,4,5,6]
// for (let i = 0 ; i < numberss.length ; i++){
//     console.log(numberss[i])  //i ในลงใน array เพื่อให้รันตัวเลขไปเรื่อยๆเพื่อให้เช็คแล้วเป็นเท็จหรือจนหมด object เพราะใน [array] ไล่ไปจาก0 1 2 3 4 ไปเรื่อยๆ  
// }

const personal = [
    {
        name:"kerkkit1",
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
        height: 176
    },
    {
        name:"kerkkit6",
        height: 179
    },
    {
        name:"kerkkit7",
        height: 200
    }

]
// for (let i = 0 ; i < personal.length ; i++){
//     console.log(personal[i])
// }



// let totol1 = 0
// for (let i = 0 ; i < personal.length ; i++){
//      totol1 = totol1 + personal[i].height

    
// }
// console.log(totol1)




for (let i = 0 ; i < personal.length ; i++){
    const y = personal[i].height
    if(y%2==0){
         console.log(personal[i])
    }
}