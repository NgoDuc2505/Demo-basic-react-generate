
const Element = (tagName,attribute,children)=>{
    // define tagname
    const element = document.createElement(tagName);

    // define dataset
    let isHaveDataset = false;
    for (let key in attribute) {
        if(key === "dataset"){
            isHaveDataset = true;
            break;
        }
    }

    // define attribute
    if(attribute && !isHaveDataset){
        for (let set of Object.entries(attribute)) {
            const [key,value] = set;
            element[key] = value;
        }
    }else if(isHaveDataset){
        for (let set of Object.entries(attribute)) {
            const [key,value] = set;
            if(key === "dataset"){
                for (let keyOfSetdata of Object.entries(attribute.dataset)) {
                    const [keySet,val] = keyOfSetdata;
                    element.dataset[keySet] = val;
                }
            }else{
                element[key] = value;
            }
        }
    }

    //define children
    if(Array.isArray(children)){
        children.forEach(child => {
            element.append(child);
        });
    }else if(typeof children === 'string'){
        element.innerHTML = children;
    }else{
        element.append(child);
    }
    return element;
}



export default Element;