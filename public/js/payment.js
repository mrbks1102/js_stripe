// fuctioon命令
function getR(height, width) {
  return height * width;
}
console.log(getR(1, 4))

// 関数リテラル
// 関数名を持たないので匿名関数、無名関数とも言われる
let getRectangle = function (height, width) {
  return height * width
}
console.log(getRectangle(1, 2));

// functionコンストラクター
let getRec = new Function('height', 'width', 'return height * width')
console.log(getRec(3, 5))

// IDを取得
function show() {
  let choice = document.getElementById('choice');
  console.log(choice.innerText);
  let nowDate = new Date();
  choice.innerText = nowDate.toLocaleString();
}

// タグ名をキーに要素を取得
function showElemens() {
  let elements = document.getElementsByTagName('div');
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText)
  }
}

// name属性をキーに要素を取得する
function showElements() {
  let elements = document.getElementsByName('result');
  console.log(elements[0].value);
}

// class属性を持つ要素を取得する
function showElements() {
  let elements = document.getElementsByClassName('foo');
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText)
  }
}

// ノード追加
function append() {
  // li要素を生成
  let li = document.createElement('li');
  // テキストノードを生成
  let text = document.createTextNode('こんにちは');
  // liタグの要素にテキストノード textを追加
  li.appendChild(text);
  // idがlistsのulタグに、liを追加。具体的には<li>こんにちは</li>が追加される。
  let listsElement = document.getElementById('lists');
  listsElements.appendChild(li);
}

// ノードの置換
function replace() {
  // 空のli要素を作成
  let newlist = document.createElement('li');
  // 生成したノードにid属性'newlist')を付与
  newlist.setAttribute('id', 'newlist');
  // テキストノードを生成
  let newText = document.createTextNode('新しい要素です');
  // 生成したノードを、空のli要素の子ノードとして追加
  newlist.appendChild(newText);


  // 置換前のoldlistの参照を変数oldlistに代入する
  let oldlist = document.getElementsById('oldlist');
  // 親ノードulの参照を変数に代入
  let parentNode = oldlist.parentNode;
  // 既存ノードoldlistを、新規に作成したli要素newlist土地勘
  parentNode.replaceChild(newlist, oldlist);
}
