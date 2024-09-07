// 这是一道终极的Promise的面试题,难度地狱级别,请务必认真对待,不要掉以轻心

// 分析
/*
    1. 第一个Promise.resolve()返回一个成功的Promise对象 fulfilled状态
    然后这个第一个resolve()干什么了,调用了.then()方法,根据Promise A+规范,调用.then()方法会返回一个新的Promise对象 状态是pending

    由于上面的顶层的Promise.resolve()已经处于fulfilled状态,所以下面的.then()会加入到微队列中去(microtask)  val: 0  存入微队列了,但是还未执行,然后看下继续调用.then()方法,又产生了一个新的Promise对象,状态是pending

    好,上面的现在没有任何的输出

    继续执行下面的Promise.resolve()  返回一个成功的Promise对象 fulfilled状态
    然后这个Promise.resolve()调用了.then()方法,根据Promise A+规范,调用.then()方法会返回一个新的Promise对象 状态是pending
    都一样了下面,同步执行输出1 加入微队列中去
    microtask队列: 0 1

    这里我们看下这一行return Promise.resolve(4);
    返回的是一个Promise对象 这需要看Promise A+规范

    原文: // If x is a promise, adopt its state [3.4]:
                If x is pending, promise must remain pending until x is fulfilled or rejected.
                If/when x is fulfilled, fulfill promise with the same value.
                If/when x is rejected, reject promise with the same reason.

        
        Generally, it will only be known that x is a true promise if it comes from the current implementation. This clause allows the use of implementation-specific means to adopt the state of known-conformant promises.

    规范只是说明要如何实现,但是并未公布具体的实现方法

    这里需要去查看ECMAScript规定或者直接查看V8引擎的源码
    这里贴出对应的V8引擎的源码

    源码: // const task = NewPromiseResolveThenableJobTask(promise,             UnsafeCast<JSReceiver>(resolution),
            UnsafeCast<Callable>(then)
            );
            return EnqueueMicrotask(task.context, task);

    也就是说,我们的返回的函数会放进微队列去执行

    那现在看下如何执行的
    我们这里的话
    microtask队列: 0 1 Promise.resolve(4) ==> Promise.resolve(4) 2
    输出: 0,1
    microtask队列: Promise.resolve(4) 2 ==> 2 ()=>{console.log(4)}
    输出: 2
    microtask队列: 3 ()=>{console.log(4)} ==> 3 4
    输出: 3

    以此类推
    microtask队列: 4 ==> 4 5
    输出: 4
    microtask队列: 5 ==> 5 6
    输出: 5
    microtask队列: 6 ==> 6
    输出: 6

    最终输出: 0 1 2 3 4 5 6
*/

Promise.resolve()
    .then(() => {
        console.log(0);
        return Promise.resolve(4);
    })
    .then((res) => {
        console.log(res)
    });

Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(5);
    })
    .then(() => {
        console.log(6);
    });