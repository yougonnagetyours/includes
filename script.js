const cars = ["audi","bmw","tesla","vw","skoda","nissan","toyota","volvo","chevrolet","hyundai"]

function includes(array, elementToFind, fromIndex=0) {

  const myArray = [...array];
  
  const result = myArray.some((element, index)=>{
      if (index<fromIndex) return false;
      if (element===elementToFind) return true;
  })
  console.log(result)
  return result
}