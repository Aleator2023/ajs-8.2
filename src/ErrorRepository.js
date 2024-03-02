export class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    // Добавляет ошибку в репозиторий
    addError(code, description) {
        this.errors.set(code, description);
    }

    // Возвращает описание ошибки по её коду
    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
        return 'Unknown error';
    }
}


const errors = new ErrorRepository();
errors.addError(404, 'Not Found');
errors.addError(500, 'Internal Server Error');

console.log(errors.translate(404)); // Выведет: Not Found
console.log(errors.translate(500)); // Выведет: Internal Server Error
console.log(errors.translate(401)); // Выведет: Unknown error
