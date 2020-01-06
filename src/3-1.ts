/*
3-1. 配列からMapを作る

以下のコードで定義される関数`mapFromArray`は、オブジェクトの配列から`Map`を作って返す関数です。配列から取り出した各オブジェクトを`Map`に登録しますが、その際にキーとして各オブジェクトの指定されたプロパティの値を用います。`mapFromArray`に適切な型を付けてください。
*/

namespace T3_1 {
  function mapFromArray(arr, key) {
    const result = new Map();
    for (const obj of arr) {
      result.set(obj[key], obj);
    }
    return result;
  }

  // 使用例
  const data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
  ];
  const dataMap = mapFromArray(data, "id");
  /*
  dataMapは
  Map {
    1 => { id: 1, name: 'John Smith' },
    2 => { id: 2, name: 'Mary Sue' },
    100 => { id: 100, name: 'Taro Yamada' }
  }
  というMapになる
  */

  // エラー例
  mapFromArray(data, "age");
}