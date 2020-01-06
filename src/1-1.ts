/*
1-1. 関数に型をつけよう

次の関数`isPositive`は、数値を受け取ってそれが0以上なら`true`、0未満なら`false`を返す関数です。この関数に正しく型アノテーションを付けてください。型アノテーションとは、引数や返り値の型をソースコード中に明示することです。
*/

namespace T1_1 {
  function isPositive(num) {
    return num >= 0;
  }

  // 使用例
  isPositive(3);

  // エラー例
  isPositive('123');
  const numVar: number = isPositive(-5);
}