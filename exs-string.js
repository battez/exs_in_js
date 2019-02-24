/*
exs-string.js
*/

/*
Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string. For example:
*/

function domainName(url){

    // TODO: possibly add check / convert to lowercase?
    
    // split on protocol part
    let pieces = url.split('://');
    
    // remove left if it had one
    if(pieces.length > 1) {
        pieces.shift();
    }
    
    // if substring 0,4 is www. remove
    if(pieces[0].substring(0,4) === 'www.' ) {

        pieces[0] = pieces[0].substring(4);
    }
    
    // now should have the domain in the first section before a dot
    pieces = pieces[0].split('.');
    return pieces[0];
    
}

//tests
/*domainName("http://github.com/carbonfive/raygun");// == "github"
domainName("http://www.zombie-bites.com"); // == "zombie-bites"
domainName("https://www.cnet.com"); //== "cnet"*/