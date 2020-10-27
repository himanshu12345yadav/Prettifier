class Parser {
    constructor(uri) {
        this.uri = uri.trim();
        this.domainRegex = /\w+:\/\/[\w\d-_./]+/g;
        this.valueRegex = /(?<=&?\w+=)[=\w,.-:_-]+/g;
        this.keyRegex = /(?<=[&?])[\w\d]+/g;
    }
    decoder() {
        try {
            this.decoded_URI = decodeURIComponent(this.uri);
        } catch (err) {
            throw new Error('Malformed URI');
        }
    }
    parsedOutput() {
        try {
            this.decoder();
            let parsed = [];
            let domain_name = [...this.decoded_URI.match(this.domainRegex)];
            parsed.push({ key: 'Authority', value: domain_name });
            if (domain_name[0].length !== this.decoded_URI.length) {
                let key = [...this.decoded_URI.match(this.keyRegex)];
                let value = [...this.decoded_URI.match(this.valueRegex)];
                value.forEach((value, index) => {
                    let keyClone = key[index];
                    let obj = { key: keyClone, value: value };
                    parsed.push(obj);
                });
            }
            return parsed;
        } catch (err) {
            throw new Error('Malformed URI');
        }
    }
}

export default Parser;
