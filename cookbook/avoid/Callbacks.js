// don't 
$.ajax('http://api.trello.com/me', me => {
    $.ajax(`http://api.trello.com/tasks/${me.id}`, tasks => {
        var finished = []
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].done) {
                finished.push(tasks[i])
            }
        }
    })
})


// do

fetch('http://api.trello.com/me')
    .then(({ id }) => fetch(`http://api.trello.com/tasks/${id}`))
    .filter(prop('done'))
    .tap(console.log)