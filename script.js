/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((e)=>{
        if(e.profession==="developer") console.log(e);
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element)=>{
        if(element.profession==="developer"){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"MST",age:"22",profession:"developer"})
    console.log(arr[arr.length-1]);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr= arr.filter((e)=>{
        return e.profession!=="admin"
    })
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let array_to_concatenate=[
        { id: 5, name: "Jane", age: "29", profession: "operation_lead" },
        { id: 6, name: "Jolly", age: "25", profession: "devops_lead" },
        { id: 7, name: "keshav", age: "20", profession: "tester" },
    ]

    arr=arr.concat(array_to_concatenate)
    console.log(arr);
  }