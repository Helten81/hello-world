function changeGreeting() {
    var greetingElement = document.getElementById('greeting');
    greetingElement.innerText = 'You clicked tha button!';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentDate').innerText = new Date().toDateString();
});
