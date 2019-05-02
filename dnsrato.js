const dns = require('dns')
const readline = require('readline');
const fs = require('fs');

if (!process.argv[2] || !process.argv[3]) {
    console.log("Usage : node dnsrato.js <site.com.br> <wordlist>");
    console.log("Example : node dnsrato.js grupobusinesscorp.com rato.txt");
    console.log("Example : node dnsrato.js grupobusinesscorp.com rato.txt -verbose");
    process.exit(0);
}

var site = process.argv[2];
var wordlist = process.argv[3];
var parameters = process.argv[4];

const rl = readline.createInterface({
  input: fs.createReadStream(wordlist)
});

rl.on('line', (input) => {

    var hostname = input + site;

    dns.lookup(hostname, function(err, result) {

        if (!err) {
            console.log(`HOST ENCONTRADO: ${hostname} ====> IP: ${result}`);
        } else if (parameters == "-verbose") {
            console.log(`HOST NAO ENCONTRADO: ${hostname}`);
        }
        
    })

});


