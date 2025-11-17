> https://juejin.im/post/6844904196827774990#heading-6
1. typeof, keyof, infer

* 定义类型：
基本类型、 interface、type、泛型、

interface Array<T> = {
  [index: number]: T
}

type FC<P = {}> = FunctionComponent<P>;
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

* 逻辑运算符
&、|、

* 对类型进行操作
集合操作： type MarketPerson = Person & { phone: string };
泛型

* 类型约束
使用 extends 关键字可以做到这一点。简单来说就是你定义一个类型，然后让 T 实现这个接口即可。

* 例子
描述数组
1. arr: number[] = [1,2,3]、
2. arr: Array<number> = [1,2,3]

* 类型推导与默认参数
类型推导：
function id<T>(arg: T): T {
  return arg;
}
id<string>("lucifer"); // 这是ok的，也是最完整的写法
id("lucifer"); // 基于类型推导，我们可以这样简写
默认参数： type A<T = string> = Array<T>;

* 类型断言
1. 尖括号语法(<string>someValue)
2. as语法：(someValue as string)
   
* 交叉类型
type C = A & B

## 关键词：
unknown：
  any存在的问题：1、失去了类型检查的作用，在可能出错的地方也不会发现错误。
                2、造成类型污染问题，any类型的对象会导致后续的属性也变为any。
  unknown：1、任何类型的值都可以赋值给unknow，但是unknow类型的值只能赋值给unknow本身和any类型。
           2、如果要把 unknown 类型值赋给 unknown 或者 any 之外的其它类型，或者对 unknown 类型执行方法调用或者属性读取之类的操作，都必须先使用条件控制流或者类 型断言来收窄 unknown 到指定的类型。
  例如：({}) as unknown as Config

declare：
  在引入第三方库，使用其中的方法时，需要用declare声明定义，避免ts报错。
  声明全局变量、函数、类、module。

[] as const: readonly []，只读

