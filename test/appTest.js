const assert = require('chai').assert;
const expect = require('chai').expect;
const app    = require('../app');
//uses chai assert apis
//['exists' , 'equal' , 'typeOf', 'isString' , 'isObject' , 'isArray']

//uses chau expect apis
//['expect']

describe('App' , function(){
    describe('SayHello()' , function () {
        it('SayHello should return exist value' , function(){
            let result = app.SayHello();
            assert.exists( result , 'result is neither `null` nor `undefined`' );
         });
        it('SayHello should return Hello', function(){
            assert.equal(app.SayHello(),'hello');
            //OR
            expect(app.SayHello()).to.equal('hello'); 
         });
        // #1
        it('SayHello should return type string' , function(){
           let result = app.SayHello();
           assert.typeOf( result , 'string' );
    
         });   
        // #1 equal to #2
        // #2
        it('SayHello should return type string' , function(){
            let result = app.SayHello();
            assert.isString( result );
     
         });
    });
    describe('GetSelection()' , function () {
        it('GetSelection should return object' , function(){
            let result = app.GetSelection();
            assert.isObject( result );
         });
    });
    describe('GetMyteam()' , function () {
        it('GetMyteam should return Array' , function(){
            let result = app.GetMyteam();
            assert.isArray( result );
     
         });
    });
});