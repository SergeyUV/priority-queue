const Node = require('./node');

class MaxHeap {
	constructor() {

		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		
		if(!this.root){
			this.root = node;
			this.parentNodes.push(this.root);
			return;
		}
		
		while (true){
			
			if(this.parentNodes[0].left == null){
				this.parentNodes[0].left = node;
				node.parent = this.parentNodes[0];
				this.parentNodes.push(node);
				return;
			}

			if(this.parentNodes[0].right == null){
				this.parentNodes[0].right = node;
				node.parent = this.parentNodes[0];
				this.parentNodes.push(node);
				this.parentNodes.shift();
				return;
			}

		}
	}

	shiftNodeUp(node) {
	
		if(!node.parent){
			this.root = node;
			return;
		}
		let n_parent = 	node.parent;
		this.parentNodes.pop();
		node.swapWithParent();
		this.shiftNodeUp(node);
		this.parentNodes.push(n_parent);
	}
	// shiftNodeUp(node) {
	// 	let nodeToFind = node;
	// 	while(node.parent){
	// 		let i = this.parentNodes.indexOf(nodeToFind);
	// 		if(i >= 0){
	// 			this.parentNodes[i] = node.parent;
	// 		}
	// 		nodeToFind = node.parent;
	// 		node.swapWithParent();
	// 	}
	// 	this.root = node;		
	// }

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
