function randomdessert() {
    let arr = ['apple-crumble.html', 'carrotcake.html', 'choc-triliche.html', 'doublechocchip.html', 'pumpkinpie.html', 'spinachpancake.html'];
    let val = arr[Math.floor(Math.random() * arr.length)];
    window.location = val;
}

function randomrecipe() {
    let arr = ['chickpea-curry.html', 'chilliconcarne.html', 'signaturebeans.html', 'speltbread.html', 'speltpizza.html',
'sweetpotato-curry.html', 'turkishpide.html'];
    let val = arr[Math.floor(Math.random() * arr.length)];
    window.location = val;
}