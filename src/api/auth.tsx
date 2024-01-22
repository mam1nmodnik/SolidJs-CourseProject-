
export async function submitMissing(nameMissing: string, age: string, signs: string, nameApplicant: string , email: string , file?: {} ){
   
    const url = 'https://github.com/mam1nmodnik/SolidJs-CourseProject-/blob/main/backend/missingForm.php'
    const formData = new FormData();

    formData.append("nameMissing", nameMissing)
    formData.append("age", age)
    formData.append("signs", signs)
    formData.append("nameApplicant", nameApplicant)
    formData.append("email", email)

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    return response.json();

}