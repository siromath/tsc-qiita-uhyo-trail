/*
2-3. 省略可能なプロパティ

EventTarget#addEventListener(https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)は、2つまたは3つの引数を受け取る関数で、返り値はありません。1つ目の引数は文字列、2つ目の引数は関数です。そして3つ目の引数は省略可能であり、真偽値またはオブジェクトを渡すことができます。オブジェクトに存在可能なプロパティは`capture`, `once`, `passive`の3つで、全て真偽値であり、省略可能です。

このようなインターフェースを持つ関数`addEventListener`を`declare`を用いて宣言してください。簡単のために、第2引数に指定する関数は引数無しで何も返さない関数としてください。

なお、`declare`はTypeScriptに特有の構文であり、以下のように関数や変数の型を中身なしに宣言できる構文です。

```ts:declareの例
declare function foo(arg: number): number;
```
*/

namespace T2_3 {
  addEventListener("foobar", () => { });
  addEventListener("event", () => { }, true);
  addEventListener("event2", () => { }, {});
  addEventListener("event3", () => { }, {
    capture: true,
    once: false
  });

  // エラー例
  addEventListener("foobar", () => { }, "string");
  addEventListener("hoge", () => { }, {
    capture: true,
    once: false,
    excess: true
  });
}