class Node {
    constructor(value, x = 0, y = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }
}

let root;
function setup() {
  createCanvas(windowWidth, windowHeight);
  root = null; // 一開始是空樹
  inputBox = createInput();
  inputBox.position(20 ,20);
  inputBox.size(100);
  insertButton = createButton('insert');
  insertButton.position(130, 20);
  insertButton.mousePressed(onInsertPressed);
}
function draw() {
    background(255, 220, 250);
    textAlign(CENTER, CENTER);
    textSize(20);
    drawTree(root);
}
function drawTree(node) {
    if (node == null) {
        return;
    }

    if (node.left != null) {
        stroke(0);
        line(node.x, node.y, node.left.x, node.left.y);
        drawTree(node.left);
    }
    if (node.right != null) {
        stroke(0);
        line(node.x, node.y, node.right.x, node.right.y);
        drawTree(node.right);
    }

    fill(255, 150, 200);
    stroke(0);
    ellipse(node.x, node.y, 50, 50);
    fill(0);
    noStroke();
    text(node.value, node.x, node.y);
}

// 插入新數字
function insert(value) {
    root = insertNode(root, value);
    updatePositions(root, width/2, 100, width/6); // 每次插入後更新座標
}

// 插入的輔助函數
function insertNode(node, value) {
    if (node == null) {
        return new Node(value);
    }
    if (value < node.value) {
        node.left = insertNode(node.left, value);
    } else if (value > node.value) {
        node.right = insertNode(node.right, value);
    }
    return node;
}

// 更新每個節點的位置
function updatePositions(node, x, y, spacing) {
    if (node == null) return;
    node.x = x;
    node.y = y;
    if (node.left != null) {
        updatePositions(node.left, x - spacing, y + 100, spacing / 1.5);
    }
    if (node.right != null) {
        updatePositions(node.right, x + spacing, y + 100, spacing / 1.5);
    }
}

function onInsertPressed() {
  let value = float(inputBox.value());
  if(!isNaN(value)){
    insert(value);
    inputBox.value('');
  }
}
