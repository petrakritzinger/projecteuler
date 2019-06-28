function countPaths(num) {
    count = 0;
    for (let index = 1; index <= num+1; index++) {
        count += index * (num+2-index);
    }

        

    return count;
}

//console.log(countPaths(2));
const body = document.querySelector('body');
const div = document.createElement('div');

div.style.backgroundColor = 'pink';
div.style.color = 'white';
div.style.width = '65px';
div.style.height = '65px';
div.style.borderRadius = '9999px';
div.style.border = 'transparent';

div.addEventListener('pointermove', (e) => {
    console.log(e);
});

body.appendChild(div);