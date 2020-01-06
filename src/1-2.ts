/*
1-2. オブジェクトの型

1人のユーザーのデータを表すオブジェクトは、`name`プロパティと`age`プロパティ、そして`private`プロパティを持っています。`name`は文字列、`age`は数値、`private`は真偽値です。ユーザーデータのオブジェクトの型`User`を定義してください。
*/

namespace T1_2 {
  function showUserInfo(user: User) {
    // 省略
  }

  // 使用例
  showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false,
  });

  // エラー例
  showUserInfo({
    name: 'Mary Sue',
    private: false,
  });
  const usr: User = {
    name: 'Gombe Nanashino',
    age: 100,
  };
}