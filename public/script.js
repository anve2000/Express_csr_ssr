const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

function refreshList() {
    $.get('/todos', function (data) {
        for (let todo of data) {
            $('#list').append(`<li>${todo}</li>`);
        }
    })
}

$('#btn').click(function(){
    const todo = $('#inp').val();

    $.post('/todos',{todo},function(res){
        console.log(res);
    }) 
})

refreshList();