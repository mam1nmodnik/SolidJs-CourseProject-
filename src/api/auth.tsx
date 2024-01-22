import link from ''


export async function submitMissing(){
   
    const url = 'https://github.com/mam1nmodnik/SolidJs-CourseProject-/blob/main/backend/connect.php'
    const formData = new FormData();

    // formData.append...

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    return response.json();

}