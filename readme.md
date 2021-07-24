
# DNSRato

Pentest reconnaissance tool to discovery hosts in a specific URL based in a word list. 

## Credits

This is a Node version based on [Ricardo Longatto tool](https://github.com/ricardolongatto/dnsrato).

## Usage: 

```bash
node dnsrato.js [URL] [WORDLIST] [OPTION]
```

| Option       | Description          |
| ------------ | -------------------- |
| `-verbose`   | List not found hosts |


## Examples:

```bash
node dnsrato.js grupobusinesscorp.com rato.txt
```

```bash
node dnsrato.js grupobusinesscorp.com rato.txt -verbose
```
