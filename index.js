let getId = selector => document.getElementById(selector);
getId('edit').onclick = function () {
    getId('textarea').style.display ="block";
    getId('block_style').style.display ="none";
}
getId('style').onclick = function () {
    getId('block_style').style.display ="block";
    getId('textarea').style.display ="none";
}
getId('text_color').onclick = function () {
    getId('colors').style.display ="block";
    getId('colors').style.display ="flex";
}
getId('save').onclick = function () {
    let form_textarea = document.forms.form_textarea;
    getId('option_fonts').innerHTML = form_textarea[0].value;
}
getId('red').addEventListener('click',()=>{
    getId('lorem_color').className='text_red';
    getId('colors').style.display ="none";
});
getId('blue').addEventListener('click',()=>{
    getId('lorem_color').className='text_blue';
    getId('colors').style.display ="none";
});
getId('green').addEventListener('click',()=>{
    getId('lorem_color').className='text_green';
    getId('colors').style.display ="none";
});
getId('black').addEventListener('click',()=>{
    getId('lorem_color').className='text_black';
    getId('colors').style.display ="none";
});
getId('orange').addEventListener('click',()=>{
    getId('lorem_color').className='text_orange';
    getId('colors').style.display ="none";
});
getId('violet').addEventListener('click',()=>{
    getId('lorem_color').className='text_violet';
    getId('colors').style.display ="none";
});
getId('white').addEventListener('click',()=>{
    getId('lorem_color').className='text_white';
    getId('colors').style.display ="none";
});
getId('purple').addEventListener('click',()=>{
    getId('lorem_color').className='text_purple';
    getId('colors').style.display ="none";
});
getId('darkcyan').addEventListener('click',()=>{
    getId('lorem_color').className='text_darkcyan';
    getId('colors').style.display ="none";
});
getId('button_background_color').onclick = function () {
    getId('background_colors').style.display ="block";
    getId('background_colors').style.display ="flex";
}
getId('back_red').addEventListener('click',()=>{
    getId('lavender').className='red';
    getId('background_colors').style.display ="none";
});
getId('back_blue').addEventListener('click',()=>{
    getId('lavender').className='blue';
    getId('background_colors').style.display ="none";
});
getId('back_green').addEventListener('click',()=>{
    getId('lavender').className='green';
    getId('background_colors').style.display ="none";
});
getId('back_black').addEventListener('click',()=>{
    getId('lavender').className='black';
    getId('background_colors').style.display ="none";
});
getId('back_orange').addEventListener('click',()=>{
    getId('lavender').className='orange';
    getId('background_colors').style.display ="none";
});
getId('back_violet').addEventListener('click',()=>{
    getId('lavender').className='violet';
    getId('background_colors').style.display ="none";
});
getId('back_white').addEventListener('click',()=>{
    getId('lavender').className='white';
    getId('background_colors').style.display ="none";
});
getId('back_purple').addEventListener('click',()=>{
    getId('lavender').className='purple';
    getId('background_colors').style.display ="none";
});
getId('back_darkcyan').addEventListener('click',()=>{
    getId('lavender').className='darkcyan';
    getId('background_colors').style.display ="none";
});
getId('12px').addEventListener('click',()=>getId('lorem').className='font_size12');
getId('14px').addEventListener('click',()=>getId('lorem').className='font_size14');
getId('16px').addEventListener('click',()=>getId('lorem').className='font_size16');
getId('18px').addEventListener('click',()=>getId('lorem').className='font_size18');
getId('20px').addEventListener('click',()=>getId('lorem').className='font_size20');
let style = document.forms.style;
style.fonts.onchange = function (){
    for (let i = 0; i < style.fonts.options.length; i++) {
        if (style.fonts.options[i].selected) {
            getId('lorem').className= style.fonts.options[i].value;
        }
    }
}
getId('bold').onchange = function() {
    if(bold.checked){
        getId('lorem').style.fontWeight = 'bold';
    }
    else {
        getId('lorem').removeAttribute ('style');
    }
}
getId('cursive').onchange = function() {
    if(cursive.checked){
        getId('lorem_color').style.fontStyle = 'italic';
    }
    else {
        getId('lorem_color').removeAttribute ('style');
    }
}
getId('add').onclick = function() {
    getId('choose').style.display = 'block';
    getId('page_styles').style.display = 'none';
}
getId('choose_table').addEventListener('click',()=>{
    getId('block_table').style.display = 'block';
    getId('choose').style.height = '400px';
    getId('block_list').style.display = 'none';
});
getId('choose_list').addEventListener('click',()=>{
    getId('block_list').style.display = 'block';
    getId('block_table').style.display = 'none';
    getId('choose').style.height = '250px';
});
getId('create_table').onclick = function() {
    getId('choose').style.display = 'none';
    getId('page_styles').style.display = 'block';
    getId('block_table').style.display = 'none';
    document.forms.choose.reset();
    let body = document.querySelector("body"),
    tableWidth = document.getElementById("table-width"),
    tableHeight = document.getElementById("table-height"),
    width = tableWidth.value,
    height = tableHeight.value,
    numRows = document.getElementById("rows"),
    numColumns = document.getElementById("columns"),
    rows = numRows.value,
    columns = numColumns.value,
    tr = "",
    td = "",
    firstTable = document.querySelector("table");
    table = document.createElement("table"),
table.setAttribute("width", width);
table.setAttribute("height", height);
for (var i = 0; i < rows; i++) {
  tr = document.createElement("tr");
  for (var j = 0; j < columns; j++) {
    td = document.createElement("td");
    text = document.createTextNode('TD');
    td.appendChild(text);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
console.log(tr);
console.log(td);
if (firstTable == null) {
  return body.appendChild(table);
} else {
  var newTable = body.appendChild(table);
  return document.body.replaceChild(newTable, firstTable);
}
}
getId('create_list').onclick = function() {
    getId('choose').style.display = 'none';
    getId('page_styles').style.display = 'block';
    getId('block_list').style.display = 'none';
    document.forms.choose.reset();
}


