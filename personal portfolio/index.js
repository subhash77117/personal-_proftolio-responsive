const footers=document.getElementById("footer");
console.log(footers);
const clssesTd=document.getElementsByClassName("services");
console.log(clssesTd);
const tagNameId=document.getElementsByTagName("h2");
console.log(tagNameId);
const allP=document.querySelectorAll("h3");
console.log(allP);
const paraOne=document.querySelector(".social-links");
// paraOne.innerText="are  bhai log";
// paraOne.appendChild("para1");
// const addPara=document.createElement('p')
// addPara.textContent="hello bhai log";
// paraOne.appendChild(addPara);
// paraOne.removeChild(addPara);
// addPara.cssText=backgoundColor=red;
let eduStudy=document.getElementById('study');
eduStudy.addEventListener('click',function(){
      eduStudy.style.color='yellow';
});
const myAbout=document.querySelector('.mySelf');
myAbout.addEventListener('click',function(){
    myAbout.style.color='green';
})