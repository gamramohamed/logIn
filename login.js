let inp1=document.getElementById('inp1')
let inp2=document.getElementById('inp2')
inp1.onkeyup=()=>{
  localStorage.user=inp1.value
}
if (localStorage.length>0) {
  inp1.value=localStorage.user
}
inp2.onkeyup = () => {
  localStorage.user = inp2.value;
};
if (localStorage.length > 0) {
  inp2.value = localStorage.user;
}
