var n1 = 20;
console.log(n1);
var n2 = 3.14;
console.log(n2);
var s1 = "Success is the best revenge";
console.log(s1);
var wk;
(function (wk) {
    wk[wk["Monday"] = 0] = "Monday";
    wk[wk["Tuesday"] = 1] = "Tuesday";
    wk[wk["Wednesday"] = 2] = "Wednesday";
    wk[wk["Thursday"] = 3] = "Thursday";
    wk[wk["Firday"] = 4] = "Firday";
    wk[wk["Saturday"] = 5] = "Saturday";
    wk[wk["Sunday"] = 6] = "Sunday";
})(wk || (wk = {}));
console.log(wk);
