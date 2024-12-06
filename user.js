function ExecuteScript(strId)
{
  switch (strId)
  {
      case "639sbx3JtBJ":
        Script1();
        break;
  }
}

function Script1()
{
  /*
 This will insert a custom style for captions into a Storyline course.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/

/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';
 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(80,52,52,0.8); color: white; text-decoration: none; text-shadow: none; font-weight: none; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

