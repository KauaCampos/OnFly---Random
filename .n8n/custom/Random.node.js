"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            group: ['transform'],
            version: 1,
            description: 'Gera número randômico usando random.org',
            defaults: { name: 'Random' },
            inputs: ['main'],
            outputs: ['main'],
            icon: 'file:random.svg',
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    options: [
                        {
                            name: 'True Random Number Generator',
                            value: 'generate',
                        },
                    ],
                    default: 'generate',
                    description: 'Escolha a operação',
                },
                {
                    displayName: 'Mínimo',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    description: 'Valor mínimo',
                    required: true,
                },
                {
                    displayName: 'Máximo',
                    name: 'max',
                    type: 'number',
                    default: 10,
                    description: 'Valor máximo',
                    required: true,
                },
            ],
        };
    }
    async execute() {
        const operation = this.getNodeParameter('operation', 0);
        const min = this.getNodeParameter('min', 0);
        const max = this.getNodeParameter('max', 0);
        if (min > max) {
            throw new Error('O valor mínimo não pode ser maior que o máximo.');
        }
        if (operation === 'generate') {
            const response = await this.helpers.httpRequest({
                method: 'GET',
                url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
            });
            return [
                this.helpers.returnJsonArray({
                    randomNumber: parseInt(response, 10),
                }),
            ];
        }
        return [this.helpers.returnJsonArray({})];
    }
}
module.exports = { Random };
//# sourceMappingURL=Random.node.js.map