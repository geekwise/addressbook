var head = document.getElementsByTagName('head')[0];

var data_files = [
    'data_01.js',
    'data_02.js'
]

for(var i=0; i<data_files.length; i++){
    var script = document.createElement('script');
    script.src = 'js/' + data_files[i];
    head.appendChild(script);
};

