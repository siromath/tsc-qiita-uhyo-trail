/*
3-5. undefinedな引数

以下のコードで定義されている型`Func<A, R>`は、`A`型の引数をひとつ受け取って`R`型の値を返すような関数の型です。JavaScriptでは与えられなかった引数は`undefined`が入ることが知られていますから、`f2`のように`A`が`undefined`型のときは引数無しで呼べるようにしたいです。一応、`v3`のように明示的に`undefined`を渡して呼び出すのもOKとしたいです。一方、`v4`のように、引数が`undefined`以外のときは引数の省略は許しません。

以上の動作をするように、型`Func<A, R>`を定義しなおしてください。
*/

namespace T3_5 {
  type Func<A, R> = (arg: A) => R;

  // 使用例
  const f1: Func<number, number> = num => num + 10;
  const v1: number = f1(10);
  const f2: Func<undefined, number> = () => 0;
  const v2: number = f2();
  const v3: number = f2(undefined);

  // エラー例
  const v4: number = f1();
}