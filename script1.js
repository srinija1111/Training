const collegeName="mru";
const marks=100;
function tasking(){
    console.log("iam studying code at" + collegeName);
    document.getElementById("hello").innerText= "iam studying code at mru" ;
}
export {collegeName, tasking};
export default marks;
