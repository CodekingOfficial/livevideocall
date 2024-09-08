// Get the div element where you want to display the video
var videoContainer = document.getElementById('video-container');

// Create a video element
var video = document.createElement('video');
video.src = 'video_file.mp4';
video.autoplay = true;
video.loop = true; // Optional: loop the video
video.controls = true; // Show video controls

// Add the video element to the div container
videoContainer.appendChild(video);


 // Get the camera video element
 const cameraVideo = document.getElementById('camera-video');

 // Set up the camera
 navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => {
         cameraVideo.srcObject = stream;
         cameraVideo.play();
     })
     .catch(error => {
         console.error('Error accessing camera:', error);
     });

 // Make the camera video draggable
 cameraVideo.addEventListener('mousedown', (e) => {
     const startX = e.clientX;
     const startY = e.clientY;
     const startLeft = cameraVideo.offsetLeft;
     const startTop = cameraVideo.offsetTop;

     document.addEventListener('mousemove', (e) => {
         const newX = startX + (e.clientX - startX);
         const newY = startY + (e.clientY - startY);
         cameraVideo.style.left = `${newX}px`;
         cameraVideo.style.top = `${newY}px`;
     });

     document.addEventListener('mouseup', () => {
         document.removeEventListener('mousemove', null, false);
     });
 });

 // Function to display the modal
 function displayModal() {
     // Create the modal element
var modal=document.getElementById('id01');
     // Show the modal
     modal.style.display = 'block';
 }

 // Set a timeout to display the modal after 60 seconds
 setTimeout(displayModal, 10000);
 // Create an audio element
var audio = new Audio('./1ring.mp3');

// Play the sound as soon as the page loads
window.onload = function() {
audio.play();
}