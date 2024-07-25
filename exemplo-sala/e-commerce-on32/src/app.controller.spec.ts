import { AppController } from "./app.controller";
describe('AppController', () => {
  let appController: AppController;

  beforeEach(() => {
    // Mock dependencies as needed, for example, AppService
    const appService = { getHello: () => 'Hello World' };
    appController = new AppController(appService as any);
  });

  describe('getHello', () => {
    it('should return a string', () => {
      const result = appController.getHello();
      expect(typeof result).toBe('string');
    });

    it('should return a greeting message', () => {
      const result = appController.getHello();
      expect(result).toContain('Hello');
    });
  });
});
