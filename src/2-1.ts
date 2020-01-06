/*
2-1. ジェネリクス

以下のコードで定義される関数`myFilter`は、配列の`filter`関数を再実装したものです。`myFilter`関数に適切な型アノテーションを付けてください。

`myFilter`関数は色々な型の配列を受け取れる点に注意してください。必要に応じて`myFilter`に型引数を追加しても構いません。
*/

namespace T2_1 {
  function myFilter(arr, predicate) {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
  }

  // 使用例
  const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
  const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

  // エラー例
  myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
}