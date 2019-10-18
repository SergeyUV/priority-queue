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
			return;
		}

		let queue = [this.root];
		
		while (true){
			
			if(queue[0].left == null){
				queue[0].left = node;
				node.parent = queue[0];
				return;
			}

			if(queue[0].right == null){
				queue[0].right = node;
				node.parent = queue[0];
				return;
			}

			queue.push(queue[0].left, queue[0].right);
			queue.shift();
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
