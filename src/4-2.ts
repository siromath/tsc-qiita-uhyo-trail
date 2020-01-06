/*
4-2. プロパティを上書きする関数

以下の`giveId`関数は問題2-4と同じもので、渡されたオブジェクト`obj`にプロパティ`id`を加えてできる新しいオブジェクトを返す関数です。問題2-4では簡単のために`obj`が既に`id`を持っている場合は考えませんでしたが、今回はそのような場合も考えることにします。

`obj`が既に`id`プロパティを持っている場合、`giveId`は`id`プロパティを上書きします。例えば、`giveId({foo: 123, id: 456})`は`{foo: 123, id: '本当は（略'}`というオブジェクトになります。このことを加味して、`giveId`に適切な型をつけてください。なお、問題2-4の想定解では一番下の`obj2.id = '';`がエラーになりますが、今回はこれがエラーにならないようにする必要があります。
*/

namespace T4_2 {
  function giveId(obj) {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id
    };
  }

  // 使用例
  /*
   * obj1の型は { foo: number; id: string } 型
   */
  const obj1 = giveId({ foo: 123 });
  /*
   * obj2の型は { num : number; id: string } 型
   */
  const obj2 = giveId({
    num: 0,
    id: 100,
  });
  // obj2のidはstring型なので別の文字列を代入できる
  obj2.id = '';
}