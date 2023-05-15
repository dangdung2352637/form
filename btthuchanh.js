//đối tượng
function Validator(options) {
   
    var formElement = document.querySelector(options.form);
//    dang tro den toan bo form 
    console.log(options.rules);
    // tra ve mang co 2 object  
    if (formElement) {
        options.rules.forEach( function (rule) {
// lap lai cac phan tu trong mang    
            var inputElement = formElement.querySelector(rule.selector)
            var erronElement = inputElement.parentElement.querySelector('.form-message')
            console.log(rule.selector);
            console.log(rule);
            // rule la 1 Object 
            console.log(inputElement);
            // the input      
            console.log(erronElement);
            // the? span   

            if (inputElement) {
                inputElement.onblur = function() {
                    
                    var erronMessage = rule.test(inputElement.value)
                    console.log(erronMessage);
                    console.log(erronElement);

                    if (erronElement) {

                        erronElement.innerText = erronMessage
                        inputElement.parentElement.classList.add('invalid');
                        //   them chu the span   la`   return cua function ben duoi line 49    
                    } else{
                        erronElement.innerText='';
                        inputElement.parentElement.classList.remove('invalid');

                    }
                }
            }
        })
    }
}



// định nghĩa rules  

Validator.isRequired = function(selector) {
    return {
        selector: selector ,
        test : function (value) {
            return value.trim() ? '' : "vui lòng nhập trường này"
        }
    }
    
}

Validator.isEmail = function(selector) { 
    return {
        selector: selector ,
        test : function (value) {
            return value.trim() ? '' : "vui lòng nhập trường này"
                
        }
    }
}