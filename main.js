function isValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
//usage
var personJSONString = '{"first_name":"Tony","last_name":"Hawk","age":31}';
if(isValidJSONString(personJSONString)){
 //cool we are valid, lets parse
 var person= JSON.parse(personJSONString);
}
