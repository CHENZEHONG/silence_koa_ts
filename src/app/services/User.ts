export default class UserService {
    static sayHi(name: string): string {
        return `hi ${name}!`
    }

    static login(username: string, password): number {
        if (username === 'zemun' && password === '12345678') {
            return 1
        } else {
            return 0
        }
    }
}