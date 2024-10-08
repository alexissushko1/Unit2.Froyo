const message = prompt("Please enter each froyo flavor that you would like, followed by a comma. If you would like more than one of a specific flavor, type the flavor again.")

const flavors = message.split(",");

function getAllFlavors (flavors) {
  const obj = {};
    for (const flavor of flavors) {
    if(flavor in obj) {
      obj [flavor] += 1;
    } else {
      obj [flavor] = 1;
    }
}
return obj;
};


const getOrder = getAllFlavors(flavors);
console.table(getOrder);