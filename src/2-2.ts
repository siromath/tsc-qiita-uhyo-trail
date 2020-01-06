/*
2-2. いくつかの文字列を受け取れる関数

以下のコードで定義される`getSpeed`は、`'slow'`, `'medium'`, `'fast'`のいずれかの文字列を受け取って数値を返す関数です。この関数に他の文字列を渡すのは型エラーとしたいです。この条件を満たすように型`Speed`を定義してください。
*/

namespace T2_2 {
  type Speed = /* ここを入力 */;

  function getSpeed(speed: Speed): number {
    switch (speed) {
      case "slow":
        return 10;
      case "medium":
        return 50;
      case "fast":
        return 200;
    }
  }

  // 使用例
  const slowSpeed = getSpeed("slow");
  const mediumSpeed = getSpeed("medium");
  const fastSpeed = getSpeed("fast");

  // エラー例
  getSpeed("veryfast");
}