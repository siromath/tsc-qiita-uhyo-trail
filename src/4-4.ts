/*
4-4. 一部だけPartial

標準ライブラリの`Partial`は、オブジェクトの全てのプロパティを省略可能にするものでした。いま、全てではなく一部のプロパティのみ省略可能にしたいです。このような機能を持つ`PartiallyPartial<T, K>`を定義してください。
*/

namespace T4_4 {
  // 使用例

  // 元のデータ
  interface Data {
    foo: number;
    bar: string;
    baz: string;
  }
  /*
   * T1は { foo?: number; bar?: string; baz: string } 型
   */
  type T1 = PartiallyPartial<Data, "foo" | "bar">;
}