'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

    describe('checkmark', function() {


        it('should be true....', inject(function() {
            expect(true).toBe(true);
        }));

        it('should be false....', inject(function() {
            expect(false).toBe(false);
        }));
    });
});


'use strict';

describe('Module: mm.logger', function () {

    beforeEach(module('mm.logger'));

    describe('LoggerUtils', function () {
        var LoggerUtils;

        beforeEach(inject(function (_LoggerUtils_) {
            LoggerUtils = _LoggerUtils_;
        }));

        it('should return time in format `%Y-%M-%d %h:%m:%s.%z`', inject(function () {
            var date = new Date(2014,7,23, 17, 22, 36, 810);
            expect(LoggerUtils.buildTimeString(date)).toEqual('2014-08-23 17:22:36.810');
        }));

        it('should return correct supplant formatted text', inject(function () {
            var now = LoggerUtils.buildTimeString(new Date());
            var originalLogFn = 'info';
            var name = 'testController';
            var message = 'This is a log message!';
            var result = now + ' [' + originalLogFn + '] ' + name + ': ' + message;
            expect(LoggerUtils.supplant('{0} [{1}] {2}: {3}', [now, originalLogFn, name, message])).toEqual(result);
        }));
    });

//    describe('LoggerProvider', function () {
//        var LoggerProvider, logger;
//
//        beforeEach(function () {
//            // Initialize the service provider
//            // by injecting it to a fake module's config block
//            var fakeModule = angular.module('test.app.config', function () {});
//            fakeModule.config( function (_LoggerProvider_) {
//                LoggerProvider = _LoggerProvider_;
//            });
//            // Initialize test.app injector
//            module('test.app.config');
//
//            // Kickstart the injectors previously registered
//            // with calls to angular.mock.module
//            inject(function () {});
//        });
//
//        beforeEach(inject(function (_Logger_) {
////            LoggerProvider = _LoggerProvider_;
//            logger = _Logger_.getLogger('test');
//        }));
//
//        it('should disable all log messages', inject(function () {
//            // check sanity
//            expect(LoggerProvider).not.toBeUndefined();
//
//            // configure the provider
//            LoggerProvider.disabled();
//
//            // test an instance of the provider for
//            // the custom configuration changes
//            expect(LoggerProvider.$get().level).toBeFalsy();
////            logger.info('it worked!');
////            expect(logger.info.logs).toContain(['it worked!']);
//        }));
//    });

});
