document.querySelector('.click-me-button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    // Add an animation or transition effect here, like fade out
    document.querySelector('.thumbnail-container').style.opacity = '0';
    
    // Redirect after a short delay for the effect
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 500); // Adjust time as needed
});
