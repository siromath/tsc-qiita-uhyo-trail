/*
4-1. 無い場合はunknown

以下のコードで定義される`getFoo`は、与えられたオブジェクトの`foo`プロパティを返す関数です。この関数に適切な型を付けてください。

ただし、`foo`プロパティが`string`型を持つオブジェクトを渡されたら`getFoo`の返り値の型が`string`になる、というように、引数に応じて`getFoo`の型が適切に変化するようにしてください。また、`foo`プロパティを持たないオブジェクトを渡された場合は、エラーではなく返り値の型が`unknown`となるようにしてください。さらに、`123`や`null`など、オブジェクトでない値を渡すのは型エラーとなるようにしてください。
*/

namespace T4_1 {
  function getFoo(obj) {
    return obj.foo;
  }

  // 使用例
  // numはnumber型
  const num = getFoo({
    foo: 123
  });
  // strはstring型
  const str = getFoo({
    foo: "hoge",
    bar: 0
  });
  // unkはunknown型
  const unk = getFoo({
    hoge: true
  });

  // エラー例
  getFoo(123);
  getFoo(null);
}