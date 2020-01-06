/*
3-3. イベント

以下のコードで定義される`EventDischarger`クラスは、`emit`メソッドを呼び出すことでイベントを発生させる機能を持っています。イベントは`"start"`, `"stop"`, `"end"`の3種類であり、それぞれのイベントを発生させるときはイベントに合ったデータを`emit`メソッドに渡す必要があります。具体的には、`"start"`イベントに対しては`{ user: string }`型のデータを、`"stop"`イベントに対しては`{ user: string; after: number }`型のデータを、そして`"end"`イベントに対しては`{}`型のデータを渡さなくてはなりません。各イベント名に対して必要なデータの型は、`EventPayloads`型に`イベント名: データの型`の形でまとめて定義してあります。

いま、`emit`メソッドが間違ったイベント名やデータに対しては型エラーを出すようにしたいです。`emit`メソッドに適切な型を付けてください。ただし、`EventDischarger`の汎用性を上げるために、`EventDischarger`はイベントを定義する型である`EventPayloads`を型引数`E`として受け取るようになっています。`emit`は、`E`に定義されたイベントを適切に受け付ける必要があります。
*/

namespace T3_3 {
  interface EventPayloads {
    start: {
      user: string;
    };
    stop: {
      user: string;
      after: number;
    };
    end: {};
  }

  class EventDischarger<E> {
    emit(eventName, payload) {
      // 省略
    }
  }

  // 使用例
  const ed = new EventDischarger<EventPayloads>();
  ed.emit("start", {
    user: "user1"
  });
  ed.emit("stop", {
    user: "user1",
    after: 3
  });
  ed.emit("end", {});

  // エラー例
  ed.emit("start", {
    user: "user2",
    after: 0
  });
  ed.emit("stop", {
    user: "user2"
  });
  ed.emit("foobar", {
    foo: 123
  });
}