/*
2-4. プロパティを1つ増やす関数

下のコードで定義される`giveId`関数は、オブジェクトを受け取って、それに新しい文字列型のプロパティ`id`を足してできる新しいオブジェクトを返す関数です。この関数に適切な型を付けてください。なお、簡単のために、`giveId`に渡されるオブジェクト`obj`が既に`id`プロパティを持っている場合は考えなくて構いません。
*/

namespace T2_4 {
  function giveId(obj) {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id
    };
  }

  // 使用例
  const obj1: {
    id: string;
    foo: number;
  } = giveId({ foo: 123 });
  const obj2: {
    id: string;
    num: number;
    hoge: boolean;
  } = giveId({
    num: 0,
    hoge: true
  });

  // エラー例
  const obj3: {
    id: string;
    piyo: string;
  } = giveId({
    foo: "bar"
  });
}