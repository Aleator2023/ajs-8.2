import { ErrorRepository } from '../src/ErrorRepository.js';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
        errorRepo.addError(404, 'Not Found');
        errorRepo.addError(500, 'Internal Server Error');
    });

    test('translate returns the correct error message for an existing code', () => {
        expect(errorRepo.translate(404)).toBe('Not Found');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
    });

    test('translate returns "Unknown error" for a non-existing code', () => {
        expect(errorRepo.translate(401)).toBe('Unknown error');
    });
});
