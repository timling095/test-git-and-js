class Node {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
let root;

function setup() {
    CreateCanvas(windowWidth, windowHeight);
    root = new Node(10);
    root.left = new Node(8);
    root.right = new Node(12);
    root.left.left = new Node(5);
    root.left.right = new Node(9);
    root.right.left = new Node(11);
    root.left.left.left = new Node(3);
    root.left.left.right = new Node(6);
    root.left.left.left.left = new Node(1);
    root.left.left.left.right = new Node(4);
}

function draw() {
    background(255, 220, 250);
    textAlign(CENTER, CENTER);
    textSize(20);
    drawTree(root, width/2, 100, width/6);
}

function drawTree(node, x, y, spacing) {
    if (node == null) {
        return;
    }
fill(255, 150, 200);
stroke(0);
ellipse(x, y, 50, 50);
fill(0);
noStroke();
txet(node.value, x, y);
if (node.left != null) {
    stroke(0);
    line(x, y, x - spacing, y + 100); // 畫連到左邊的線
    drawTree(node.left, x - spacing, y + 100, spacing / 1.5); // 繼續畫左邊
  }
  if (node.right != null) {
    stroke(0);
    line(x, y, x + spacing, y + 100); // 畫連到右邊的線
    drawTree(node.right, x + spacing, y + 100, spacing / 1.5); // 繼續畫右邊
  }
}
