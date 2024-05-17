import wait from "./wait"

export default async function getPosts(){
   const res=await fetch("https://jsonplaceholder.typicode.com/posts")
   if (!res.ok) {
      throw new Error("Error occurred during fetching dta")
   }
   await wait(1000)
   return res.json()
}