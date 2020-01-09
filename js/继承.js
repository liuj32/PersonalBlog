
// 参考 You Dont Know JavaScript 上卷
// 基类
function Base() {
}
// 派生类
function Derived() {
    Base.call(this);
}
// 将派生类的原型的原型链挂在基类的原型上
Object.setPrototypeOf(Derived.prototype, Base.prototype);