function counter(init, delta)
{var x=5;
    return function count(){
        init+=delta;
        console.log(init)
    }
}
//count creates a copy of init, delta  initself (as it uses it)
let c1=counter(1,4)
let c2=counter(3,3)
c1();
c1();