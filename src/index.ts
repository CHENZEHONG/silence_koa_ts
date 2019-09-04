import {App} from './app'

async function main() {
    const app = new App(1115);
    await app.listen();
}

main();