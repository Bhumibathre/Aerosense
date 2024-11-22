function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) { 
            const image = document.getElementById('uploadedImage');   
            image.src = e.target.result;
            image.style.display = 'block';

            // Redirect to another page with image data
            // In a real application, you might send the image to a server and handle the response
            window.location.href = 'details.html'; // Redirect to details page
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image file.');
    }
}
