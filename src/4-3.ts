/*
4-3. unionは嫌だ

以下のコードで定義される`EventDischarger`は問題3-3と同じものです。実は、問題3-3で想定される解答にはひとつ問題があります。それは、コード一番下の「エラー例」にあるように`emit`の型引数に`"start" | "stop"`のようなユニオン型を渡すことで型チェックを欺いて不正なデータを渡すことができる点です。この例ではイベント名が`"stop"`なのにデータは`"start"`用のものになっています。

このような問題を回避するために、`emit`の型引数`Ev`をイベント名のユニオン型にして関数が呼ばれるのを型エラーで防ぐことにしました。この要件を満たすように`emit`の型を完成させてください。
*/

namespace T4_3 {
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
    emit<Ev extends keyof E>(eventName: Ev, payload: /* ここを埋める */) {
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
  ed.emit<"start" | "stop">("stop", {
    user: "user1"
  });
}