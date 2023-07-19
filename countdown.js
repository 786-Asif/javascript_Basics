var count=10;
function timer(){
    if(count==0)
    {
        console.log("TimeUp!");
        clearInterval(id);
        return;
    }
    console.log(count);
    count--;
}
var id=setInterval(timer,1000);
