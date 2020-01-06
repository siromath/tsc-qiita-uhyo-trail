/*
4-6. ページを描画する関数

以下のコードで定義される`Page`型は、とあるサービスの1ページを表すオブジェクトの型です。このオブジェクトは`page`プロパティを持ち、それで描画すべきページの種類を表しています。また、ページの種類に応じて描画に必要な情報が付加されています。`renderPage`関数は`Page`オブジェクトを受け取って適切にページを描画する関数です（ここでは描画結果は文字列としています）。

また、実際にページを描画する関数はページごとに別々の関数に分かれており、`pageGenerators`オブジェクトにまとまっています。このオブジェクトは`Page`オブジェクトの`page`プロパティに対応する名前のメソッドを持っており、それらのメソッドがそれぞれのページを描画します。メソッドはそのページに対応するオブジェクトを受け取って描画に利用します。

以下のコードに適切な型が付くように`PageGenerators`型を定義してください。
*/

namespace T4_6 {
  type Page =
    | {
      page: "top";
    }
    | {
      page: "mypage";
      userName: string;
    }
    | {
      page: "ranking";
      articles: string[];
    };

  type PageGenerators = /* ここを埋める */;

  const pageGenerators: PageGenerators = {
    top: () => "<p>top page</p>",
    mypage: ({ userName }) => `<p>Hello, ${userName}!</p>`,
    ranking: ({ articles }) =>
      `<h1>ranking</h1>
         <ul>
        ${articles.map(name => `<li>${name}</li>`).join("")}</ul>`
  };
  const renderPage = (page: Page) => pageGenerators[page.page](page as any);
}