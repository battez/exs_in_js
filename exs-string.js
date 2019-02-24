/*
exs-string.js
*/

/*
Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string. For example:
*/

function domainName(url){

    // split on // remove left
    let pieces = url.split('//');
    // if substring 0,4 is www. remove
    
    // split on . and take first element
    
    
    
}

domainName("http://github.com/carbonfive/raygun");// == "github"
domainName("http://www.zombie-bites.com"); // == "zombie-bites"
domainName("https://www.cnet.com"); //== "cnet"