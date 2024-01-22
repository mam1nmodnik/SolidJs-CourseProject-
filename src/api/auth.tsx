
export async function submitMissing(nameMissing: string, age: string, signs: string, nameApplicant: string , email: string , file?: {} ){
   
    const url = ''
    const formData = new FormData();

    formData.append("nameMissing", nameMissing)
    formData.append("age", age)
    formData.append("signs", signs)
    formData.append("nameApplicant", nameApplicant)
    formData.append("email", email)

    const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    });

    return response.json();

}