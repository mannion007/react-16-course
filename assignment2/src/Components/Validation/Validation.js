const Validation = (props) => {

    let message = "Text too short";

    if (props.message.length >= 5) {
        message = "Text long enough";
    }
    
    return message;
}

export default Validation;