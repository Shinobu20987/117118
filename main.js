quick_draw_data_set['boligrafo', 'papel', 'botella', 'flor', 'pez', 'avión', 'rana']
time_counter=0;
timer_check="";
draw_sketch="";
answer_holder="";
score=0;

function updateCnvas(){
    fondo("blanco");
    random_number = math.floor((math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById("sketch_name").innerHTML='dibujo a trazar:'+dibujo;

}
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}
function draw(){
    check_sketch()
    if(draw_sketch==sketch)
    {
        answer_holder="set";
        score++;
        document.getElementById('score').innerHTML='puntuación:'+score;
    }

}

function check_sketch(){
    time_counter++;
    document.getElementById('time').innerHTML='tiempo:'+time_counter;

}


function clearCanvas() {

    background("white");
}


