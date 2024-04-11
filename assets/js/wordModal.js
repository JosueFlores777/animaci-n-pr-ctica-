var boxes = [
    {
        name: 'Friends',
        image: 'https://source.unsplash.com/uAgLGG1WBd4/900x900'
    },
    {
        name: 'test 2',
        image: 'https://images.unsplash.com/photo-1712675670807-f925abe035b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

];
function selectBox(index) {
    var selectedBox = boxes[index - 1]; 
    document.getElementById("scroller").style.display = "block";
    document.getElementById("selected-box-name").textContent = selectedBox.name;
    document.getElementById("big-box-image").src = selectedBox.image;
}



function clearSelection() {
    
    document.getElementById("scroller").scrollTop = 0;
    document.getElementById("scroller").style.display = "none";
    document.getElementById("fullscreen-background").style.backgroundImage = "none";
}


document.getElementById("scroller").addEventListener("scroll", function() {
    var scrollPosition = this.scrollTop;
    var paddingValue = scrollPosition > 0 ? 0 : 60;
    this.style.padding = paddingValue + "px";
});

