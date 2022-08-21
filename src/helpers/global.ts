import { IPrintListArgs } from "./print-list";

export let list:IPrintListArgs = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//   const listTwo:Partial<IPrintListArgs> = {
//     ...list,
//     next:{
//     ...list.next,
//     next:{
//       ...list.next.next
//     }
//   }
// }

// const getCopy = (list:IPrintListArgs):IPrintListArgs=> {
//   let copy:any = {...list}
//   if(list.next){
//       copy= {
//         ...copy,
//         next: getCopy(copy.next)
//       }
//   }
//   return copy
// }

// const sum =( a:number)=>{
// return (b:number)=>{
// return a+b
// }
// }

// const printNumbers  = (from:number, to:number)=>{
// let id = setInterval( ()=>{
//   if(from===to){
//     clearInterval(id)
//   }
//   if(from<to){
//     ++from
//     console.log(from)
//   }
//   console.log('{ggg}')
// },1000 )
// console.log(from===to)

// }

// const a = {
// set b(x:any){
//     console.log(x)
//   }
// }
// interface IUser{
//   name?:string
//   surname?:string
//   age?:number
// }
//  class A {
//   name
//   surname
//   age
//   constructor({name,surname,age}:IUser ){
//     this.name= name
//     this.surname=surname
//     this.age = age
//   }
//   a(){
//     console.log(1)
//   }
//   b(){
//     console.log(2)
//   }
//  }

//  const userOne = new A({
//   age:25
//  })
//  const userTwo = new A({
//   name:'Smith'
//  })

// const d = {
// 	name: '12',
// 	  x: {
// 	  surname: '120',
// 	},
//   };

//   const d2 = [
// 	['name','12'],
// 	['x',[
// 	  ['surname','120']
// 	]]
//   ]
//   const xxx = [1,2,3,]
//   const[a,b,c]= xxx

//   const converter = (el:Record<string,unknown>):Record<string,unknown>  =>{
// 	const x = Object.entries(el)
// 		const l = x.map(([key,value])=>{
// 		 if(typeof value === 'object'&& value !== null){
// 		  const res = converter(value as Record<string,unknown> )
// 		  console.log(res)
// 		  return [key, res]
// 		}
// 	  return [key, Number(value)];
// 	  })

// 	  return  Object.fromEntries(l)
//   }
// 	console.log(converter(d));
