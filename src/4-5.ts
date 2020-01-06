/*
4-5. 最低一つは必要なオプションオブジェクト

以下のコードで定義される関数`test`は、`foo`, `bar`及び`baz`プロパティを持つオプションオブジェクトを受け取る関数です。これらのプロパティはどれも省略可能としたいですが、全部省略する（すなわち、`{}`を渡される）のだけは型エラーとしたいです。

また、コードを簡単にするために、全てのプロパティが出揃ったオプションオブジェクトの型を下のコードの`Options`で定義し、「各プロパティは省略可能だがいずれか1つは必要なオプションオブジェクトの型」を`AtLeastOne<Options>`で表したいです。このような`AtLeastOne<T>`を定義してください。
*/

namespace T4_5 {
  // 使用例
  interface Options {
    foo: number;
    bar: string;
    baz: boolean;
  }
  function test(options: AtLeastOne<Options>) {
    const { foo, bar, baz } = options;
    // 省略
  }
  test({
    foo: 123,
    bar: "bar"
  });
  test({
    baz: true
  });

  // エラー例
  test({});
}