const Node = require('./node');

class MaxHeap {
	constructor() {

		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		
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
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
