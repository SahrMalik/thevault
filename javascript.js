function randomdessert() {
    let arr = ['apple-crumble.html', 'carrotcake.html','doublechocchip.html', 'pumpkinpie.html', 'spinachpancake.html'];
    let val = arr[Math.floor(Math.random() * arr.length)];
    window.location = val;
}