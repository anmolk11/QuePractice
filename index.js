var t = 0;
    var A = 0;
    var B = 0;
    var C = 0;
    var sec = 0;
    var ps = false;
    function F1(x) {
        t++;
        document.getElementById("t").innerHTML = t;
        if (x == 'A') {
            A++;
            document.getElementById("A").innerHTML = A;
        }
        if (x == 'B') {
            B++;
            document.getElementById("B").innerHTML = B;
        }
        if (x == 'C') {
            C++;
            document.getElementById("C").innerHTML = C;
        }
        if (x == 'R') {
            t = 0;
            A = 0;
            B = 0;
            C = 0;
            document.getElementById("t").innerHTML = t;
            document.getElementById("A").innerHTML = A;
            document.getElementById("B").innerHTML = B;
            document.getElementById("C").innerHTML = C;
        }
    }
    function pad(val) {
        return val > 9 ? val : "0" + val;
    }
    setInterval(function () {
        if (ps == false) {
            document.getElementById("seconds").innerHTML = pad(++sec % 60);
            document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
        }
    }, 1000);
    function F2() {
        sec = -1;
    }
    function F3(x) {
        if (x== "P") {
            document.getElementById("P").disabled = true;
            document.getElementById("R").disabled = false;
            ps = true;
        }
        else {
            ps = false;
            document.getElementById("P").disabled = false;
            document.getElementById("R").disabled = true;
        }
    }