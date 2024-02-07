console.log("started")

document.getElementById('btn').onclick = function() {
    let value = document.getElementById('value').value;

    res = Math.sqrt(value);

    document.getElementById('res').innerHTML="The square root of " + value + " is " + res;
}