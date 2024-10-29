document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const interests = document.getElementById('interests').value;

    const matchEntry = document.createElement('div');
    matchEntry.innerHTML = `<strong>${name}</strong> (Age: ${age})<br>Interests: ${interests}`;
    document.getElementById('matchesList').appendChild(matchEntry);

    // Clear the form
    this.reset();
});
