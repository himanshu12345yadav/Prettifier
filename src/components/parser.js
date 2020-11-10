class Parser {
    constructor(uri) {
        this.uri = uri.trim();
        this.Verifier = /^((http|https|ftp|mailto|file|data|irc):)(\/\/([^/?#]*))([^?#]*)(\?([^#]*))?(#(.*))?/;
        // this.valueLookbehindRegex = /(?<=&?\w+=)[=\w,.-:_-]+/g;
        // this.keyLookbehindRegex = /(?<=[&?])[\w\d]+/g;
        this.seperator = /^(http|https|ftp|mailto|file|data|irc):\/\/([^/?#]*)([^?#]*)?\??([^#]*)?#?(.*)?/g;
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
                let pairs = this.componentsMapper['Query'].split('&');
                pairs.forEach((item) => {
                    parsed.push({
                        key: item.split('=')[0],
                        value: item.split('=')[1],
                    });
                });
            }
            return parsed;
        }
    }
}

export default Parser;
