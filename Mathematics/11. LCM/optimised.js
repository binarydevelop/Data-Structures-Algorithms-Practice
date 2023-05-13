function gcd(a,b){
    if(b ==0) return a;
    return gcd(b, a%b);
}
function lcm(a,b) {
let lcm = a*b /gcd(a,b);
return lcm
}