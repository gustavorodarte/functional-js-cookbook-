// don't 

var approved = []

for (var i = 0; i < approved.length; i++) {
    if (users[i].score >= 7) {
        approved.push(approved)
    }
}

// Do
const approved = filter(user => user.score >= 7, users);
