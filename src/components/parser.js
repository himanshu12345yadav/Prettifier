class Parser {
    constructor(uri) {
        this.uri = uri.trim();
        this.Verifier = /^((http|https|ftp|mailto|file|data|irc):)(\/\/([^/?#]*))([^?#]*)(\?([^#]*))?(#(.*))?/;
        this.valueRegex = /(?<=&?\w+=)[=\w,.-:_-]+/g;
        this.keyRegex = /(?<=[&?])[\w\d]+/g;
        this.seperator = /^(http|https|ftp|mailto|file|data|irc):\/\/([^/?#]*)([^?#]*)?(\?[^#]*)?#?(.*)?/g;
    }
    decoder() {
        this.decoded_URI = decodeURIComponent(this.uri);
    }
    bodyParser() {
        const URIComponentsName = [
            'Scheme',
            'Authority',
            'Path',
            'Query',
            'Fragment',
        ];
        const URIComponentsValue = this.seperator.exec(this.decoded_URI);
        URIComponentsValue.shift();
        this.componentsMapper = {};
        URIComponentsName.forEach((component, index) => {
            this.componentsMapper[component] = URIComponentsValue[index];
        });
        this.parsedBody = [];
        URIComponentsName.forEach((component) => {
            if (this.componentsMapper[component] !== undefined) {
                this.parsedBody.push({
                    key: component,
                    value: this.componentsMapper[component],
                });
            }
        });
        this.parsedBody = this.parsedBody.filter(
            (item) => item.key !== 'Query'
        );

        return this.parsedBody;
    }
    parsedOutput() {
        this.decoder();
        if (!this.Verifier.test(this.decoded_URI)) {
            throw new Error('Malformed URI');
        } else {
            let parsed = [];
            parsed.push(...this.bodyParser());
            if (this.componentsMapper['Query'] !== undefined) {
                parsed.push({
                    key: 'QueryParameters',
                    value: '---------------QueryParameters---------------',
                });
                let key = [
                    ...this.componentsMapper['Query'].match(this.keyRegex),
                ];
                let value = [
                    ...this.componentsMapper['Query'].match(this.valueRegex),
                ];
                value.forEach((value, index) => {
                    let keyClone = key[index];
                    let obj = { key: keyClone, value: value };
                    parsed.push(obj);
                });
            }
            return parsed;
        }
    }
}

export default Parser;
