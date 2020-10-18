class TemplateProcessor {

    template;

    constructor(template) {
        this.template = template;
    }

    fillIn = (dict) => {
        const reg = /{{[\w,0-9]+}}/g;
        const reg_1 = /[\w, 0-9]+/

        const listMatch = this.template.match(reg);
        const replaceValue = listMatch.map(str => {
            const key = str.match(reg_1)[0];
            return {
                key: str,
                value: dict.hasOwnProperty(key) ? dict[key] : ''
            }
        });
        let res = this.template;
        replaceValue.forEach(({key, value}) => res = res.replace(key, value));
        return res;
    }

}