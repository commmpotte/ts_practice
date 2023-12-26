"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @setUsersAdvance(55)
let UserServiceApp = class UserServiceApp {
    getUserInDb() {
        return this.users;
    }
};
UserServiceApp = __decorate([
    setUser(22),
    log()
], UserServiceApp);
function nullUser(target) {
    target.prototype.users = 0;
}
function setUsersAdvance(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
function setUser(users) {
    console.log('setUser init');
    return (target) => {
        console.log('setUser run');
        target.prototype.users = users;
    };
}
function log() {
    console.log('log init');
    return (target) => {
        console.log('log run');
    };
}
function treeUserAdvance(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
console.log(new UserServiceApp().getUserInDb());
// setUser init
// log init
// log run
// setUser run
// 22
