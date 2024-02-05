


// export  class api {

//     nameMissing?: string; 
//     age?: string; 
//     signs?: string; 
//     nameApplicant?: string; 
//     email?: string; 
//     file?: File ;
   


//     constructor(email?: string , nameMissing?: string, age?: string, signs?: string, nameApplicant?: string , file?: File){

//        this.nameMissing = nameMissing;
//        this.age = age;
//        this.signs = signs;
//        this.nameApplicant = nameApplicant;
//        this.email = email;
//        this.file = file;     

//     }

//     async submitMissing(){

//         const url = ''
//         const formData = new FormData();
    
//             if(this.file && this.nameMissing && this.age && this.signs && this.nameApplicant && this.email){

//                 formData.append("nameMissing", this.nameMissing)
//                 formData.append("age", this.age)
//                 formData.append("signs", this.signs)
//                 formData.append("nameApplicant", this.nameApplicant)
//                 formData.append("email", this.email)
//                 formData.append("file",  this.file)

//             }

//             const response = await fetch(url, {
//                 method: 'POST',
//                 mode: 'cors',
//                 body: formData
//             });
    
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//         return response.json();
//     }

// }

export async function submitMissing(nameMissing: string, age: string, signs: string, nameApplicant: string , email: string , file?: File){
   
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const formData = new FormData();

    formData.append("nameMissing", nameMissing)
    formData.append("age", age)
    formData.append("signs", signs)
    formData.append("nameApplicant", nameApplicant)
    formData.append("email", email)

    if(file){
        formData.append("file", file)
    }

    const response = await fetch(url, {
        method: 'POST',
        // mode: 'no-cors',
        body: formData
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}



export async function newPost(){
    const url = ''
    await fetch(
        url
    ).then((data) => { 

        ( data.status === 200 ) 
        ? data.json()
        : console.error() 

    }).then((response)=> {
        return console.log(response);
    })   
}

 


